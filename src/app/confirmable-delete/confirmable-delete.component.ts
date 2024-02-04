import { Component, EventEmitter, Input, Output } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-confirmable-delete',
  imports: [CommonModule],
  templateUrl: './confirmable-delete.component.html',
  styleUrls: ['./confirmable-delete.component.css'],
  standalone: true
})
export class ConfirmableDeleteComponent {
  @Input()
  alignButtonRight = '';
  @Input()
  message = '';
  @Input()
  failedMessage = '';
  @Input()
  failed = false;
  @Output()
  deleteEmit = new EventEmitter<MethodDecorator>();
  @Output()
  resetErrorEmit = new EventEmitter<MethodDecorator>();
  dialogShown = false;

  /**
   * Shows dialog
   */
  showDeleteDialog() {
    this.dialogShown = true;
  }

  /**
   * Cancels delete process and closes dialog, also emits {@link resetErrorEmit}
   */
  cancel() {
    this.dialogShown = false;
    this.resetErrorEmit.emit();
  }

  /**
   * Emits {@link deleteEmit} to parent component
   */
  confirmDelete() {
    this.deleteEmit.emit();
  }
}
