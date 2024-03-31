import { HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable, inject} from "@angular/core";
import { of,Observable,map } from "rxjs";
import { AnoLectivo } from "../../response/Anoelectivo";

@Injectable({
  providedIn: 'root'
})
export class AnoelectivoService {

  private httpHeaders=new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAnoelectivo():Observable<any>{
    //return of(ACUDIENTES);
    return this.http.get('http://localhost:8080/Anoelectivo/Anoelectivos').pipe(
      map( (response)=> response as AnoLectivo[])
    );
  }

  create(anoelectivo:AnoLectivo):Observable<AnoLectivo>{
    return this.http.post<AnoLectivo>('http://localhost:8080/Anoelectivo/Anoelectivos',anoelectivo,{headers:this.httpHeaders});
}

getAnoelectivos(id:any): Observable<AnoLectivo>{

  return this.http.get<AnoLectivo>(`${'http://localhost:8080/Anoelectivo/Anoelectivos'}/${id}`)

}

update(anoelectivo:AnoLectivo):Observable<AnoLectivo>{
  return this.http.put<AnoLectivo>(`${'http://localhost:8080/Anoelectivo/Anoelectivos'}/${anoelectivo.id_Anoelectivo}`,anoelectivo,{headers:this.httpHeaders});
}


delete(id:any): Observable<AnoLectivo>{

  return this.http.delete<AnoLectivo>(`${'http://localhost:8080/Anoelectivo/Anoelectivos'}/${id}`,{headers:this.httpHeaders})

}
}
