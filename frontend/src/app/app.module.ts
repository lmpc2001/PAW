import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistroPageComponent } from './registro-page/registro-page.component';
import { ClientDashPageComponent } from './client-dash-page/client-dash-page.component';
import { SellingPageComponent } from './selling-page/selling-page.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RecoverPageComponent } from './recover-page/recover-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BooksCoverComponent } from './books-cover/books-cover.component';
import { AdminToolsComponent } from './admin-tools/admin-tools.component';
import { UsersInfoComponent } from './users-info/users-info.component';
import { ShopDashComponent } from './shop-dash/shop-dash.component';
import { ErroPopUpComponent } from './erro-pop-up/erro-pop-up.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistroPageComponent,
    ClientDashPageComponent,
    SellingPageComponent,
    MarketPlaceComponent,
    NavBarComponent,
    RecoverPageComponent,
    BooksCoverComponent,
    AdminToolsComponent,
    UsersInfoComponent,
    ShopDashComponent,
    ErroPopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
