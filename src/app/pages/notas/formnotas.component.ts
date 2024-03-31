import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Notas } from '../../response/notas';
import { NotasService } from '../../services/Notas/notas.service';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formnotas',
  standalone: true,
  imports: [],
  templateUrl: './formnotas.component.html'
})
export class FormnotasComponent {

}
