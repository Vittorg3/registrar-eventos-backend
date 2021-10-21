import bcrypt from 'bcryptjs';

import { ICryptRepository } from "../domain/repositories/Crypt.repository";

export default class BcryptService implements ICryptRepository {
    hashPassword(password: string): string {
        return bcrypt.hashSync(password);
    }

    comparePassword(password: string, passwordHash: string): boolean {
        return bcrypt.compareSync(password, passwordHash);
    }
}; 