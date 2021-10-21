import { IUserDTO, IUserSigninDTO, IUserInviteToGroupDTO, IUserRemoveFromGroupDTO } from "../../DTO/usecases/UserDTO";
import { IValidatorUser } from "../../DTO/validation/User";

export default class ValidationUser implements IValidatorUser {
    validFieldsSignup(fields: IUserDTO): boolean | Error {
        try {
            if(fields.name === undefined || (fields.age === undefined || fields.age === 0)|| fields.group === undefined || fields.email === 'undefined' || fields.password === undefined) {
                throw new Error('Dados inválidos.');
            }

            if(fields.name.trim() === '' && fields.group.trim() === '' && fields.email.trim() === '' && fields.password.trim() === '') {
                throw new Error('Dados inválidos.');
            }

        } catch (error) {
            throw new Error(`Erro ao tentar cadastrar o usuário. ${(error as Error).message}`);
        }

        return true;
    }

    validFieldsSignin(fields: IUserSigninDTO): boolean | Error {
        try {
            if(fields.email === undefined || fields.password === undefined) {
                throw new Error('Dados inválidos.');
            }

            if(fields.email.trim() === '' || fields.password.trim() === '') {
                throw new Error('Dados inválidos.');
            }

        } catch (error) {
            throw new Error(`Erro ao tentar logar o usuário. ${(error as Error).message}`);
        }

        return true;
    }

    validFieldsInviteToGroup(fields: IUserInviteToGroupDTO): boolean | Error {
        try {
            if(fields.who_invite_id === undefined || fields.who_invite_id === undefined) {
                throw new Error('Dados inválidos.');
            }

            if(fields.who_invite_id.trim() === '' || fields.who_invited_id.trim() === '') {
                throw new Error('Dados inválidos.');
            }

        } catch (error) {
            throw new Error(`Erro ao tentar logar o usuário. ${(error as Error).message}`);
        }

        return true;
    }

    validFieldsRemoveFromGroup(fields: IUserRemoveFromGroupDTO): boolean | Error {
        try {
            if(fields.who_remove_id === undefined || fields.who_removed_id === undefined) {
                throw new Error('Dados inválidos.');
            }

            if(fields.who_remove_id.trim() === '' || fields.who_removed_id.trim() === '') {
                throw new Error('Dados inválidos.');
            }

        } catch (error) {
            throw new Error(`Erro ao tentar logar o usuário. ${(error as Error).message}`);
        }

        return true;
    }
    
}