export interface IGroupSaveDTO {
    id?: string;
    name: string;
    description: string;
    photo?: string;
    subscribers?: string[];
};

export interface IGroupEditDTO {
    id_group: string;
    name?: string;
    description?: string;
    photo?: string;
    ssubscribers?: string[];
};

export interface IGroupRemoveDTO {
    id_group: string;
};