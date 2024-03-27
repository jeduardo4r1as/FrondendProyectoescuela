import { HttpClient } from "@angular/common/http";
import {Injectable, inject} from "@angular/core";
import { of,Observable,map } from "rxjs";
import { Estudiante } from "../../response/estudiante";

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  constructor(private http: HttpClient) { }

  getEstudiante():Observable<any>{
    //return of(ACUDIENTES);
    return this.http.get('http://localhost:8080/Estudiante/Estudiantes').pipe(
      map( (response)=> response as Estudiante[])
    );
  }
}
