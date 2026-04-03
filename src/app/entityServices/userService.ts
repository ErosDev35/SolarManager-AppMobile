import { DataService } from "./dataService";
import { Agent } from "../entity/agent";

export class UserService{
    dataService : any;
    users : any[] = [];
    username : String = "";
    user : Agent = new Agent(0,"","");

    GetAll() : any{
        this.dataService = new DataService();
        const userArray = this.dataService.getEntityData("User");

        this.users = [];

        for(let data of userArray){
            this.users.push(new Agent(data.ID, data.LOGIN, data.PASSWORD));
        }

        return this.users;
    }

    GetByLogin(login : String) : any{
        this.dataService = new DataService();
        const userArray : any[] = [];
        userArray.push(this.dataService.getEntityData("User/" + login));

        this.user = new Agent(userArray[0].id,userArray[0].login,userArray[0].password);

        return this.user;
    }
}