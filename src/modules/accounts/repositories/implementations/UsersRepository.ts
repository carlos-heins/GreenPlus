import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    create(data: ICreateUsersDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    findByEmail(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }

}

export { UsersRepository }