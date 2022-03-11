import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistradoService } from 'src/app/services/registrado.service';
import { Registrado } from 'src/app/models/registrado';

@Component({
  selector: 'app-crud-usuarios',
  templateUrl: './crud-usuarios.component.html',
  styleUrls: ['./crud-usuarios.component.css']
})
export class CrudUsuariosComponent implements OnInit {
  listRegistrados: Registrado[] = [];
  constructor(private toastr: ToastrService,private _registradoService: RegistradoService,private aRouter: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.obtenerRegistrados();
  }
  obtenerRegistrados(){
    this._registradoService.getRegistrados().subscribe(data => {
      console.log(data);
      this.listRegistrados = data;
    }, error =>{
      console.log(error);
    }
   )
  }

  eliminarRegistrado(id: any){
    this._registradoService.eliminarRegistrados(id).subscribe(data => {
      this.toastr.error("El usuario fue eliminado con exito", "Usuario Eliminado")
      this.obtenerRegistrados();
    },error =>{
      console.log(error);
    })
  }

  
ruta(id:any){
 
    this.router.navigate(['/editar-usuario/' + id]);

}


}
