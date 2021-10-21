import { 
    IUserDTO, 
    IUserInviteToGroupDTO, 
    IUserRemoveFromGroupDTO, 
    IUserSigninDTO 
} from "../usecases/UserDTO";

export interface IValidatorUser {
    validFieldsSignup(fields: IUserDTO): boolean | Error;
    validFieldsSignin(fields: IUserSigninDTO): boolean | Error;
    validFieldsInviteToGroup(fields: IUserInviteToGroupDTO): boolean | Error;
    validFieldsRemoveFromGroup(fields: IUserRemoveFromGroupDTO): boolean | Error;
};