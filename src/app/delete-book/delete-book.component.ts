import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
id;
  constructor(private bookService:BookService,private route: ActivatedRoute, private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookService.deleteBook(this.id).subscribe(()=>{
      this.router.navigate(['/books']);
    console.log("deleted");
    });
  }

}
