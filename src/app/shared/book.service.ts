import { HttpClient, HttpParams } from '@angular/common/http';
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
   books;
  constructor(private http: HttpClient,private router: Router,private route: ActivatedRoute) { }
  getAllBooks(){
    return this.http.get<Book[]>('/api/books/');
  }
  getBookById(id:number){
    return this.http.get<Book[]>('/api/books/' +id);
  }
  deleteBook(id:number){
    return this.http.delete('/api/books/' +id);
  }
  addBook(data:any): Observable<any>{
    return this.http.post('/api/books/',data);
  }
  updateBook( id:any, data:any){
    return this.http.put<Book[]>('/api/books/' +id, data);

}
findByTitle(title: string): Observable<any> {
  let params1 = new HttpParams().set('title',title);
  return this.http.get('/api/books/',{params:params1});
}
getBooks(){
  this.getAllBooks().subscribe((data)=>{
    this.books=data;console.log(this.books)
        
        }),
        errors =>{
          console.log(errors);
        }
}
deletebook(id){
  this.deleteBook(id).subscribe(()=>{
    this.router.navigate(['/reload']);
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
