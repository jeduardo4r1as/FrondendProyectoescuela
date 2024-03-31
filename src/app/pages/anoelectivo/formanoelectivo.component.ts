
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AnoLectivo } from '../../response/Anoelectivo';
import { AnoelectivoService } from '../../services/Anoelectivo/anoelectivo.service';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formanoelectivo',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './formanoelectivo.component.html'
})
export class FormanoelectivoComponent implements OnInit {

  formularioAnoElectivo!: FormGroup;


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formularioAnoElectivo = this.formBuilder.group({
      id_Anoelectivo: [''],
      temporada: ['', Validators.required],
      periodo: ['', Validators.required],
      sede: ['', Validators.required]
    });
  }


}
