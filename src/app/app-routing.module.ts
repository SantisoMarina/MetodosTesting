import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasosUsoComponent } from './components/casos-uso/casos-uso.component';
import { HomeComponent } from './components/home/home.component';
import { ParticionEquivalenteComponent } from './components/particion-equivalente/particion-equivalente.component';
import { TablaDecisionComponent } from './components/tabla-decision/tabla-decision.component';
import { TransicionEstadosComponent } from './components/transicion-estados/transicion-estados.component';
import { ValoresLimitesComponent } from './components/valores-limites/valores-limites.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'particion-equivalente', component: ParticionEquivalenteComponent},
  {path:'valores-limites', component: ValoresLimitesComponent},
  {path:'transicion-estados', component: TransicionEstadosComponent},
  {path:'tabla-decision', component: TablaDecisionComponent},
  {path:'casos-uso', component: CasosUsoComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
