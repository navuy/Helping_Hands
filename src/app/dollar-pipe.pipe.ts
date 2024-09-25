import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollarPipe'
})
export class DollarPipePipe implements PipeTransform {

  transform(value: number): string {
    return "$"+value.toString();
  }

}
