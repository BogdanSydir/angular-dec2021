import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {MoviesListComponent} from "./components/movies-list/movies-list.component";

const routes: Routes = [
  {
    path:'', component:MainLayoutComponent,
    children:[
      {path: '', redirectTo: 'discover/movie', pathMatch:'full'},
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
