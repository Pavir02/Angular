import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {
  image = "";
  transform(value:string, fallback:string)
  {
    if(value)
      this.image = value;
    else
      this.image = fallback;

    return this.image;
  }
}
