import { Component, OnInit } from '@angular/core';
import { Acudiente } from '../../response/acudiente';
import { AcudientesService } from '../../services/Acudientes/acudientes.service';
import { RouterLink } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-acudiente',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './acudiente.component.html',
  styleUrl: './acudiente.component.css'
})
export class AcudienteComponent implements OnInit{


  acudientes: Acudiente[]=[];


  constructor(private acudienteService:AcudientesService){}

  ngOnInit() {
  this.acudienteService.getAcudientes().subscribe(
    acudientes=>this.acudientes=acudientes

  );

  }

  delete(acudiente:Acudiente): void{
    swal({
    title: 'Está seguro?',
    text: `¿Seguro que desea eliminar al acudiente ${acudiente.nombre_Completo} ${acudiente.parentesco}?`,
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar!',
    cancelButtonText: 'No, cancelar!',
    confirmButtonClass: 'btn btn-success',
    cancelButtonClass: 'btn btn-danger',
    buttonsStyling: false,
    reverseButtons: true
  }).then((result) => {
    if (result.value) {

      this.acudienteService.delete(acudiente.id_Acudiente).subscribe(
        response => {
          this.acudientes = this.acudientes.filter(cli => cli !== acudiente)
          swal(
            'acudiente Eliminado!',
            `acudiente ${acudiente.nombre_Completo} eliminado con éxito.`,
            'success'
          )
        }
      )

    }
  })
  }

}
