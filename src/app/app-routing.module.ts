import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HomeComponent } from './components/home/home.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona para '/home' por padrão
  { path: 'home', component: HomeComponent },
  { path: 'search', component: MovieSearchComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
