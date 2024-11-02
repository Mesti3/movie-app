import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movieapp-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { GridComponent } from './components/grid/grid.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HeaderComponent } from './components/header/header.component';
import { TvShowComponent } from './pages/tv-show/tv-show.component';
import { AboutComponent} from './pages/about/about.component';
import { ListComponent} from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FooterComponent,
    GridComponent,
    HomeComponent,
    MoviesComponent,
    HeaderComponent,
    TvShowComponent,
    AboutComponent,
    ListComponent,
    ListItemComponent,
    BrowserAnimationsModule,
  ],
})
export class MovieAppModule {}
