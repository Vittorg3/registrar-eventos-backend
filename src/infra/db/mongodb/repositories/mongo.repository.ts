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
        return true;
    }

    async EditGroup(data: IGroupEditDTO): Promise<boolean> {
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
        const infoDeleted = await groupModel.deleteOne({id: data.id_group});
        
        if(infoDeleted.deletedCount === 0) {
            throw new Error('Grupo não encontrado.');
        }
        
        return true;
    }

    async createEvent(event: Event): Promise<boolean> {
        await eventModel.create(event);
        return true;
    }

    async removeEvent(data: IEventRemoveDTO): Promise<boolean> {
        const infoDeleted = await eventModel.deleteOne({id: data.event_id});

        if(infoDeleted.deletedCount === 0) {
            throw new Error('Grupo não encontrado.');
        }

        return true;
    }

    async editEvent(data: IEventEditDTO): Promise<boolean> {
        const infoUpdated = await eventModel.findOneAndUpdate({id: data.event_id}, {
            name: data.name,
            description: data.description,
            photo: data.photo,
            date: new Date()
        }, {rawResult: true});
       
        if(infoUpdated.value === null) {
            throw new Error('Evento não encontrado.');
        }
        //falta testar
        return true;
    }

    inviteToGroup(data: IUserInviteToGroupDTO): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    removeFromGroup(data: IUserRemoveFromGroupDTO): Promise<boolean> {
        throw new Error("Method not implemented.");
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