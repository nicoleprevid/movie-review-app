import { Component, Input, OnInit } from '@angular/core';
import { Movie } from './movie.interface';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie;
  
  constructor() { }

  ngOnInit(): void {
    console.log("chama movie card")

    console.log(this.movie)

  }
}
