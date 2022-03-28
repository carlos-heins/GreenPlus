import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}
    async execute({name, email, password}: ICreateUsersDTO): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email)

        if(userAlreadyExists) {
            throw new Error("User already exists")
        }

        // falta encriptar a senha com o bcryptjs
        
        this.usersRepository.create({ name, email, password })
    }
}

export { CreateUserUseCase };