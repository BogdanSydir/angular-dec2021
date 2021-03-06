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
import {SingleGenreComponent} from './components/single-genre/single-genre.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {UserComponent} from './components/user/user.component';
import {NgxStarRatingModule} from "ngx-star-rating";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


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
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxStarRatingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
