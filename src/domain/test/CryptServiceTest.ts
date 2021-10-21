import { ICryptRepository } from "../repositories/Crypt.repository";

export default class CryptServiceTest implements ICryptRepository {
    hashPassword(password: string): string {
        return 'password hash';
    }

    comparePassword(password: string, passwordHash: string): boolean {
        return true;
    }

};