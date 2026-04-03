import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    restfulServerUrl = 'http://localhost:3000/api/SolarManagerServeur/rest/';
    restfullServerLogin = '?login=solaire&pass=zeus';
    lastEntityLog : any = null;

    constructor() {}

    getEntityData(entity: string): { data: any[] } {
        const finalUrl = this.restfulServerUrl + entity + this.restfullServerLogin;

        const xhr = new XMLHttpRequest();
        xhr.open('GET', finalUrl, false);
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        xhr.send();

        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            return response;
        } else {
            console.error('Erreur HTTP:', xhr.status, xhr.statusText);
            return { data: [] };
        }
    }

    getById(entity : String, id : number){
        return 1;
    }

    getAssociatedDevice(deviceType : String, deviceId : number){
        switch(deviceType){
            case "Mppt":
                const mpptArray = this.getById("mppt", deviceId);
            break;
            case "Inverter":
                this.getById("inverter", deviceId);
            break;
            case "Provider":
                this.getById("provider", deviceId);
            break;
            case "production":
                this.getById("production", deviceId);
            break;
        }
    }
}