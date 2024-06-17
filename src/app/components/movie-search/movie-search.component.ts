import { Component, OnInit } from '@angular/core';
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

  constructor(private fb: FormBuilder, private movieAPIService: MovieAPIService) {
    this.searchForm = this.fb.group({
      title: ['']
    });
  }

  ngOnInit(): void {
    this.searchForm.get('title')?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(title => this.movieAPIService.searchMoviesByTitle(title))
    ).subscribe(movies => {
      this.movies = movies;
    });
  }
}
