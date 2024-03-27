import { HttpClient } from "@angular/common/http";
import {Injectable, inject} from "@angular/core";
import { of,Observable,map } from "rxjs";
import { Acudiente } from '../../response/acudiente';
import { ACUDIENTES } from '../../pages/acudiente/clientes.json';



@Injectable({
  providedIn: 'root'
})
export class AcudientesService {

  constructor(private http: HttpClient) { }

  getAcudientes():Observable<any>{
    //return of(ACUDIENTES);
    return this.http.get('http://localhost:8080/Acudiente/Acudientes').pipe(
      map( (response)=> response as Acudiente[])
    );
  }
}
