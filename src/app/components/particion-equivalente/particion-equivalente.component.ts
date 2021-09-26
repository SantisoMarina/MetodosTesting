import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrdRealizada } from 'src/app/shared/interfaces/IOrdRealizada';

@Component({
  selector: 'app-particion-equivalente',
  templateUrl: './particion-equivalente.component.html',
  styleUrls: ['./particion-equivalente.component.sass']
})
export class ParticionEquivalenteComponent implements OnInit {

  ordenR: IOrdRealizada;
  errorGuardado = false;
  guardadoPresionado = false;
  constructor(private aRoute: ActivatedRoute,private scroller: ViewportScroller) {
    this.ordenR = {
      claveOperacion: '',
      codArea: '',
      ordPosibles: ''
    }
   }

  ngOnInit(): void {
    this.aRoute.queryParams.subscribe(x => {
      if(x){
        this.scroller.scrollToAnchor(x.target)
      }
    })
  }

  guardarOrdenRealizada(){
    console.log(this.ordenR)
    this.errorGuardado = false;
    var codAreaNumb = +this.ordenR.codArea;
    this.guardadoPresionado = true;
    if(codAreaNumb){
      if(codAreaNumb <=200 || codAreaNumb >=999){
        this.errorGuardado = true;
      }
    }
    
    if(this.ordenR.claveOperacion.length < 6){
      this.errorGuardado = true;
    }
    if(this.validarOperacion(this.ordenR.ordPosibles)){
      this.errorGuardado = true;
    }
    setTimeout(() => {
      this.guardadoPresionado = false;
    }, 5000);
  }

  validarOperacion(operacion: string){
    switch (operacion) {
      case 'cheque': case'deposito': case 'pago factura': case 'retirada de fondos':
        return false;
      break;
    
      default:
        return true;
      break;
    }
  }

}
