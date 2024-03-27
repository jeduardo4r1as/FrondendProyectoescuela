export interface Estudiante {
  id_Estudiante: number;
  id_Acudiente: number;
  id_Grupo: number;
  tipoDocumento: string;
  numeroDocumento: string;
  genero: string;
  fechaNacimiento: Date;
  ciudad: string;
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  direccion: string;
  barrio: string;
  telefono: string;
  estrato: string;
  discapacidad: string;
}
