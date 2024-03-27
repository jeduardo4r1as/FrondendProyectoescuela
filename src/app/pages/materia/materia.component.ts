import { Component, OnInit } from '@angular/core';
import { Materia } from '../../response/materia';
import { MateriaService } from '../../services/Materia/materia.service';
@Component({
  selector: 'app-materia',
  standalone: true,
  imports: [],
  templateUrl: './materia.component.html',
  styleUrl: './materia.component.css'
})
export class MateriaComponent implements OnInit{

  materias: Materia[]=[];

  constructor(private materiaService:MateriaService){}

  ngOnInit() {
    this.materiaService.getMaterias().subscribe(
      materias=>this.materias=materias
    );
    }
}
