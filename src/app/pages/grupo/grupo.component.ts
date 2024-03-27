import { Component, OnInit } from '@angular/core';
import { Grupo } from '../../response/grupo';
import { GrupoService } from '../../services/Grupo/grupo.service';
@Component({
  selector: 'app-grupo',
  standalone: true,
  imports: [],
  templateUrl: './grupo.component.html',
  styleUrl: './grupo.component.css'
})
export class GrupoComponent implements OnInit{



  grupos: Grupo[]=[];

  constructor(private grupoService:GrupoService){}

  ngOnInit() {
    this.grupoService.getGrupos().subscribe(
      grupos=>this.grupos=grupos
    );
    }
}
