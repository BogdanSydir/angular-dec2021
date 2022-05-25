import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {CarsComponent} from './components/cars/cars.component';
import {CarComponent} from './components/car/car.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HeaderComponent} from './components/header/header.component';
import {AppRoutingModule} from "./app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MainInterceptor} from "./main.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    CarsComponent,
    CarComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ //підключаємо інтерсептор
    {
      provide: HTTP_INTERCEPTORS,
      multi:true,
      useClass:MainInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
