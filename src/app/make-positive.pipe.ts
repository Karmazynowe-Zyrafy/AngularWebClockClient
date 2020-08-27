import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makePositive',
})
export class MakePositivePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    return Math.abs(value);
  }
}
