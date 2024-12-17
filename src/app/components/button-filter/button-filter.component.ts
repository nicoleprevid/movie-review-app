import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-filter',
  template: `
    <button 
      (click)="applyFilter()" 
      [ngClass]="isActive 
        ? 'bg-blue-500 text-white hover:bg-blue-600' 
        : 'bg-white/90 text-black hover:bg-gray-100'" 
      class="hover:scale-105 max-w-40 w-40 rounded-lg overflow-hidden shadow-2xl transition-all">
      <h5 class="text-md font-semibold m-2">{{ label }}</h5>
    </button>
  `
})
export class ButtonFilterComponent {
  @Input() label!: string;
  @Input() filter: any;
  @Input() isActive: boolean = false; // Rastreia se o botão está ativo
  @Output() filterApplied = new EventEmitter<any>();

  applyFilter() {
    this.filterApplied.emit(this.filter);
  }
}
