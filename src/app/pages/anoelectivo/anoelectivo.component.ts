import { Component, OnInit } from '@angular/core';
import { AnoelectivoService } from '../../services/Anoelectivo/anoelectivo.service';
import { AnoLectivo } from '../../response/Anoelectivo';

@Component({
  selector: 'app-anoelectivo',
  standalone: true,
  imports: [],
  templateUrl: './anoelectivo.component.html',
  styleUrl: './anoelectivo.component.css'
})
export class AnoelectivoComponent implements OnInit{

  anoLectivos: AnoLectivo[]=[];

  constructor(private anoelectivoService:AnoelectivoService){}

  ngOnInit() {
    this.anoelectivoService.getAnoelectivo().subscribe(
      anoLectivo=>this.anoLectivos=anoLectivo
    );
    }

}
