import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IEstadoAccion } from 'src/app/shared/interfaces/IEstadoAccion';
import * as constantes from 'src/app/shared/constantes/constantes'

@Component({
  selector: 'app-transicion-estados',
  templateUrl: './transicion-estados.component.html',
  styleUrls: ['./transicion-estados.component.sass']
})
export class TransicionEstadosComponent implements OnInit {

  estadoTelevisor: IEstadoAccion;
  constructor(private _snackBar: MatSnackBar) {
    this.estadoTelevisor = {
      accion: 'desenchufar',
      estado: 'desenchufado',
      color: 'danger'
    };
  }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 2000 });
  }

  actualizarEstado(accion: string) {

    var acciones = this.obtenerAcciones();
    if(acciones.length > 0){
      var nuevoEstado = acciones.find(x => x.accion == accion)
      if(nuevoEstado){
        this.estadoTelevisor = nuevoEstado;
        this.openSnackBar(`El televisor esta ${this.estadoTelevisor.estado}` ,'OK')
      }else{
        this.openSnackBar(`El televisor no se puede ${accion} esta ${this.estadoTelevisor.estado}`,'OK')
      }
    }else{
      this.openSnackBar('Error al obtener las acciones','OK')
    }

  }

  obtenerAcciones(){
    
    switch (this.estadoTelevisor.estado) {
      case 'apagado':
        return constantes.acciones_apagado;
      break;
      case 'prendido':
        return constantes.acciones_prendido;
      break;
      case 'enchufado':
        return constantes.acciones_enchufado;
      break;
      case 'desenchufado':
        return constantes.acciones_desenchufado;
      break;
    
      default:
        return [];
        break;
    }
  }
}
