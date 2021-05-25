import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './view/auth/auth.component';
import { DetailVehiculeComponent } from './view/detail-vehicule/detail-vehicule.component';
import { HomeComponent } from './view/home/home.component';
import { ProfessionalAccountComponent } from './view/professional-account/professional-account.component';
import { ResearchReturnComponent } from './view/research-return/research-return.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'research-return', component: ResearchReturnComponent },
  { path: 'vehicules/:id', component: DetailVehiculeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'pro-account', component: ProfessionalAccountComponent },
  // { path: 'pro-account', canActivate: [AuthGuard], component: ProfessionalAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
