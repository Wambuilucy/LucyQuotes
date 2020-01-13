import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('John', 'All that we are is the result of what we have thought. ', 'Buddha', new Date(2016, 10, 27)),
    new Quote('Pius', 'I have no special talent. I am only passionately curious. ', 'Albert Einstein', new Date())
  ];
  constructor() { }
  num1: number;
  num2: number;
  count: number;

  uploadQuote(myQuote) {
    this.quotes.push(myQuote);
  }

  toggleDescription(index) {
    this.quotes[index].isDescriptionShown = !this.quotes[index].isDescriptionShown;
  }

  deleteQuote(index) {
    confirm('Do you want to delete this quote ?') ? this.quotes.splice(index, 1) : console.log('Not deleted');

  }
  highlightThis(highest) {
    console.log(1);
  }

  addDownVote(index) {
    this.quotes[index].downVotes++;
  }
  addUpVote(index) {
    this.quotes[index].upVotes++;
    // this.checkHighVote();
  }

  checkHighVote() {
    const votesArray: number[] = [];
    for (const quote of this.quotes) {
      votesArray.push(quote.upVotes);
    }
    votesArray.sort();
    console.log(votesArray[votesArray.length - 1]);
    if (votesArray.length - 1 === votesArray.length - 2) {

      return votesArray[votesArray.length - 2];
    }

    return votesArray[votesArray.length - 1];
  }

  ngOnInit() {
  }
}

