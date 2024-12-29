import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'country-search-box',
  imports: [CommonModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {


  @Output()
  public value: EventEmitter<string> = new EventEmitter();
  
  // Método para realiar la busqueda respectiva

  search(event:Event){
    const input = event.target as HTMLInputElement
    this.value.emit(input.value);
  }
}
