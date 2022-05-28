import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopDashComponent} from './shop-dash/shop-dash.component'
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
  {path: 'ShopDash', component: ShopDashComponent},
  {path: 'Selling', component: SellingPageComponent},
  {path: 'MarketPlace', component: MarketPlaceComponent},
  {path: 'Recover', component:RecoverPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
