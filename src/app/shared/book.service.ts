import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  form: FormGroup;

  constructor(private http: HttpClient,private router: Router,private route: ActivatedRoute) { }
  getAllBooks(){
    return this.http.get<Book[]>('/api/books/');
  }
  getBookById(id:number){
    return this.http.get<Book>('/api/books/' +id);
  }
  deleteBook(id:number){
    return this.http.delete('/api/books/' +id);
  }
  addBook(data:any): Observable<any>{
    return this.http.post('/api/books/',data);
  }
  updateBook( id:any, data:any){
    return this.http.put<Book>('/api/books/' +id, data);

}
deletebook(id){
  this.deleteBook(id).subscribe(()=>{
    this.router.navigate(['/books']);
  console.log("deleted");
  });
  }
  submit(form){
    this.addBook(form).subscribe(() =>{
      this.router.navigate(['/books']);
      console.log("book added succesfully");
  
    })
  }
}
