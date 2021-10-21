import { IUserDTO } from "../../../DTO/usecases/UserDTO";
import { IValidatorUser } from "../../../DTO/validation/User";
import { IUserRepository } from "../../../repositories/User.repository";
import { ICryptRepository } from "../../../repositories/Crypt.repository";

import User from "../../../entities/User/User";

export default class UserUseCase {
    constructor ( 
		private userRepository: IUserRepository,
      	private cryptRepository: ICryptRepository,
		private validationUser: IValidatorUser
    ) {}

    async execute (data: IUserDTO) {
		await this.validationUser.validFieldsSignup(data);
		
		const userAlreadyExist = await this.userRepository.findByEmail(data.email);

		if(userAlreadyExist) {
			throw new Error('usuário já existe.');
		}
		
		const hashPassword = this.cryptRepository.hashPassword(data.password);
		return this.userRepository.save(new User(data.name, data.age, data.group, data.email, hashPassword, data.id));
	}
};