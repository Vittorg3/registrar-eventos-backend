import { 
	IEventEditDTO, 
	IEventRemoveDTO 
} from "../DTO/usecases/EventDTO";

import { IGroupEditDTO, IGroupRemoveDTO } from "../DTO/usecases/GroupDTO";

import { 
	IUserInviteToGroupDTO, 
	IUserRemoveFromGroupDTO, 
	IUserSigninDTO 
} from "../DTO/usecases/UserDTO";

import Event from "../entities/Event/Event";
import Group from "../entities/Group/Group.";
import User from "../entities/User/User";

export interface IUserRepository {
	save(user: User): Promise<boolean>;
	signin(data: IUserSigninDTO): Promise<{user: User, token: string}>;
	saveGroup(group: Group): Promise<boolean>;
	EditGroup(data: IGroupEditDTO): Promise<boolean>;
	RemoveGroup(id: IGroupRemoveDTO): Promise<boolean>;
	createEvent(event: Event, who_create_event: string): Promise<boolean>;
	removeEvent(data: IEventRemoveDTO): Promise<boolean>;
	editEvent(data: IEventEditDTO): Promise<boolean>;
	inviteToGroup(data: IUserInviteToGroupDTO): Promise<boolean>;
	removeFromGroup(data: IUserRemoveFromGroupDTO): Promise<boolean>;
	findByEmail(email: string): Promise<boolean>;
	findGroupByName(name: string): Promise<boolean>;
	findEventByName(name: String): Promise<boolean>;
};