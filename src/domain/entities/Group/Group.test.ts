import User from "../User/User";
import Group from "./Group.";

describe('test Group entitie', () => {
    test('should return an Group', () => {
        const group = new Group('Id de quem criou o grupo', 'Ministério de Louvor', 'Louvor da igreja');
        expect(group).toEqual(group);
    });
});