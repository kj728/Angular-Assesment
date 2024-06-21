import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pHolder',
  standalone: true
})
export class PHolderPipe implements PipeTransform {

  transform(value: string, limit:number): string {
    if (value.length > limit) {
      return value;
    }
    return "Input is empty or shorter than the character limit"
  }

}
