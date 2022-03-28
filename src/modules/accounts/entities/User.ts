import {v4 as uuidv4} from 'uuid'

class User {
    id?: string;
    isAdmin: boolean
    name?: string;
    email?: string;
    password?: string;
    isLogged: boolean = false;
    created_at?: Date;
    updated_at?: Date;

    constructor() {
        this.isAdmin = false
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { User }