import { Directive, HostBinding, HostListener, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { MessageService } from '../Services/message.service';

@Directive({
  selector: '[appTalkative]',
  standalone: true
})
export class TalkativeDirective  {

  constructor(private ms: MessageService) { }
  @HostBinding('textContent') message ="Click Me!";

  @HostListener('click') onClick() {
    this.message  = this.ms.generateMessage();
  }

}
