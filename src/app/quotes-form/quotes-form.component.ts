import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { Quote } from '../quotes';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

@Input() quotes: Quote[];
  // newQuote = {
  //   createdBy: '',
  //   quote: '',
  //   author: '',
  // }

//   @Output() postClicked: EventEmitter<boolean> = 
//   new EventEmitter<boolean>();

//   onClick() {
//     this.postClicked.emit(false)
// }

  @Output() addQuote = new EventEmitter<Quote>();
  newQuote = new Quote("","",new Date,"",0,0);

  submitQuote() {
    this.addQuote.emit(this.newQuote);
  }

  @ViewChild('quoteForm', {static: false}) quoteForm: NgForm;

  resetForm () : void {
    this.quoteForm.reset();
  }

  // closeForm () {
  // this.showForm = !this.showForm;
  // }

  constructor() { }

  ngOnInit() {
  }

}
