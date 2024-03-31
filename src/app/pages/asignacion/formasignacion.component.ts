import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Asignacion } from '../../response/asignacion';
import { AsignacionService } from '../../services/Asignacion/asignacion.service';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formasignacion',
  standalone: true,
  imports: [],
  templateUrl: './formasignacion.component.html'
})
export class FormasignacionComponent {

}
