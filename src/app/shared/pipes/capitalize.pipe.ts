import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value.replace(/\w\S*/g, (txt) =>  txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() );
  }

}
