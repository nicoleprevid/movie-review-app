// button-filter.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-filter',
  template: `
    <button (click)="applyFilter()" *ngIf="filter"  class="max-w-40 w-40 rounded-lg overflow-hidden shadow-2xl bg-white-transparent-90">
      <h5 class="text-md font-semibold mb-2">{{label}}</h5>
    </button>
  `,
}) 
export class ButtonFilterComponent {
  // O modificador ! (non-null assertion) é usado para informar ao 
  // TypeScript que essas propriedades serão inicializadas antes de serem usadas,
  @Input() label!: string;
  @Input() filter: any;
  @Output() filterApplied = new EventEmitter<any>();

  applyFilter() {
    this.filterApplied.emit(this.filter);
  }
}
