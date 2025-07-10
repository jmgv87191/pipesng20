import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero';

@Pipe({
  name: 'creador'
})
export class CreadorPipe implements PipeTransform {

  transform(value: Creator): string {
    return value === Creator.DC ? "DC":"Marvel"  ;
  }

}
