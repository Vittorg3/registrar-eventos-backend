import User from "./User";

describe('test User entitie', () => {
	test('should return an User', () => {
			const user = new User('Nome qualquer aqui', 23, 'Nome de evento qualquer aqui', 'email@email', 'senha');
			expect(user).toEqual(user);
	});
});