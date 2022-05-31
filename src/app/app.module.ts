import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesListCardComponent } from './components/movies-list-card/movies-list-card.component';
import { StarsRatingComponent } from './components/stars-rating/stars-rating.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { GenreBadgeComponent } from './components/genre-badge/genre-badge.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { PosterPrevievComponent } from './components/poster-previev/poster-previev.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import {MainInterceptor} from "./main.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesListComponent,
    MoviesListCardComponent,
    StarsRatingComponent,
    MovieInfoComponent,
    GenreBadgeComponent,
    UserInfoComponent,
    PosterPrevievComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      multi: true,
      useClass:MainInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
