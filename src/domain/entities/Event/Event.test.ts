import Event from "./Event";

describe('test Event entite', () => {
	test('should return an Event', () => {
			const event = new Event('Reunião dos músicos', 'iremos falar sobre os retornos individuais', 'empty', new Date());
			expect(event).toEqual(event);
	});
});