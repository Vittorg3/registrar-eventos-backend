import { IGroupEditDTO, IGroupRemoveDTO, IGroupSaveDTO } from "../usecases/GroupDTO";

export interface IValidationGroup {
    validFieldsSave(fields: IGroupSaveDTO): boolean | Error;
    validFieldsEdit(fields: IGroupEditDTO): boolean | Error;
    validFieldsRemove(fields: IGroupRemoveDTO): boolean | Error;
};
