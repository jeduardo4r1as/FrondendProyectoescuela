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

  constructor(private formBuilder: FormBuilder) { }

  acudienteForm!: FormGroup; // Declara el FormGroup

  ngOnInit(): void {
    // Inicializa el FormGroup con los campos necesarios y sus validadores
    this.acudienteForm = this.formBuilder.group({
      id_Acudiente: [null, Validators.required],
      nombre_Completo: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: [null, [Validators.required, Validators.pattern('[0-9]+')]],
      celular: [null, [Validators.required, Validators.pattern('[0-9]+')]],
      parentesco: ['', Validators.required],
      ocupacion: ['', Validators.required]
    });
  }

  // Método para enviar el formulario
  onSubmit() {
    if (this.acudienteForm.valid) {
      // Envía el formulario (puedes implementar esta lógica según tus necesidades)
      console.log(this.acudienteForm.value);
    } else {
      // El formulario es inválido, muestra un mensaje de error o realiza alguna acción
      console.log('El formulario es inválido');
    }
  }

}
