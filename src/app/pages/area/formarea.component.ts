import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AreaComponent } from './area.component';
import { AreaService } from '../../services/Area/area.service';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formarea',
  standalone: true,
  imports: [],
  templateUrl: './formarea.component.html'
})
export class FormareaComponent {

}
