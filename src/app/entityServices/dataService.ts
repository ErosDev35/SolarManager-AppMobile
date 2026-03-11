import { Injectable } from '@angular/core';
import jsonData from '../assets/data.json';
import { Mppt } from '../entity/mppt';

@Injectable({ providedIn: 'root' })
export class DataService {
    data: any = null;
    deviceGroup : any[] = [];
    device : any;

    getEntityData(entity : String) {
        this.data = (jsonData as any).default ?? jsonData;
        const dataArray = Array.isArray(this.data) ? this.data.find((t: any) => t?.type === 'table' && t?.name === entity) : undefined;
        return dataArray;
    }

    getById(entity : String, id : number){
        this.deviceGroup = [];
        const dataArray = this.getEntityData(entity);
        dataArray.data.forEach((element : any) => {
            if(element.ID.toString().includes(id)) {
                this.deviceGroup.push(element);
            }
        })
        return this.deviceGroup;
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