import { ICreateUsersDTO } from "../dtos/ICreateUsersDTO";
import { User } from "../entities/User"

interface IUsersRepository {
    create(data: ICreateUsersDTO) : Promise<void>;
    findById(id: string) : Promise<User>
    findByEmail(email: string) : Promise<User>
}
export { IUsersRepository }