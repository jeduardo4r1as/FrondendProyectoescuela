import { HttpClient } from "@angular/common/http";
import {Injectable, inject} from "@angular/core";
import { of,Observable,map } from "rxjs";
import { Asignacion } from "../../response/asignacion";

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {
  constructor(private http: HttpClient) { }

  getAsignacion():Observable<any>{
    //return of(ACUDIENTES);
    return this.http.get('http://localhost:8080/Asignacion/Asignaciones').pipe(
      map( (response)=> response as Asignacion[])
    );
  }
}
