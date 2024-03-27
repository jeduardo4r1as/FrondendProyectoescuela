import { HttpClient } from "@angular/common/http";
import {Injectable, inject} from "@angular/core";
import { of,Observable,map } from "rxjs";
import { Notas } from "../../response/notas";
@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private http: HttpClient) { }

  getNotas():Observable<any>{
    //return of(ACUDIENTES);
    return this.http.get('http://localhost:8080/Nota/Notas').pipe(
      map( (response)=> response as Notas[])
    );
  }
}
