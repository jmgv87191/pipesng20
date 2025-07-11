import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroSortBy'
})
export class HeroSortByPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
