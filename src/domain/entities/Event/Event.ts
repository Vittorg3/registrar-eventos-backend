import { v4 } from 'uuid';

export default class Event {
	public readonly id: string;

	public name: string;
	public description: string;
	public photo: string;
	public date: Date;

	constructor (name: string, description: string, photo: string, date: Date, id?: string) {
		this.name = name;
		this.description = description;
		this.photo = photo;
		this.date = date;

		if(!id) {
				this.id = v4();
		}
	}
};