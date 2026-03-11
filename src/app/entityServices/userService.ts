import { DataService } from "./dataService";
import { Agent } from "../entity/agent";

export class UserService{
    dataService : any;
    users : any[] = [];
    username : String = "";
    user : any = null;

    GetAll() : any{
        this.dataService = new DataService();
        const userArray = this.dataService.getEntityData("USER");

        this.users = [];

        for(let data of userArray.data){
            this.users.push(new Agent(data.ID, data.LOGIN, data.PASSWORD));
        }

        return this.users;
    }

    GetByLogin(login : String) : any{
        this.users = this.GetAll();
        this.user = null;
        this.users.forEach((user) => {
            this.username = user.login;

            if(this.user === null && this.username === login){
                this.user = user;
            }
        })
        return this.user;
    }
}