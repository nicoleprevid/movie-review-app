import { Component, OnInit } from '@angular/core';
import { MovieAPIService } from 'src/app/services/movies.service';
import { Movie } from '../movie-card/movie.interface';
import { empty } from 'rxjs';

@Component({
  selector: 'app-movies-manager',
  templateUrl: './movies-manager.component.html',
  styleUrls: ['./movies-manager.component.css']
})
export class MoviesManagerComponent implements OnInit {
  movies: Movie[] = []; // Filmes a serem exibidos
  searchActive = false; 

  constructor(private movieService: MovieAPIService) {}

  ngOnInit() {
    this.loadDefaultMovies(); // Carrega os filmes padrão ao inicializar
  }

  loadDefaultMovies() {
    this.movieService.listFirstTenMovies().subscribe(
      movies => this.movies = movies,
      error => console.error('Erro ao carregar filmes padrão:', error)
    );
  }

  handleSearchResults(movies: Movie[]) {
    this.movies = movies;
  }

  handleFilterResults(movies: Movie[]) {
    this.searchActive = false; // Define que a busca não está ativa
    this.movies = movies;

  }

  handleSearchActive(isActive: boolean) {
    this.searchActive = isActive;

  }
}
