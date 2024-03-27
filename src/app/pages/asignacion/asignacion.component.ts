import { AsignacionService } from './../../services/Asignacion/asignacion.service';
import { Component, OnInit } from '@angular/core';
import { Asignacion } from '../../response/asignacion';
@Component({
  selector: 'app-asignacion',
  standalone: true,
  imports: [],
  templateUrl: './asignacion.component.html',
  styleUrl: './asignacion.component.css'
})
export class AsignacionComponent implements OnInit{

  asignaciones: Asignacion[]=[];

  constructor(private asignacionService:AsignacionService){}

  ngOnInit() {
    this.asignacionService.getAsignacion().subscribe(
      asignaciones=>this.asignaciones=asignaciones
    );
    }

}
