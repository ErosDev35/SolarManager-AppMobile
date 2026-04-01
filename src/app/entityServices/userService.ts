import { DataService } from "./dataService";
import { Agent } from "../entity/agent";

export class UserService{
    dataService : any;
    users : any[] = [];
    username : String = "";
    user : any = null;

    GetAll() : any{
        this.dataService = new DataService();
        const userArray = this.dataService.getEntityData("User");

        this.users = [];

        for(let data of userArray.data){
            this.users.push(new Agent(data.ID, data.LOGIN, data.PASSWORD));
        }

        return this.users;
    }

    GetByLogin(login : String) : any{
        this.dataService = new DataService();
        const userArray = this.dataService.getEntityData("User/" + login);

        for(let data of userArray.data){
            this.user = new Agent(data.ID, data.LOGIN, data.PASSWORD);
        }

        return this.user;
    }
}