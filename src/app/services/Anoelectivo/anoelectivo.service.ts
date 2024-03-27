import { HttpClient } from "@angular/common/http";
import {Injectable, inject} from "@angular/core";
import { of,Observable,map } from "rxjs";
import { AnoLectivo } from "../../response/Anoelectivo";

@Injectable({
  providedIn: 'root'
})
export class AnoelectivoService {

  constructor(private http: HttpClient) { }

  getAnoelectivo():Observable<any>{
    //return of(ACUDIENTES);
    return this.http.get('http://localhost:8080/Anoelectivo/Anoelectivos').pipe(
      map( (response)=> response as AnoLectivo[])
    );
  }
}
