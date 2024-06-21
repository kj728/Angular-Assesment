import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TalkativeDirective } from './Directives/talkative.directive';
import { MessageService } from './Services/message.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpinningGameComponent } from './spinning-game/spinning-game.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TalkativeDirective,CommonModule,FormsModule,SpinningGameComponent,PlaceHolderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent   {
  title = 'my-app';
 
  constructor() {
  
  }




}
