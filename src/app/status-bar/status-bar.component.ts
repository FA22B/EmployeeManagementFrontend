import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HistoryService} from '../history.service';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-status-bar',
  imports: [CommonModule, RouterModule],
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss'],
  standalone: true
})
export class StatusBarComponent {
  @Input()
  title = '';
  @Input()
  editable = false;
  @Input()
  editRoute = '';
  @Input()
  saveable = false;
  @Output()
  saveEmit = new EventEmitter<MethodDecorator>();

  constructor(private historyService: HistoryService) {}

  /**
   * Emits the save operation to the parent component
   */
  save() {
    this.saveEmit.emit();
  }

  /**
   * Goes back with the history service
   */
  goBack() {
    this.historyService.goBack();
  }
}
