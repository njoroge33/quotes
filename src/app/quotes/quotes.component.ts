import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [
    new Quote("Don't live to make your presence noticed, live to make your absence felt",'Bob Marley', '25/2013', 'john'),
    new Quote('Do not gain the world and lose your soul, wisdom is better than silver or gold...','Bob Marley', '25/2013', 'john'),
    new Quote("And I ask why am I black, they say I was born in sin, and shamed inequity. One of the main songs we used to sing in church makes me sick, 'love wash me and I shall be whiter than snow.",'Peter Tosh', '25/2013', 'john'),
    new Quote("I freed a thousand slaves I could have freed a thousand more if only they knew they were slaves.",'Harriet Tubman', '25/2013', 'john')

  ]

  constructor() { }

  ngOnInit() {
  }

}
