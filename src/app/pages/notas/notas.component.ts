import { Component, OnInit } from '@angular/core';
import { Notas } from '../../response/notas';
import { NotasService } from '../../services/Notas/notas.service';
@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css'
})
export class NotasComponent implements OnInit {

  notas: Notas[]=[];

  constructor(private notasService:NotasService){}

  ngOnInit() {
    this.notasService.getNotas().subscribe(
      notas=>this.notas=notas
    );
    }
}
