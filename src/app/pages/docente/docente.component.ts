import { Component, OnInit } from '@angular/core';
import { Docente } from '../../response/docente';
import { DocenteService } from '../../services/Docente/docente.service';



@Component({
  selector: 'app-docente',
  standalone: true,
  imports: [],
  templateUrl: './docente.component.html',
  styleUrl: './docente.component.css'
})
export class DocenteComponent implements OnInit{


  docentes: Docente[]=[];

  constructor(private docenteService:DocenteService){}

  ngOnInit() {
    this.docenteService.getDocente().subscribe(
      docentes=>this.docentes=docentes
    );
    }
}
