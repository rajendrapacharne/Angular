import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdTinr'
})
export class UsdTinrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [x]=args;
    return value*x;
  }

}
