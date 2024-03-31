import { HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable, inject} from "@angular/core";
import { of,Observable,map } from "rxjs";
import { Estudiante } from "../../response/estudiante";


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private httpHeaders=new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getEstudiante():Observable<any>{
    //return of(ACUDIENTES);
    return this.http.get('http://localhost:8080/Estudiante/Estudiantes').pipe(
      map( (response)=> response as Estudiante[])
    );
  }

  create(estudiante:Estudiante):Observable<Estudiante>{
    return this.http.post<Estudiante>('http://localhost:8080/Estudiante/Estudiantes',estudiante,{headers:this.httpHeaders});
}

getEstudiantes(id:any): Observable<Estudiante>{

  return this.http.get<Estudiante>(`${'http://localhost:8080/Estudiante/Estudiantes'}/${id}`)

}

update(docente:Estudiante):Observable<Estudiante>{
  return this.http.put<Estudiante>(`${'http://localhost:8080/Estudiante/Estudiantes'}/${docente.id_Estudiante}`,docente,{headers:this.httpHeaders});
}


delete(id:any): Observable<Estudiante>{

  return this.http.delete<Estudiante>(`${'http://localhost:8080/Estudiante/Estudiantes'}/${id}`,{headers:this.httpHeaders})

}
}
