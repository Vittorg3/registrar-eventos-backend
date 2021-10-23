import { IGroupSaveDTO, IGroupEditDTO, IGroupRemoveDTO } from "../../DTO/usecases/GroupDTO";
import { IValidationGroup } from "../../DTO/validation/Group";

export default class ValidationGroup implements IValidationGroup {
    validFieldsSave(fields: IGroupSaveDTO): boolean | Error {
        try {
            if(fields.name === undefined || fields.description === undefined || fields.who_create_group === undefined) {
                throw new Error('Dados inválidos.');
            }

            if(fields.name.trim() === '' || fields.description.trim() === '' || fields.who_create_group.trim() === '') {
                throw new Error('Dados inválidos.');
            }

        } catch (error) {
            throw new Error(`Erro ao cadastrar o grupo. ${(error as Error).message}`);
        }
        
        return true;
    }

    validFieldsEdit(fields: IGroupEditDTO): boolean | Error {
        try {
            if(fields.id_group === undefined) {
                throw new Error('grupo não encontrado.');
            }

            if(fields.who_edit_group === undefined) {
                throw new Error('Não têm permissão para alterar o grupo.');
            }

            if(fields.name === undefined && fields.description === undefined && fields.photo === undefined) {
                throw new Error('Dados inválidos.');
            }
 
        } catch (error) {
            throw new Error(`Erro ao editar o grupo. ${(error as Error).message}`);
        }

        return true;
    }

    validFieldsRemove(fields: IGroupRemoveDTO): boolean | Error {
        try {
            if(fields.id_group === undefined || fields.id_group.trim() === '') {
                throw new Error('Dados inválidos.');
            }

            if(fields.who_remove_group === undefined || fields.who_remove_group.trim() === '') {
                throw new Error('Dados inválidos.');
            }
            
        } catch (error) {
            throw new Error(`Erro ao remover o grupo. ${(error as Error).message}`);
        }
       
       return true;
    }

};