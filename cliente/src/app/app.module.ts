import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { CrudUsuariosComponent } from './components/crud-usuarios/crud-usuarios.component';
import { RouterModule, Route} from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

const rutas:Route[] = [
  {path:'crudUsuarios',component:CrudUsuariosComponent},
  {path:'crear-usuario',component:CrearUsuarioComponent},
  {path:'editar-usuario/:correo2',component:CrearUsuarioComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CrudUsuariosComponent,
    CrearUsuarioComponent,

  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutas),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
