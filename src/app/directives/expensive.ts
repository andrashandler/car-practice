import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appExpensive]',
  standalone: false
})
export class Expensive {

  @Input('appExpensive')
  price!: number;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    if (this.price >= 5000000) {
      this.el.nativeElement.style.color = 'red';
      this.el.nativeElement.style.fontWeight = 'bold';

    }

  }

}
