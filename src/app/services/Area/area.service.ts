import { HttpClient } from "@angular/common/http";
import {Injectable, inject} from "@angular/core";
import { of,Observable,map } from "rxjs";
import { Area } from "../../response/Area";

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http: HttpClient) { }

  getArea():Observable<any>{
    //return of(ACUDIENTES);
    return this.http.get('http://localhost:8080/Area/Areas').pipe(
      map( (response)=> response as Area[])
    );
  }
}
