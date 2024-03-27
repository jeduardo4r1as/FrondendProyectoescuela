import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../response/estudiante';
import { EstudianteService } from '../../services/Estudiante/estudiante.service';

@Component({
  selector: 'app-estudiante',
  standalone: true,
  imports: [],
  templateUrl: './estudiante.component.html',
  styleUrl: './estudiante.component.css'
})
export class EstudianteComponent implements OnInit{



  estudiantes: Estudiante[]=[];

  constructor(private estudianteService:EstudianteService){}

  ngOnInit() {
    this.estudianteService.getEstudiante().subscribe(
      estudiantes=>this.estudiantes=estudiantes
    );
    }
}
