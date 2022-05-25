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
import { NgApexchartsModule } from 'ng-apexcharts';
import { RestServiceService } from './services/rest/rest-service.service';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CreateBookComponent } from './create-book/create-book.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistroPageComponent,
    AdminDashPageComponent,
    ClientDashPageComponent,
    SellingPageComponent,
    MarketPlaceComponent,
    NavBarComponent,
    BookDetailsComponent,
    CreateBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
  ],
  providers: [RestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
