import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {MoviesListComponent} from './components/movies-list/movies-list.component';
import {MoviesListCardComponent} from './components/movies-list-card/movies-list-card.component';
import {GenreBadgeComponent} from './components/genre-badge/genre-badge.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {MainInterceptor} from "./main.interceptor";
import { SingleGenreComponent } from './components/single-genre/single-genre.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieDetaisGenresComponent } from './components/movie-detais-genres/movie-detais-genres.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesListComponent,
    MoviesListCardComponent,
    GenreBadgeComponent,
    MainLayoutComponent,
    SingleGenreComponent,
    MovieDetailsComponent,
    MovieDetaisGenresComponent
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
