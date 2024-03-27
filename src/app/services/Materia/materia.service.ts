import { HttpClient } from "@angular/common/http";
import {Injectable, inject} from "@angular/core";
import { of,Observable,map } from "rxjs";
import { Materia } from "../../response/materia";

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor(private http: HttpClient) { }

  getMaterias():Observable<any>{
    //return of(ACUDIENTES);
    return this.http.get('http://localhost:8080/Materia/Materias').pipe(
      map( (response)=> response as Materia[])
    );
  }
}
