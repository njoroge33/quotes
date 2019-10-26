import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  showForm: boolean = true;

  newQuote = new Quote("", "", new Date(), "",0,0);
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote() {
    this.addQuote.emit(this.newQuote);
  }

  closeForm () {
    this.showForm = !this.showForm;
  }

  constructor() { }

  ngOnInit() {
  }

}
