import { HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable, inject} from "@angular/core";
import { of,Observable,map } from "rxjs";
import { Acudiente } from '../../response/acudiente';



@Injectable({
  providedIn: 'root'
})
export class AcudientesService {

   private httpHeaders=new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAcudientes():Observable<any>{
    //return of(ACUDIENTES);
    return this.http.get('http://localhost:8080/Acudiente/Acudientes').pipe(
      map( (response)=> response as Acudiente[])
    );
  }

  create(acudiente:Acudiente):Observable<Acudiente>{
      return this.http.post<Acudiente>('http://localhost:8080/Acudiente/Acudientes',acudiente,{headers:this.httpHeaders});
  }

  getAcudiente(id:any): Observable<Acudiente>{

    return this.http.get<Acudiente>(`${'http://localhost:8080/Acudiente/Acudientes'}/${id}`)

  }

  update(acudiente:Acudiente):Observable<Acudiente>{
    return this.http.put<Acudiente>(`${'http://localhost:8080/Acudiente/Acudientes'}/${acudiente.id_Acudiente}`,acudiente,{headers:this.httpHeaders});
  }


  delete(id:any): Observable<Acudiente>{

    return this.http.delete<Acudiente>(`${'http://localhost:8080/Acudiente/Acudientes'}/${id}`,{headers:this.httpHeaders})

  }
}
