import { DataService } from "./dataService";
import { Agent } from "../entity/agent";
import { User } from "../entity/user";

export class UserService{
    dataService : any;
    users : any[] = [];

    GetAll() : any{
        this.dataService = new DataService();
        const userArray = this.dataService.getEntityData("USER");

        this.users = [];

        for(let data of userArray.data){
            this.users.push(new Agent(data.ID, data.LOGIN, data.PASSWORD));
        }

        return this.users;
    }
}