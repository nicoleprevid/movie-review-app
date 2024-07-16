// filters.component.ts
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie-card/movie.interface';
import { MovieAPIService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  filters = [
    { label: 'Action', value: '28' },
    { label: 'Comedy', value: '35' },
    { label: 'Drama', value: '18' },
    // Adicione mais filtros conforme necessário
  ];

  constructor(private movieService: MovieAPIService) {}

  ngOnInit() {
    this.movieService.listFirstTenMovies().subscribe(movies => {
      this.movies = movies;
      this.filteredMovies = movies;
    });
  }

  onFilterApplied(filter: any) {
    const filters = { with_genres: filter };
    this.movieService.searchMoviesByFilters(filters).subscribe(movies => {
      this.filteredMovies = movies;
    });
  }

  getGenres(genreIds: number[]): string[] {
    const genres: { [key: string]: string } = {
      '28': 'Action',
      '35': 'Comedy',
      '18': 'Drama',
      // Adicione mais mapeamentos de gênero conforme necessário
    };
    return genreIds.map(id => genres[id.toString()] || 'Unknown');
  }
}
