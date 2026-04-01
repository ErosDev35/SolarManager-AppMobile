import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    restfulServerUrl = 'http://172.16.79.109:8080/SolarManagerServeur/rest/';
    restfullServerLogin = '?login=solaire&pass=zeus';

    constructor() {}

    getEntityData(entity: string): { data: any[] } {
        const finalUrl = this.restfulServerUrl + entity + this.restfullServerLogin;
        console.log(finalUrl);

        const xhr = new XMLHttpRequest();
        xhr.open('GET', finalUrl, false);
        xhr.send();

        if (xhr.status === 200) {
            console.log(xhr.responseText);
            const response = JSON.parse(xhr.responseText);
            console.log(response);
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