import { Component, Input, OnInit, ElementRef ,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../shared/book.service';
import html2canvas from 'html2canvas';
import * as html2pdf from 'html2pdf.js';


@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {
  book;

  constructor(private route: ActivatedRoute,private router: Router, public bookService:BookService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.bookService.getBookById(id).subscribe((result)=>{
      this.book=result;
      });
     

  }
  onBack(){
    this.router.navigate(['/books']);
  }
  downloadPDF(){
 const options ={
   name: 'output.pdf',
   image: {type:'jpeg'},
   html2canvas: {},
   jsPDF: {orientation:'landscape'}
 }
 const element: Element = document.getElementById('contentToPDF')
 html2pdf()
 .from(element)
 .set(options)
 .save()

  }

}
