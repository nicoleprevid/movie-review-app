// filters.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
    { label: 'Popular', value: '0' },
    { label: 'Action', value: '28' },
    { label: 'Comedy', value: '35' },
    { label: 'Drama', value: '18' }
  ];
  activeFilter: string = '0'; // Rastreia o filtro atualmente ativo
  @Output() filterApplied = new EventEmitter<Movie[]>();
  
  constructor(private movieService: MovieAPIService) { }

  ngOnInit() {
    this.onFilterApplied('0')
  }

  onFilterApplied(filter: any) {
    this.activeFilter = filter;
    
    if (filter === '0') {
      this.movieService.listFirstTenMovies().subscribe(
        movies => {
          this.filteredMovies = movies; // Atualiza a lista com os 10 primeiros filmes
          this.filterApplied.emit(this.filteredMovies); // Emite a lista filtrada
        },
        error => {
          console.error('Erro ao buscar os 10 primeiros filmes:', error);
        }
      );
    } else {
      const filters = { with_genres: filter };
      this.movieService.searchMoviesByFilters(filters).subscribe(
        movies => {
          this.filteredMovies = movies; // Atualiza a lista com os filmes filtrados
          this.filterApplied.emit(this.filteredMovies); // Emite a lista filtrada
        },
        error => {
          console.error('Erro ao buscar filmes de gênero:', error);
        }
      );
    }
  }

}
