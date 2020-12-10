import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { BookService } from '../shared/book.service';


@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
books;
searchValue: string;
title;
p:number=1;
index;
  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((data)=>{
      this.books=data;console.log(this.books)
          
          }),
          errors =>{
            console.log(errors);
          }
  }
  key: string ='id';
  reverse:boolean = false;
  sort(key){
    this.key=key;
    this.reverse =!this.reverse;

  }
  
  
 
}