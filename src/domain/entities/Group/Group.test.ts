import User from "../User/User";
import Group from "./Group.";

describe('test Group entitie', () => {
    test('should return an Group', () => {
        const group = new Group('Ministério de Louvor', 'Louvor da igreja');
        expect(group).toEqual(group);
    });
});