import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashPageComponent } from './admin-dash-page/admin-dash-page.component';
import { ClientDashPageComponent } from './client-dash-page/client-dash-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { RecoverPageComponent } from './recover-page/recover-page.component';
import { RegistroPageComponent } from './registro-page/registro-page.component';
import { SellingPageComponent } from './selling-page/selling-page.component';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'Registo', component: RegistroPageComponent},
  {path: 'ClientDash', component: ClientDashPageComponent},
  {path: 'AdminDash', component: AdminDashPageComponent},
  {path: 'Selling', component: SellingPageComponent},
  {path: 'MarketPlace', component: MarketPlaceComponent},
  {path: 'Recover', component:RecoverPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
