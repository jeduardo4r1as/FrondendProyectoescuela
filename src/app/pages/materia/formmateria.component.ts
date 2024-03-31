import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Materia } from '../../response/materia';
import { MateriaService } from '../../services/Materia/materia.service';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formmateria',
  standalone: true,
  imports: [],
  templateUrl: './formmateria.component.html'
})
export class FormmateriaComponent {

}
