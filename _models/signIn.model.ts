export class SignInModel {
    username?: any;
    password?: any;

    usernameError?: any;
    passwordError?: any;


    constructor(data: any = {}) {
        this.username = data.username || "";
        this.password = data.password || "";
    }
}