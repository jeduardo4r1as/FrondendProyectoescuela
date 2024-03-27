import { HttpClient } from "@angular/common/http";
import {Injectable, inject} from "@angular/core";
import { of,Observable,map } from "rxjs";
import { Grupo } from "../../response/grupo";
@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(private http: HttpClient) { }

  getGrupos():Observable<any>{
    //return of(ACUDIENTES);
    return this.http.get('http://localhost:8080/Grupo/Grupos').pipe(
      map( (response)=> response as Grupo[])
    );
  }
}
