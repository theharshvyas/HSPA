import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { IProperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent: number): Observable<IProperty[]> {
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IProperty> = [];

        for(const [key, value] of Object.entries(data)){
          if(data.hasOwnProperty(key) && value.SellRent === SellRent){
            propertiesArray.push(value);
          }
        }
        return propertiesArray;
      })
    );
  }

}
