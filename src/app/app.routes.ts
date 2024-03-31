import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import{AcudienteComponent} from './pages/acudiente/acudiente.component'
import { AnoelectivoComponent } from './pages/anoelectivo/anoelectivo.component';
import { AreaComponent } from './pages/area/area.component';
import { AsignacionComponent } from './pages/asignacion/asignacion.component';
import { DocenteComponent } from './pages/docente/docente.component';
import { EstudianteComponent } from './pages/estudiante/estudiante.component';
import { GrupoComponent } from './pages/grupo/grupo.component';
import { MateriaComponent } from './pages/materia/materia.component';
import { NotasComponent } from './pages/notas/notas.component';
import { FormacudienteComponent } from './pages/acudiente/formacudiente.component';



export const routes: Routes = [
  {path:'home',
  component:HomeComponent
  },
  {path:'Acudiente',
  component:AcudienteComponent
  },
  {path:'Acudiente/form',
  component:FormacudienteComponent
  },
  {path:'Acudiente/form/:id',
  component:FormacudienteComponent
  },
  {path:'Anoelectivo',
  component:AnoelectivoComponent
  },
  {path:'Area',
  component:AreaComponent
  },
  {path:'Asignacion',
  component:AsignacionComponent
  },
  {path:'Docente',
  component:DocenteComponent
  },
  {path:'Estudiante',
  component:EstudianteComponent
  },
  {path:'Grupo',
  component:GrupoComponent
  },
  {path:'Materia',
  component:MateriaComponent
  },
  {path:'Notas',
  component:NotasComponent
  },
  {path:'**',
  component:HomeComponent
  },
];
