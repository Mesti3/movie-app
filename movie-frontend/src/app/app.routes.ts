import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './movieapp/pages/home/home.component';
import {TodoHomeComponent} from './todo/pages/todo-home/todo-home.component'; 
import { MoviesComponent } from './movieapp/pages/movies/movies.component';
import { TvShowComponent } from './movieapp/pages/tv-show/tv-show.component';
import { AboutComponent } from './movieapp/pages/about/about.component';

const routes: Routes = [
    { path: '', redirectTo: 'tv-shows', pathMatch: 'full' },
    {
      path: 'home',
      component: HomeComponent
    },
      {
        path: 'todo',
        component: TodoHomeComponent
      },
      {
        path: 'movies',
        component: MoviesComponent
      },
      {
        path: 'tv-shows',
        component: TvShowComponent,
      },
      {
        path: 'about',
       component: AboutComponent
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }