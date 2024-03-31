import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Docente } from '../../response/docente';
import { DocenteService } from '../../services/Docente/docente.service';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formdocente',
  standalone: true,
  imports: [],
  templateUrl: './formdocente.component.html'
})
export class FormdocenteComponent {

}
