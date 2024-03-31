import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../response/estudiante';
import { EstudianteService } from '../../services/Estudiante/estudiante.service';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formestudiante',
  standalone: true,
  imports: [],
  templateUrl: './formestudiante.component.html'
})
export class FormestudianteComponent {

}
