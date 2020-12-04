import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  form: FormGroup;
  imageSrc: string; //image

  constructor(public bookService: BookService, private router: Router,private fb: FormBuilder) {
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

}
