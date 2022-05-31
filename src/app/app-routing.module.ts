import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {MoviesListComponent} from "./components/movies-list/movies-list.component";
import {GenreBadgeComponent} from "./components/genre-badge/genre-badge.component";

const routes: Routes = [
  {
    path:'', component:MainLayoutComponent,
    children:[
      {path: '', redirectTo: 'genre/movie/list', pathMatch:'full'},
      {path: 'genre/movie/list', component:GenreBadgeComponent},
      {path: 'discover/movie', component: MoviesListComponent}
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
