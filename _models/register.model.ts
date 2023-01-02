import { RegisterInterface } from '../_interfaces/register.interface';

export class RegisterModel {
    firstName: string;
    lastName: string;
    email: string;
    password: string;

    constructor(data: RegisterInterface | any = {}) {
        this.firstName = data.firstName || '';
        this.lastName = data.lastName || '';
        this.email = data.email || '';
        this.password = data.password || '';
    }
}
