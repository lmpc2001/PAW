import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopDashComponent} from './shop-dash/shop-dash.component'
import { ClientDashPageComponent } from './client-dash-page/client-dash-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { RecoverPageComponent } from './recover-page/recover-page.component';
import { RegistroPageComponent } from './registro-page/registro-page.component';
import { SellingPageComponent } from './selling-page/selling-page.component';
import { AuthService } from './services/Authentication/auth.service';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'Registo', component: RegistroPageComponent},
  {path: 'ClientDash', component: ClientDashPageComponent, canActivate: [AuthService]},
  {path: 'ShopDash', component: ShopDashComponent, canActivate: [AuthService]},
  {path: 'Selling', component: SellingPageComponent, canActivate: [AuthService]},
  {path: 'MarketPlace', component: MarketPlaceComponent, canActivate: [AuthService]},
  {path: 'Recover', component:RecoverPageComponent, canActivate: [AuthService]},
  {path: '**', redirectTo: 'MarketPlace'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
