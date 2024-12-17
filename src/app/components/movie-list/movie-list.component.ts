import { Component, Input, OnInit } from '@angular/core';
import { MovieAPIService } from 'src/app/services/movies.service';
import { Movie } from '../movie-card/movie.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() movies: Movie[] = [];
  
  movie!: Movie; // nao nulo

  constructor(private MovieAPIService: MovieAPIService) { }

  ngOnInit(): void {
    this.MovieAPIService.listFirstTenMovies().subscribe(
      data => {
        this.movies = data; // Atualiza a lista com os 10 primeiros filmes
      },
      error => {
        console.error('Erro ao buscar os 10 primeiros filmes:', error);
      }
    );

  }

}
