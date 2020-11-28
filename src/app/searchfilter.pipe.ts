import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './models/Book';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Books: Book[], searchValue: string): Book[] {
    if(!Books || !searchValue){
      return Books;
    }
    return Books.filter(book=>
       book.author.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
       book.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
       book.price.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
       book.quantity.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

  }

}
