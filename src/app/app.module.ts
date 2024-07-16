import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.components';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { HomeComponent } from './components/home/home.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { FiltersComponent } from './components/filters/filters.component';
import { ButtonFilterComponent } from './components/button-filter/button-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieCardComponent,
    HomeComponent,
    MovieSearchComponent,
    FiltersComponent,
    ButtonFilterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    LoginButtonComponent,
    LogoutButtonComponent,
    UserProfileComponent,
    AuthModule.forRoot({
      domain: environment.auth0.domain,
      clientId: environment.auth0.clientId,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
