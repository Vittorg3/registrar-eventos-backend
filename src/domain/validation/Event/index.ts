import { IEventDTO, IEventEditDTO, IEventRemoveDTO } from "../../DTO/usecases/EventDTO";
import { IValidatorEvent } from "../../DTO/validation/Event";

export default class ValidationEvent implements IValidatorEvent {
    validFieldsSave(fields: IEventDTO): boolean | Error {
        try {
            if(fields.who_create_event === undefined || fields.name === undefined || fields.date === undefined || fields.description === undefined) {
                throw new Error('Dados inválidos.');
            }
    
            if(fields.who_create_event.trim() === '' || fields.name.trim() === '' || fields.description === '') {
                throw new Error('Dados inválidos.');
            }

        } catch (error) {
            throw new Error(`Erro ao tentar criar o evento. ${(error as Error).message}`);
        }

        return true;
    }

    validFieldsEdit(fields: IEventEditDTO): boolean | Error {
        try {
            if(fields.event_id === undefined || fields.event_id.trim() === '') {
                throw new Error('O evento não foi encontrado.');
            }

            if(fields.who_edit_id === undefined || fields.who_edit_id.trim() === '') {
                throw new Error('Não tem permissão para editar.');
            }

            if(fields.name === undefined && fields.date === undefined && fields.description === undefined) {
                throw new Error('Campos vazios.');
            }
    
            if(fields.name?.trim() === '' || fields.description?.trim() === '') {
                throw new Error('Campos vazios..');
            }
            
        } catch (error) {
            throw new Error(`Erro ao tentar editar o evento. ${(error as Error).message}`);
        }

        return true;
    }

    validFieldsRemove(fields: IEventRemoveDTO): boolean | Error {
        try {
           if(fields.event_id === undefined || fields.who_edit_id === undefined) {
               throw new Error('O evento não foi encontrado.');
           } 

           if(fields.event_id.trim() === '' || fields.who_edit_id.trim() === '') {
                throw new Error('Não foi possível autorizar.');
           }

        } catch (error) {
            throw new Error(`Erro ao tentar remover o evento. ${(error as Error).message}`);
        }

        return true;
    }

};