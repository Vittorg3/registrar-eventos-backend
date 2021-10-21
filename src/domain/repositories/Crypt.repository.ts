export interface ICryptRepository {
    hashPassword(password: string): string;
    comparePassword(password: string, passwordHash: string): boolean; 
};