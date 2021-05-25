import { AuthService } from './services/guard/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableLastCarsComponent } from './components/table-last-cars/table-last-cars.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { AuthComponent } from './view/auth/auth.component';
import { HomeComponent } from './view/home/home.component';
import { ProfessionnalsComponent } from './view/professionnals/professionnals.component';
import { GaragesComponent } from './view/garages/garages.component';
import { ResearchComponent } from './components/research/research.component';
import { VehiculeService } from './services/vehicule/vehicule.service';
import { TableProfessionnalComponent } from './components/table-professionnal/table-professionnal.component';
import { TableLineProfessionnalComponent } from './components/table-line-professionnal/table-line-professionnal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrandService } from './services/brand/brand.service';
import { EnergyService } from './services/energy/energy.service';
import { ModelService } from './services/model/model.service';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ResearchReturnComponent } from './view/research-return/research-return.component';
import { TableResultCarsComponent } from './components/table-result-cars/table-result-cars.component';
import { ResultCardComponent } from './components/result-card/result-card.component';
import { DetailVehiculeComponent } from './view/detail-vehicule/detail-vehicule.component';
import { ProfessionalAccountComponent } from './view/professional-account/professional-account.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TableLastCarsComponent,
    CarCardComponent,
    AuthComponent,
    HomeComponent,
    ProfessionnalsComponent,
    GaragesComponent,
    ResearchComponent,
    TableProfessionnalComponent,
    TableLineProfessionnalComponent,
    ResearchReturnComponent,
    TableResultCarsComponent,
    ResultCardComponent,
    DetailVehiculeComponent,
    ProfessionalAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSliderModule,
    BrowserAnimationsModule,
    TabsModule,
    CarouselModule
  ],
  providers: [AuthService, VehiculeService, BrandService, ModelService, EnergyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
