import { RegisterInterface } from '../_interfaces/register.interface';

export class LoginModel {
    email: string;
    password: string;

    constructor(data: any = {}) {
        this.email = data.email || '';
        this.password = data.password || '';
    }
}
