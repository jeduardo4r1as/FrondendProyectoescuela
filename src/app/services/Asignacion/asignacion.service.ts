import { HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable, inject} from "@angular/core";
import { of,Observable,map } from "rxjs";
import { Asignacion } from "../../response/asignacion";

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {


  private httpHeaders=new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAsignacion():Observable<any>{
    //return of(ACUDIENTES);
    return this.http.get('http://localhost:8080/Asignacion/Asignaciones').pipe(
      map( (response)=> response as Asignacion[])
    );
  }


  create(asignacion:Asignacion):Observable<Asignacion>{
    return this.http.post<Asignacion>('http://localhost:8080/Asignacion/Asignaciones',asignacion,{headers:this.httpHeaders});
}

getAsignaciones(id:any): Observable<Asignacion>{

  return this.http.get<Asignacion>(`${'http://localhost:8080/Asignacion/Asignaciones'}/${id}`)

}

update(asignacion:Asignacion):Observable<Asignacion>{
  return this.http.put<Asignacion>(`${'http://localhost:8080/Asignacion/Asignaciones'}/${asignacion.id_Asignacion}`,asignacion,{headers:this.httpHeaders});
}


delete(id:any): Observable<Asignacion>{

  return this.http.delete<Asignacion>(`${'http://localhost:8080/Asignacion/Asignaciones'}/${id}`,{headers:this.httpHeaders})

}
}
