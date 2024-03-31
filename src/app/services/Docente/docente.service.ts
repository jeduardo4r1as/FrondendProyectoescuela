import { HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable, inject} from "@angular/core";
import { of,Observable,map } from "rxjs";
import { Docente } from "../../response/docente";

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  private httpHeaders=new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getDocente():Observable<any>{
    //return of(ACUDIENTES);
    return this.http.get('http://localhost:8080/Docente/Docentes').pipe(
      map( (response)=> response as Docente[])
    );
  }

  create(docente:Docente):Observable<Docente>{
    return this.http.post<Docente>('http://localhost:8080/Docente/Docentes',docente,{headers:this.httpHeaders});
}

getADocentes(id:any): Observable<Docente>{

  return this.http.get<Docente>(`${'http://localhost:8080/Docente/Docentes'}/${id}`)

}

update(docente:Docente):Observable<Docente>{
  return this.http.put<Docente>(`${'http://localhost:8080/Docente/Docentes'}/${docente.id_Docente}`,docente,{headers:this.httpHeaders});
}


delete(id:any): Observable<Docente>{

  return this.http.delete<Docente>(`${'http://localhost:8080/Docente/Docentes'}/${id}`,{headers:this.httpHeaders})

}
}
