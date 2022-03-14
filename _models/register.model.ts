export class RegisterModel {
    username?: any;
    email?: any;
    password?: any;

    usernameError?: any;
    emailError?: any;
    passwordError?: any;


    constructor(data: any = {}) {
        this.username = data.username || "";
        this.email = data.email || "";
        this.password = data.password || "";
    }
}