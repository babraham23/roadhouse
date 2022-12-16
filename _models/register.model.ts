import { RegisterInterface } from '../_interfaces/register.interface';

export class RegisterModel {
    username: string;
    email: string;
    password: string;

    constructor(data: RegisterInterface | any = {}) {
        this.username = data.username || '';
        this.email = data.email || '';
        this.password = data.password || '';
    }
}
