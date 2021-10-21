export interface IUserDTO {
    id?: string;
    name: string;
    age: number;
    group: string;
    email: string;
    password: string;
};

export interface IUserSigninDTO {
    email: string;
    password: string;
};

export interface IUserInviteToGroupDTO {
    who_invite_id: string;
    who_invited_id: string;
};

export interface IUserRemoveFromGroupDTO {
    who_remove_id: string;
    who_removed_id: string;
};