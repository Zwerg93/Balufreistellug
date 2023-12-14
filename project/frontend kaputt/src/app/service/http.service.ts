import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StreetModel} from "../models/street.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {
  }


  getStreetsPerName(streetname: string): Observable<any> {
    console.log("Streetname: " + streetname)


    const queryString = `[out:json][timeout:2500];
        area[name="${streetname}"]->.searchArea;
        (
          way["highway"]["name"](area.searchArea);
        );
        for (t["name"])
        {
          make street name=_.val;
          out;
        }`;
    return this.http.post<StreetModel[]>("https://overpass-api.de/api/interpreter", "data=" + encodeURIComponent(queryString));

  }


}
