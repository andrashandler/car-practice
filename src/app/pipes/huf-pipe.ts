import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'huf',
  standalone: false
})
export class HufPipe implements PipeTransform {

  transform(value: number | string): unknown {
    if (value == null) return '';

    // Ha esetleg string jött volna
    const num = Number(value);

    return new Intl.NumberFormat('hu-HU', { 
      minimumFractionDigits: 0
    }).format(num) + ' Ft';
  }

}
