import { AreaService } from './../../services/Area/area.service';
import { Component, OnInit } from '@angular/core';
import { Area } from '../../response/Area';
@Component({
  selector: 'app-area',
  standalone: true,
  imports: [],
  templateUrl: './area.component.html',
  styleUrl: './area.component.css'
})
export class AreaComponent implements OnInit{

  areas: Area[]=[];

  constructor(private areaService:AreaService){}

  ngOnInit() {
    this.areaService.getArea().subscribe(
      area=>this.areas=area
    );
    }
}
