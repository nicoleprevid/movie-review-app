import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesManagerComponent } from './movies-manager.component';

describe('MoviesManagerComponent', () => {
  let component: MoviesManagerComponent;
  let fixture: ComponentFixture<MoviesManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
