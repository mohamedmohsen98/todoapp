import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-renderlist',
  imports: [FormsModule],
  templateUrl: './renderlist.html',
  styleUrl: './renderlist.scss'
})
export class Renderlist {
  @Input() items: { title: string; status: boolean, id: number }[] = [];

  @Output() cT = new EventEmitter<number>()
  @Output() uT = new EventEmitter<number>()
  @Output() dT = new EventEmitter<number>()

  checkTask(id:number){
    this.cT.emit(id)

  }
  updateTask(id:number){
    this.uT.emit(id)
  }
  deleteTask(id:number){
    this.dT.emit(id)
  }
}
