import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';



import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParticionEquivalenteComponent } from './components/particion-equivalente/particion-equivalente.component';
import { ValoresLimitesComponent } from './components/valores-limites/valores-limites.component';
import { TransicionEstadosComponent } from './components/transicion-estados/transicion-estados.component';
import { TablaDecisionComponent } from './components/tabla-decision/tabla-decision.component';
import { CasosUsoComponent } from './components/casos-uso/casos-uso.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParticionEquivalenteComponent,
    ValoresLimitesComponent,
    TransicionEstadosComponent,
    TablaDecisionComponent,
    CasosUsoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    NgbModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
