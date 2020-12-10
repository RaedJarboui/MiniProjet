import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  id;
  form: FormGroup;
  book;
  imageSrc: string;

  constructor(public bookService:BookService,private route: ActivatedRoute, private router: Router,private fb: FormBuilder) { 
    this.form = this.fb.group({
      id: [null, [Validators.required]],
      title: [null, [Validators.required]],
      author: [null, [Validators.required]],
      price: [null, [Validators.required]],
      quantity: [null, [Validators.required]],
      image: [null, [Validators.required]],
      fileSource: new FormControl('', [Validators.required])


     

    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.bookService.getBookById(this.id).subscribe(result=>{
      this.book=result;
      this.form.patchValue(this.book);
      console.log(result);

      });
  }
  onFileChange(event) {

    const reader = new FileReader();

    

    if(event.target.files && event.target.files.length) {

      const [image] = event.target.files;

      reader.readAsDataURL(image);

    

      reader.onload = () => {

   

        this.imageSrc = reader.result as string;

     

        this.form.patchValue({

          fileSource: reader.result

        });

   

      };

   

    }

  }
  
  modifyBook(id,form){
   
    
  this.bookService.modifyBook(id,form); 
  
  }

}
