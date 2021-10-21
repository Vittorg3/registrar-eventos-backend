import { v4 } from "uuid";

export default class User {
	public readonly id: string;

	public name: string;
	public age: number;
	public group: string;
	public email: string;
	public password: string;

	constructor (name: string, age: number, group: string, email: string, password: string, id?: string) {
		this.name = name;
		this.age = age;
		this.group = group;
		this.email = email;
		this.password = password;

		if(!id) {
			this.id = v4();
		}
	}
};