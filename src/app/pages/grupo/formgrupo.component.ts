import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Grupo } from '../../response/grupo';
import { GrupoService } from '../../services/Grupo/grupo.service';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formgrupo',
  standalone: true,
  imports: [],
  templateUrl: './formgrupo.component.html'
})
export class FormgrupoComponent {

}
