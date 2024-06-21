import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  constructor() { }
   messages = [
    {
      text: "How are you today?"
    },
    {
      text: "Keep up the good work!"
    },
    {
      text: "Have a great day!"
    },
    {
      text: "Stay positive and happy!"
    },

    {
      text: "Keep learning new things!"
    },
    {
      text: "Embrace the challenges!",
    }

  ];

   generateMessage() {
    // Generate a random index based on the length of the messages array
    const randomIndex = Math.floor(Math.random() * this.messages.length);

    // Return the random message
    return this.messages[randomIndex].text;

  }

  



}
