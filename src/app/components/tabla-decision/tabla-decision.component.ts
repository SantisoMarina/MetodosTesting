import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import * as data_personas from 'src/app/shared/data/prestamosPersonas';
import { IPersonaPres } from 'src/app/shared/interfaces/IPersonaPres';
@Component({
  selector: 'app-tabla-decision',
  templateUrl: './tabla-decision.component.html',
  styleUrls: ['./tabla-decision.component.sass']
})
export class TablaDecisionComponent implements OnInit {

  myControl = new FormControl();
  options: IPersonaPres[] = data_personas.PersonasPrestamos;
  filteredOptions: Observable<IPersonaPres[]>;
  personaSeleccionada!: IPersonaPres;
  opcionSeleccionada = false;
  tipoPersonaSeleccionada = 0;
  constructor(private _snackBar: MatSnackBar) {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
    this.inicializarVariables();
  }

  inicializarVariables() {
    this.personaSeleccionada = {
      id: 0,
      nombre: '',
      deuda: false
    };
    this.tipoPersonaSeleccionada = 0;
    this.opcionSeleccionada = false;
    this.myControl.reset();
  }


  openSnackBar(mensaje: string) {
    this._snackBar.open(mensaje, 'OK', {
      duration: 5000
    });
  }

  ngOnInit(): void {
  }

  displayFn(user: IPersonaPres): string {
    return user && user.nombre ? user.nombre : '';
  }

  private _filter(name: string): IPersonaPres[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option: IPersonaPres) => option.nombre.toLowerCase().includes(filterValue));
  }

  getPersonaSeleccionada(personaSeleccionada: IPersonaPres) {
    this.opcionSeleccionada = true;
    this.personaSeleccionada = personaSeleccionada;
  }

  validarPrestamoBanco() {
    if (this.personaSeleccionada.deuda) {
      switch (this.tipoPersonaSeleccionada) {
        case 1:
          this.openSnackBar(`${this.personaSeleccionada.nombre} NO puede recibir el prestamo`);
          this.inicializarVariables();
          break;
        case 2:
          this.openSnackBar(`${this.personaSeleccionada.nombre} SI puede recibir el prestamo`);
          this.inicializarVariables();
          break;
        case 3:
          //this.openSnackBar(`${this.personaSeleccionada.nombre} no puede recibir el prestamo`); correcto
          this.openSnackBar(`${this.personaSeleccionada.nombre} SI puede recibir el prestamo ->(bug)`);
          this.inicializarVariables();
          break;
        default:
          break;
      }
    } else {
      switch (this.tipoPersonaSeleccionada) {
        case 1:
          this.openSnackBar(`${this.personaSeleccionada.nombre} NO puede recibir el prestamo`);
          this.inicializarVariables();
          break;
        case 2:
          this.openSnackBar(`${this.personaSeleccionada.nombre} SI puede recibir el prestamo`);
          this.inicializarVariables();
          break;
        case 3:
          this.openSnackBar(`${this.personaSeleccionada.nombre} SI puede recibir el prestamo`);
          this.inicializarVariables();
          break;
        default:
          break;
      }
    }
  }
}
