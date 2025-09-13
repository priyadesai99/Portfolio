import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Projects } from '../projects/projects';
import { Experiences } from '../experiences/experiences';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Projects, Experiences],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portfolio';
}
