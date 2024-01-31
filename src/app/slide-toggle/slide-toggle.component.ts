import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slide-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide-toggle.component.html',
  styleUrl: './slide-toggle.component.css'
})
export class SlideToggleComponent {

  @Output() toggledEvent = new EventEmitter<boolean>();


  @Input({required: true}) public optionOff!: string;
  @Input({required: true}) public optionOn!: string;
  @Input({required: false}) protected selected: boolean = false;


  toggleButton(){
    this.selected = !this.selected;
    this.toggledEvent.emit(this.selected);
  }


  onPress() {
    this.toggleButton()
  }
}
