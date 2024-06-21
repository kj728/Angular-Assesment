import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PHolderPipe } from '../Pipes/pholder.pipe';

@Component({
  selector: 'app-place-holder',
  standalone: true,
  imports: [CommonModule,FormsModule,PHolderPipe],
  templateUrl: './place-holder.component.html',
  styleUrl: './place-holder.component.css'
})
export class PlaceHolderComponent {

  input = " ";
  constructor() { } 


}
