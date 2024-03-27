import { Component, OnInit } from '@angular/core';
import { Acudiente } from '../../response/acudiente';
import { AcudientesService } from '../../services/Acudientes/acudientes.service';
@Component({
  selector: 'app-acudiente',
  standalone: true,
  imports: [],
  templateUrl: './acudiente.component.html',
  styleUrl: './acudiente.component.css'
})
export class AcudienteComponent implements OnInit{


  acudientes: Acudiente[]=[];


  constructor(private acudienteService:AcudientesService){}

  ngOnInit() {
  this.acudienteService.getAcudientes().subscribe(
    acudientes=>this.acudientes=acudientes
  );
  }


}
