import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieAPIService } from 'src/app/services/movies.service';
import { Movie, Genre } from '../movie-card/movie.interface';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie!: Movie;
  genresAsString: string = '';

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieAPIService
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movieService.getMovieDetailsById(movieId).subscribe(
        data => {
          this.movie = data;
          this.genresAsString = data.genres.map((g: Genre) => g.name).join(', ');
        },
        error => {
          console.error('Erro ao carregar detalhes do filme:', error);
        }
      );
    }
  }
}
