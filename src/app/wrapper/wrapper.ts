import { Component } from '@angular/core';
import { Renderlist } from '../renderlist/renderlist';
import { AppForm } from "../app-form/app-form";

@Component({
  selector: 'app-wrapper',
  imports: [Renderlist, AppForm],
  templateUrl: './wrapper.html',
  styleUrl: './wrapper.scss'
})
export class Wrapper {
  tasks:{title:string, status:boolean,id:number}[]=[];

  recieveTasks(event:string){
    const taskObj={title:event,status:false,id:Date.now()}
    this.tasks.push(taskObj);
  }

  evaluateComplete(event:number){
   const target= this.tasks.find(i => i.id===event);
    if (target) {
    target.status = !target.status;
  }}

evaluateUpdate(event: number) {
  const target = this.tasks.find(i => i.id === event);
  if (target) {
    const updatedTitle = window.prompt("NEW TITLE FOR THIS TASK", target.title);
    if (updatedTitle !== null && updatedTitle.trim() !== '') {
      target.title = updatedTitle.trim();
    }
  }
}


  evaluateDelete(event:number){
   const target= this.tasks.findIndex(i => i.id===event)
    if (target !== -1) {
      this.tasks.splice(target,1)
  }}
}
