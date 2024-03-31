import { HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable, inject} from "@angular/core";
import { of,Observable,map } from "rxjs";
import { Grupo } from "../../response/grupo";
@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  private httpHeaders=new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getGrupos():Observable<any>{
    //return of(ACUDIENTES);
    return this.http.get('http://localhost:8080/Grupo/Grupos').pipe(
      map( (response)=> response as Grupo[])
    );
  }
  create(grupo:Grupo):Observable<Grupo>{
    return this.http.post<Grupo>('http://localhost:8080/Grupo/Grupos',grupo,{headers:this.httpHeaders});
}

getGrupo(id:any): Observable<Grupo>{

  return this.http.get<Grupo>(`${'http://localhost:8080/Grupo/Grupos'}/${id}`)

}

update(grupo:Grupo):Observable<Grupo>{
  return this.http.put<Grupo>(`${'http://localhost:8080/Grupo/Grupos'}/${grupo.id_Grupo}`,grupo,{headers:this.httpHeaders});
}


delete(id:any): Observable<Grupo>{

  return this.http.delete<Grupo>(`${'http://localhost:8080/Grupo/Grupos'}/${id}`,{headers:this.httpHeaders})

}
}
