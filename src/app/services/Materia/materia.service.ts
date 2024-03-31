import { HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable, inject} from "@angular/core";
import { of,Observable,map } from "rxjs";
import { Materia } from "../../response/materia";

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  private httpHeaders=new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getMaterias():Observable<any>{
    //return of(ACUDIENTES);
    return this.http.get('http://localhost:8080/Materia/Materias').pipe(
      map( (response)=> response as Materia[])
    );
  }

  create(materia:Materia):Observable<Materia>{
    return this.http.post<Materia>('http://localhost:8080/Materia/Materias',materia,{headers:this.httpHeaders});
}

getmateria(id:any): Observable<Materia>{

  return this.http.get<Materia>(`${'http://localhost:8080/Materia/Materias'}/${id}`)

}

update(materia:Materia):Observable<Materia>{
  return this.http.put<Materia>(`${'http://localhost:8080/Materia/Materias'}/${materia.id_Materia}`,materia,{headers:this.httpHeaders});
}


delete(id:any): Observable<Materia>{

  return this.http.delete<Materia>(`${'http://localhost:8080/Materia/Materias'}/${id}`,{headers:this.httpHeaders})

}
}
