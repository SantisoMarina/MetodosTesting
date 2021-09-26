import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as constantes from 'src/app/shared/constantes/constantes'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  redirigirTecnica(tecnica: string){
    var ruta = constantes.rutas_tecnicas_acr.find(x => x.acr == tecnica);
    if(ruta)
      this.router.navigate([ruta.ruta]);
  }
}
