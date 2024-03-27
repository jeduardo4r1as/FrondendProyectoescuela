import { AcudientesService } from './../../services/Acudientes/acudientes.service';
import { Acudiente } from './../../response/acudiente';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  acudientes: Acudiente[]=[];
  titulo:string = "Crear Acudiente";

  constructor(private acudientesService: AcudientesService,
  private router: Router,
private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
