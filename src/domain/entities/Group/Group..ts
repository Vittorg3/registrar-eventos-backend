import { v4 } from "uuid";

export default class Group {
	public readonly id: string;

	public who_create_group: string;
	public name: string;
	public description: string;
	public photo: string;
	public subscribers: string[];

	constructor (who_create_group: string, name: string, description: string, photo?: string, subscribers?: string[], id?: string) {
		this.who_create_group = who_create_group;
		this.name = name;
		this.description = description;
		
		photo && (this.photo = photo);
		subscribers && (this.subscribers = subscribers);

		!id && (this.id = v4());
		!photo && (this.photo = 'empty');
		!subscribers && (this.subscribers = []);

	}

	public addSubscribers = (subs: string[]) => {
		this.subscribers = subs;
	};
};