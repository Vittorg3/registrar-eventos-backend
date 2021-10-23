import { v4 as buildToken } from 'uuid';

import BcryptService from "../../../../services/bcrypt";

import Event from "../../../../domain/entities/Event/Event";
import Group from "../../../../domain/entities/Group/Group.";
import User from "../../../../domain/entities/User/User";

import { IUserRepository } from "../../../../domain/repositories/User.repository";
import { IEventRemoveDTO, IEventEditDTO } from "../../../../domain/DTO/usecases/EventDTO";
import { IGroupEditDTO, IGroupRemoveDTO } from "../../../../domain/DTO/usecases/GroupDTO";
import { IUserSigninDTO, IUserInviteToGroupDTO, IUserRemoveFromGroupDTO } from "../../../../domain/DTO/usecases/UserDTO";

const cryptService = new BcryptService();

import userModel from '../drivers/mongoose/models/User';
import groupModel from '../drivers/mongoose/models/Group';
import eventModel from '../drivers/mongoose/models/Event';
import eventLeadersModel from '../drivers/mongoose/models/Event_Leader';
import groupLeadersModel from '../drivers/mongoose/models/Group_Leader';
import groupSubscriberModel from '../drivers/mongoose/models/Group_Subscribers';

export default class MongoRepository implements IUserRepository {
    async save(user: User): Promise<boolean> {
        await userModel.create(user);
        return true;
    }
    
    async signin(data: IUserSigninDTO): Promise<{ user: User; token: string; }> {
        const user = await userModel.findOne({email: data.email});

        if(!user) {
            throw new Error('usuário/senha incorretos');
        }

        const passwordIsEqual = cryptService.comparePassword(data.password, user.password);

        if(!passwordIsEqual) {
            throw new Error('usuário/senha incorretos');
        }

        return { user, token: buildToken()}
    }

    async saveGroup(group: Group): Promise<boolean> {
        await groupModel.create(group);
        const user = await userModel.findOne({id: group.who_create_group});
        await groupLeadersModel.create({id: buildToken(), user_name: user.name, group: group.name});
        return true;
    }

    async EditGroup(data: IGroupEditDTO): Promise<boolean> {
        const userWhoEdit = await userModel.findOne({id: data.who_edit_group});
        const group = await groupModel.findOne({id: data.id_group});

        const userIsAuthorized = await groupLeadersModel.findOne({user_name: userWhoEdit.name, group: group.name});

        if(!userIsAuthorized) {
            throw new Error('Usuário não têm permissão para editar o grupo.');
        }
        
        const infoUpdated = await groupModel.findOneAndUpdate({id: data.id_group}, {
            name: data.name, 
            description: data.description,
            photo: data.photo,
            subscribers: data.ssubscribers
        }, {rawResult: true});
       
        if(infoUpdated.value === null) {
            throw new Error('Grupo não encontrado.');
        }

        return true;
    }

    async RemoveGroup(data: IGroupRemoveDTO): Promise<boolean> {
        const userWhoRemove = await userModel.findOne({id: data.who_remove_group});
        const group = await groupModel.findOne({id: data.id_group});

        const userIsAuthorized = await groupLeadersModel.findOne({user_name: userWhoRemove.name, group: group.name});

        if(!userIsAuthorized) {
            throw new Error('Usuário não têm permissão para remover o grupo.');
        }

        const infoDeleted = await groupModel.deleteOne({id: data.id_group});
        
        if(infoDeleted.deletedCount === 0) {
            throw new Error('Grupo não encontrado.');
        }
        
        return true;
    }

    async createEvent(event: Event, who_create_event: string): Promise<boolean> {
        await eventModel.create(event);
        const userWhoCreate = await userModel.findOne({id: who_create_event});
        await eventLeadersModel.create({event: event.name, user_name: userWhoCreate.name, id: buildToken()});
        return true;
    }

    async removeEvent(data: IEventRemoveDTO): Promise<boolean> {
        const userWhoRemove = await userModel.findOne({id: data.who_edit_id});
        const event = await eventModel.findOne({id: data.event_id});

        const userIsAuthorized = await eventLeadersModel.findOne({user_name: userWhoRemove.name, event: event.name});

        if(!userIsAuthorized) {
            throw new Error('Usuário não têm permissão para remover o grupo.');
        }

        const infoDeleted = await eventModel.deleteOne({id: data.event_id});

        if(infoDeleted.deletedCount === 0) {
            throw new Error('Grupo não encontrado.');
        }

        return true;
    }

    async editEvent(data: IEventEditDTO): Promise<boolean> {
        const userWhoRemove = await userModel.findOne({id: data.who_edit_id});
        const event = await eventModel.findOne({id: data.event_id});

        const userIsAuthorized = await eventLeadersModel.findOne({user_name: userWhoRemove.name, event: event.name});

        if(!userIsAuthorized) {
            throw new Error('Usuário não têm permissão para remover o grupo.');
        }

        const infoUpdated = await eventModel.findOneAndUpdate({id: data.event_id}, {
            name: data.name,
            description: data.description,
            photo: data.photo,
            date: new Date()
        }, {rawResult: true});
       
        if(infoUpdated.value === null) {
            throw new Error('Evento não encontrado.');
        }
        
        return true;
    }

    async inviteToGroup(data: IUserInviteToGroupDTO): Promise<boolean> {
        const userWhoInvite = await userModel.findOne({id: data.who_invite_id});
        const group = await groupModel.findOne({name: data.group});
        
        const userIsAuthorized = await groupLeadersModel.findOne({user_name: userWhoInvite.name, group: group.name});

        if(!userIsAuthorized) {
            throw new Error('Usuário não têm permissão convidar para o grupo.');
        }
        const user = await userModel.findOne({id: data.who_invited_id});

        if(!user) {
            throw new Error('usuário não encontrado');
        }

        const userAlreadyInvitedToThisGroup = await groupSubscriberModel.findOne({
            user_name: user.name,
            group: data.group
        });

        if(userAlreadyInvitedToThisGroup) {
            throw new Error('Este usuário já faz parte deste grupo.');
        }

        const groupExists = await this.findGroupByName(data.group);

        if(!groupExists) {
            throw new Error('Grupo informado não existe.');
        }

        await groupSubscriberModel.create({
            id: buildToken(),
            user_name: user.name,
            group: data.group
        });
 
        return true;
    }

    async removeFromGroup(data: IUserRemoveFromGroupDTO): Promise<boolean> {
        const userWhoInvite = await userModel.findOne({id: data.who_remove_id});
        const group = await groupModel.findOne({name: data.group});
        
        const userIsAuthorized = await groupLeadersModel.findOne({user_name: userWhoInvite.name, group: group.name});
        
        if(!userIsAuthorized) {
            throw new Error('Usuário não têm permissão para remover alguém do grupo.');
        }

        await groupSubscriberModel.deleteOne({id: data.who_removed_id});

        return true;
    }

    async findGroupByName(name: string): Promise<boolean> {
        const groupAlreadyExist = await groupModel.findOne({name});
        return groupAlreadyExist ? true : false;
    }

    async findByEmail(email: string): Promise<boolean> {
        const userAlreadyExist = await userModel.findOne({email});
        return userAlreadyExist ? true : false;
    }

    async findEventByName(name: string): Promise<boolean> {
        const eventAlreadyExist = await eventModel.findOne({name});
        return eventAlreadyExist ? true : false;
    }
};