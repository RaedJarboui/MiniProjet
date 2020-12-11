import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookService } from '../shared/book.service';

@Component({
  selector: '[app-book]',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book
  @Input() index;

  constructor(public bookService: BookService) { }
@Output() parentFunction:EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
    this.parentFunction.emit("Message from child to parent");
  }
  

}
