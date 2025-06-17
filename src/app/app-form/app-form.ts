import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-form',
  imports: [FormsModule],
  templateUrl: './app-form.html',
  styleUrl: './app-form.scss'
})
export class AppForm {
    task:string="";

  @Output() dataEvent= new EventEmitter<string>()
  sendTasks(){
    this.dataEvent.emit(this.task);
    this.task="";
  }
}
