import { Injectable } from '@angular/core';
import jsonData from '../assets/data.json';

@Injectable({ providedIn: 'root' })
export class DataService {
    data: any = null;

    getEntityData(entity : String) {
        this.data = (jsonData as any).default ?? jsonData;

        const dataArray = Array.isArray(this.data) ? this.data.find((t: any) => t?.type === 'table' && t?.name === entity) : undefined;

        return dataArray;
    }
}