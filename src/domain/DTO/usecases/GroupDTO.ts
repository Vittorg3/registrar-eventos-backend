export interface IGroupSaveDTO {
    who_create_group: string;
    id?: string;
    name: string;
    description: string;
    photo?: string;
    subscribers?: string[];
};

export interface IGroupEditDTO {
    who_edit_group: string;
    id_group: string;
    name?: string;
    description?: string;
    photo?: string;
    ssubscribers?: string[];
};

export interface IGroupRemoveDTO {
    who_remove_group: string;
    id_group: string;
};