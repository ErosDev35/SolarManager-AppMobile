export class User
{
    id : number;
    login : String;
    password : String;

    constructor(id : number, login : String, password : String){
        this.id = id;
        this.login = login;
        this.password = password;
    }
}