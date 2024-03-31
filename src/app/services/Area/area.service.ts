import { HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable, inject} from "@angular/core";
import { of,Observable,map } from "rxjs";
import { Area } from "../../response/Area";

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  private httpHeaders=new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  getArea():Observable<any>{
    //return of(ACUDIENTES);
    return this.http.get('http://localhost:8080/Area/Areas').pipe(
      map( (response)=> response as Area[])
    );
  }

  create(area:Area):Observable<Area>{
    return this.http.post<Area>('http://localhost:8080/Area/Areas',area,{headers:this.httpHeaders});
}

getAnoelectivos(id:any): Observable<Area>{

  return this.http.get<Area>(`${'http://localhost:8080/Area/Areas'}/${id}`)

}

update(area:Area):Observable<Area>{
  return this.http.put<Area>(`${'http://localhost:8080/Area/Areas'}/${area.id_Area}`,area,{headers:this.httpHeaders});
}


delete(id:any): Observable<Area>{

  return this.http.delete<Area>(`${'http://localhost:8080/Area/Areas'}/${id}`,{headers:this.httpHeaders})

}
}
