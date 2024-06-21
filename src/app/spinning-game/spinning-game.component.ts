import { Component } from '@angular/core';

@Component({
  selector: 'app-spinning-game',
  standalone: true,
  imports: [],
  templateUrl: './spinning-game.component.html',
  styleUrl: './spinning-game.component.css'
})
export class SpinningGameComponent {

  result = " "
  outcome = [
    "Prize 1",
    "Prize 2",
    "Try Again",
    "Bonus",
  ]

  constructor() { }

  makeSpin(){
    // Generate a random index based on the length of the messages array
    const randomIndex = Math.floor(Math.random() * this.outcome.length);
    // Use the random index to access a random message from the messages array
    this.result = this.outcome[randomIndex];
  }






}
