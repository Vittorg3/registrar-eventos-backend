export interface IEventDTO {
	who_create_event: string;
	id?: string;
	name: string;
	description: string;
	date: Date;
	photo?: string;
};

export interface IEventRemoveDTO {
	event_id: string;
	who_edit_id: string;
};

export interface IEventEditDTO {
	event_id: string;
	who_edit_id: string;
	name?: string;
	description?: string;
	date?: Date;
	photo?: string;
};
