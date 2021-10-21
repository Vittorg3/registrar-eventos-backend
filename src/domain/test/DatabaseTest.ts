import User from "../entities/User/User";
import Event from '../entities/Event/Event';
import Group from "../entities/Group/Group.";

import { 
    IUserInviteToGroupDTO, 
    IUserRemoveFromGroupDTO, 
    IUserSigninDTO 
} from "../DTO/usecases/UserDTO";

import { IUserRepository } from "../repositories/User.repository";
import { IEventEditDTO, IEventRemoveDTO } from "../DTO/usecases/EventDTO";
import { IGroupEditDTO, IGroupRemoveDTO } from "../DTO/usecases/GroupDTO";

export default class DatabaseTest implements IUserRepository {
    async findGroupByName(name: string): Promise<boolean> {
        return false;
    }

    async findByEmail(email: string): Promise<boolean> {
        return false;
    }

    async save(user: User): Promise<boolean> {
        if(user.name === undefined) {
            throw new Error('usuario inválido');
        }
        
        if(user.age === undefined) {
            throw new Error('usuario inválido');
        }
        
        if(user.group === undefined) {
            throw new Error('usuario inválido');
        }

        if(user.email === undefined) {
            throw new Error('usuario inválido');
        }

        if(user.password === undefined) {
            throw new Error('usuario inválido');
        }
        
        return true;
    }

    async signin(data: IUserSigninDTO): Promise<{ user: User; token: string; }> {
        if(data.email === undefined) {
            throw new Error('dados inválidos');
        }

        if(data.password === undefined) {
            throw new Error('dados inválidos');
        }

        const userLogged = new User('nome do usuário logado', 23, 'grupo do usuário', 'email@usuario', 'senha usuario');
        const token = 'hash automático';
        
        return {token, user: userLogged};
    }

    async saveGroup(group: Group): Promise<boolean> {
        if(group.name === undefined) {
            throw new Error('usuario inválido');
        }
        
        if(group.description === undefined) {
            throw new Error('usuario inválido');
        }

        return true;
    }

    async EditGroup(data: IGroupEditDTO): Promise<boolean> {
        if(data.id_group === undefined) {
            throw new Error('usuario inválido');
        }

        return true;
    }
    
    async RemoveGroup(data: IGroupRemoveDTO): Promise<boolean> {
        if(data.id_group === undefined) {
            throw new Error('usuario inválido');
        }

        return true;
    }

    async createEvent(event: Event): Promise<boolean> {
        if(event.name === undefined) {
            throw new Error('dados inválidos');
        }

        if(event.description === undefined) {
            throw new Error('dados inválidos');
        }

        if(event.date === undefined) {
            throw new Error('dados inválidos');
        }

        return true;
    }

    async removeEvent(data: IEventRemoveDTO): Promise<boolean> {
        if(data.event_id === undefined) {
            throw new Error('dados inválidos');
        }
        
        return true;
    }

    async editEvent(data: IEventEditDTO): Promise<boolean> {
        if(data.event_id === undefined) {
            throw new Error('dados inválidos');
        }

        if(data.who_edit_id === undefined) {
            throw new Error('dados inválidos');
        }

        return true;
    }

    async inviteToGroup(data: IUserInviteToGroupDTO): Promise<boolean> {
        if(data.who_invite_id === undefined) {
            throw new Error('dados inválidos');
        }

        if(data.who_invited_id === undefined) {
            throw new Error('dados inválidos');
        }

        return true;
    }

    async removeFromGroup(data: IUserRemoveFromGroupDTO): Promise<boolean> {
        if(data.who_remove_id === undefined) {
            throw new Error('dados inválidos');
        }

        if(data.who_removed_id === undefined) {
            throw new Error('dados inválidos');
        }

        return true;
    }  
}