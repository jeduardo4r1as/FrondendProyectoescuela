import { AcudientesService } from './../../services/Acudientes/acudientes.service';
import { Acudiente } from './../../response/acudiente';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-formacudiente',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './formacudiente.component.html'
})
export class FormacudienteComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private acudienteService:AcudientesService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  acudienteForm!: FormGroup; // Declara el FormGroup
  acudiente:Acudiente=new Acudiente();
  acudientesArray: Acudiente[] = [];

  ngOnInit(): void {
    // Inicializa el FormGroup con los campos necesarios y sus validadores
    this.acudienteForm = this.formBuilder.group({
      id_Acudiente:[''],
      nombre_Completo: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: [null, [Validators.required, Validators.pattern('[0-9]+')]],
      celular: [null, [Validators.required, Validators.pattern('[0-9]+')]],
      parentesco: ['', Validators.required],
      ocupacion: ['', Validators.required]
    });


    this.cargarCliente();

  }


// En la vista principal del acudiente se carga la informacion en el formulario
  cargarCliente(): void{
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.acudienteService.getAcudiente(id).subscribe((acudiente)=>{
          this.acudientesArray.push(acudiente);
          this.acudienteForm.setValue(this.acudientesArray[0]);
          this.acudiente=this.acudienteForm.value;
        })

      }
    })

   }

  // Método para enviar el formulario


  public create(): void{
    if (this.acudienteForm.valid) {
      this.acudiente=this.acudienteForm.value;
      this.acudienteService.create(this.acudiente).subscribe(
        response=>{
          this.router.navigate(['/Acudiente'])
           swal('Nuevo Acudiente',`Acudiente ${this.acudiente.nombre_Completo} creado con exito`,'success')
        }
      )

    } else {
      // El formulario es inválido, muestra un mensaje de error o realiza alguna acción
      console.log('El formulario es inválido');
    }
  }

  update():void{
    this.acudiente=this.acudienteForm.value;
    this.acudienteService.update(this.acudiente)
    .subscribe(acudiente=>{
      this.router.navigate(['/Acudiente'])
      swal('cudiente actualizado',`Acudiente ${this.acudiente.nombre_Completo} actualizado`,'success')
    })
  }


}
