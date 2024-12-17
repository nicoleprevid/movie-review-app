import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MovieAPIService } from 'src/app/services/movies.service';
import { Movie } from '../movie-card/movie.interface';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  searchForm: FormGroup;
  movies: Movie[] = [];
  @Output() searchResults = new EventEmitter<Movie[]>();
  @Output() searchActive = new EventEmitter<boolean>();



  constructor(private fb: FormBuilder, private movieAPIService: MovieAPIService) {
    this.searchForm = this.fb.group({
      title: ['']
    });
  }

  ngOnInit(): void {
    this.searchForm.get('title')?.valueChanges.pipe(
      debounceTime(300), // Aguarda o usuário parar de digitar
      distinctUntilChanged(),
      switchMap(title => {
        if (title.trim() === '') {
          // Retorna filmes padrão quando o campo está vazio
          this.searchActive.emit(false); 
          return this.movieAPIService.listFirstTenMovies();

        }
        this.searchActive.emit(true); 
        return this.movieAPIService.searchMoviesByTitle(title);
      })
    ).subscribe(
      movies => this.searchResults.emit(movies), // Emite os resultados (padrão ou busca)
      error => console.error('Erro ao buscar filmes:', error)
    );
  }
  
  
}
