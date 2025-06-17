import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Wrapper } from "./wrapper/wrapper";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Wrapper],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'toDo';
}
