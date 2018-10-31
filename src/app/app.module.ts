import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarWarsNavComponent } from './shared/star-wars-nav/star-wars-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatOptionModule, MatSelectModule, MatInputModule, MatDividerModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { PlanetsComponent } from './user/planets/planets.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlanetService } from './user/services/planet.service'

@NgModule({
  declarations: [
    AppComponent,
    StarWarsNavComponent,
    PlanetsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    MatDividerModule,
    MatInputModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PlanetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
