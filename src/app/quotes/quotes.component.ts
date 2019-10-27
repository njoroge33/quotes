import { Component, OnInit, OnChanges } from '@angular/core';
import { Quote } from '../quotes';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit, OnChanges {

  showRemove: boolean = false;
  showForm: boolean = true;

  quotes: Quote[] = [
    new Quote("Don't live to make your presence noticed, live to make your absence felt", 'Bob Marley', new Date('2019, 02, 12'), 'john', 1, 0),
    new Quote('Do not gain the world and lose your soul, wisdom is better than silver or gold...', 'Bob Marley', new Date('2019, 03, 12'), 'john', 0, 0),
    new Quote("And I ask why am I black, they say I was born in sin, and shamed inequity. One of the main songs we used to sing in church makes me sick, 'love wash me and I shall be whiter than snow.", 'Peter Tosh', new Date('2019, 09, 12'), 'john', 0, 0),
    new Quote("I freed a thousand slaves I could have freed a thousand more if only they knew they were slaves.", 'Harriet Tubman', new Date('2019, 10, 12'), 'john', 0, 0)

  ];

  // newQuote = {
  //   createdBy: '',
  //   quote: '',
  //   author: '',
  // }

  addNewQuote(quote) {
    if (quote.createdBy === '' || quote.author === '' || quote.quote === ''){
      alert('all fields are required!')
    }else{
    this.quotes.push(quote);
  }
  }
  // addVotes ():void {
  //   this.quotes.upVotes = this.quotes.upVotes+=1;
  // }

  changeIndex (idx:number) {
    // const quoteVotes = this.quotes.map((quote) => quote.upVotes)
    // if (this.quotes[idx].upVotes > 0){
    // console.log(this.quotes.indexOf(this.quotes[idx]));
    // const quoteVotes = this.quotes.map((quote) => quote.upVotes)
    // console.log(quoteVotes)
    // const indx = quoteVotes.indexOf(Math.max(...quoteVotes))
    // console.log(indx)
    // quoteVotes.splice(0, 0, quoteVotes.splice(indx, 1)[0]);
    this.quotes.sort((a, b) => b.upVotes - a.upVotes)
  }

  upVote(idx: number) {
    this.quotes[idx].upVotes += 1;
    this.changeIndex(idx);

  }

  downVote(idx: number) {
    this.quotes[idx].downVotes += 1;

  }

//   onNotify(message: boolean) {
//     this.showForm = message;
// }

  // submitQuote(result) {
  //   console.log(result)
  //   this.showForm = false;
  // }

  // addNewGoal(quote){
  //   this.quotes.push(quote)
  // }
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.quotes = this.quotes;
  }

}
