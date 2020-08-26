import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inOutTransform',
})
export class InOutTransformPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    if (value === 0) {
      return 'Wyjście';
    } else {
      return 'Wejście';
    }
  }
}
