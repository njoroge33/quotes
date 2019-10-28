import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.background='red';
  }

}


// import { Directive, ElementRef, Input} from '@angular/core';

// @Directive({
//   selector: '[quoteHighlight]'
// })
// export class HighlightDirective {
//   @Input('quoteHighlight') highlight: boolean;
//   constructor(private elem:ElementRef) {
//   }

//   ngOnInit() {
//     if (this.highlight) {
//       this.elem.nativeElement.style.backgroundColor='red';
//     }
//   }
// }
