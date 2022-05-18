import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistroPageComponent } from './registro-page/registro-page.component';
import { AdminDashPageComponent } from './admin-dash-page/admin-dash-page.component';
import { ClientDashPageComponent } from './client-dash-page/client-dash-page.component';
import { SellingPageComponent } from './selling-page/selling-page.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GlobalServicesService } from './services/global-services.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistroPageComponent,
    AdminDashPageComponent,
    ClientDashPageComponent,
    SellingPageComponent,
    MarketPlaceComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [GlobalServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
