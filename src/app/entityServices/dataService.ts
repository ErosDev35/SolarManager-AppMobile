import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    restfulServerUrl = 'http://localhost:3000/api/SolarManagerServeur/rest/';
    restfullServerLogin = '?login=solaire&pass=zeus';
    lastEntityLog : any = null;

    constructor() {}

    getEntityData(entity: string): Promise<{ data: any[] }> {
        return new Promise((resolve, reject) => {
            const finalUrl = this.restfulServerUrl + entity + this.restfullServerLogin;

            const xhr = new XMLHttpRequest();
            xhr.open('GET', finalUrl, true); // async true
            xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

            xhr.onload = () => {
                if (xhr.status === 200) {
                    try {
                        const response = JSON.parse(xhr.responseText);
                        if (Array.isArray(response)) {
                            resolve({ data: response });
                        } else if (response && Array.isArray(response.data)) {
                            resolve(response);
                        } else {
                            resolve({ data: response ? [response] : [] });
                        }
                    } catch (e) {
                        reject(new Error('Erreur de parsing JSON'));
                    }
                } else {
                    console.error('Erreur HTTP:', xhr.status, xhr.statusText);
                    resolve({ data: [] });
                }
            };

            xhr.onerror = () => {
                reject(new Error('Erreur réseau'));
            };

            xhr.send();
        });
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