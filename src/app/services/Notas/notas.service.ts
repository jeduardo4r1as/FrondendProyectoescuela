import { HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable, inject} from "@angular/core";
import { of,Observable,map } from "rxjs";
import { Notas } from "../../response/notas";
@Injectable({
  providedIn: 'root'
})
export class NotasService {


  private httpHeaders=new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getNotas():Observable<any>{
    //return of(ACUDIENTES);
    return this.http.get('http://localhost:8080/Nota/Notas').pipe(
      map( (response)=> response as Notas[])
    );
  }

  create(notas:Notas):Observable<Notas>{
    return this.http.post<Notas>('http://localhost:8080/Nota/Notas',notas,{headers:this.httpHeaders});
}

getNota(id:any): Observable<Notas>{

  return this.http.get<Notas>(`${'http://localhost:8080/Nota/Notas'}/${id}`)

}

update(notas:Notas):Observable<Notas>{
  return this.http.put<Notas>(`${'http://localhost:8080/Nota/Notas'}/${notas.codigo}`,notas,{headers:this.httpHeaders});
}


delete(id:any): Observable<Notas>{

  return this.http.delete<Notas>(`${'http://localhost:8080/Nota/Notas'}/${id}`,{headers:this.httpHeaders})

}
}
