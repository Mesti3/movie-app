import { enableProdMode, importProvidersFrom } from '@angular/core';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { MovieEffects } from './app/movieapp/store/movies/movie.effect';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { movieReducer } from './app/movieapp/store/movies/movie.reducer';
import { StoreModule } from '@ngrx/store';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MovieAppModule } from './app/movieapp/movieapp.module';
import {
  withInterceptorsFromDi,
  provideHttpClient,
} from '@angular/common/http';
import { AppRoutingModule } from './app/app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { TodoEffect } from './app/todo/store/todo.effects';
import { TVShowReducer } from './app/movieapp/store/tv-shows/tv-show.reducer';
import { SearchReducer } from './app/movieapp/store/search/search.reducer';
import { TodoReducer } from './app/todo/store/todo.reducers';
import { SearchEffects } from './app/movieapp/store/search/search.effect';
import { TVShowEffects } from './app/movieapp/store/tv-shows/tv-show.effect';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      MovieAppModule,
      StoreModule.forRoot({ movie: movieReducer, tvshow: TVShowReducer , search: SearchReducer, todos: TodoReducer}),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production,
        connectInZone: true,
      }),
      EffectsModule.forRoot([MovieEffects, TodoEffect, SearchEffects, TVShowEffects])
    ),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
