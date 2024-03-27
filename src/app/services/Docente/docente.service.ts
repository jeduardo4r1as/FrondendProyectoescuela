import { HttpClient } from "@angular/common/http";
import {Injectable, inject} from "@angular/core";
import { of,Observable,map } from "rxjs";
import { Docente } from "../../response/docente";

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private http: HttpClient) { }

  getDocente():Observable<any>{
    //return of(ACUDIENTES);
    return this.http.get('http://localhost:8080/Docente/Docentes').pipe(
      map( (response)=> response as Docente[])
    );
  }
}
