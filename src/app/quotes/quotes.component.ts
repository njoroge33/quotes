import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  showRemove: boolean = false;

  quotes: Quote[] = [
    new Quote("Don't live to make your presence noticed, live to make your absence felt", 'Bob Marley', new Date('2019, 02, 12'), 'john', 1, 0),
    new Quote('Do not gain the world and lose your soul, wisdom is better than silver or gold...', 'Bob Marley', new Date('2019, 03, 12'), 'john', 0, 0),
    new Quote("And I ask why am I black, they say I was born in sin, and shamed inequity. One of the main songs we used to sing in church makes me sick, 'love wash me and I shall be whiter than snow.", 'Peter Tosh', new Date('2019, 09, 12'), 'john', 0, 0),
    new Quote("I freed a thousand slaves I could have freed a thousand more if only they knew they were slaves.", 'Harriet Tubman', new Date('2019, 10, 12'), 'john', 0, 0)

  ];

  addNewQuote(quote) {
    this.quotes.push(quote);
  }

  // addVotes ():void {
  //   this.quotes.upVotes = this.quotes.upVotes+=1;
  // }

  upVote(idx: number) {
    this.quotes[idx].upVotes += 1;

  }

  downVote(idx: number) {
    this.quotes[idx].downVotes += 1;

  }

  constructor() { }

  ngOnInit() {
  }

}
