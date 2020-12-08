import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBookComponent } from './list-book/list-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { DetailsBookComponent } from './details-book/details-book.component';
import { BookService } from './shared/book.service';
import { AuthService } from './shared/auth.service';
import { AuthGuardService } from './shared/auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchfilterPipe } from './searchfilter.pipe';
import { BookComponent } from './book/book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';





const routes: Routes = [
  { path: 'auth/signup', component: SignUpComponent },
  { path: 'auth/signin', component: SignInComponent },
  { path: 'books',canActivate: [AuthGuardService], component: ListBookComponent },
  { path: 'books/reload/:id',canActivate: [AuthGuardService], component: DeleteBookComponent },
  { path: 'books/new',canActivate: [AuthGuardService], component: AddBookComponent },
  { path: 'books/:id',canActivate: [AuthGuardService], component: UpdateBookComponent },
  { path: 'books/details/:id',canActivate: [AuthGuardService], component: DetailsBookComponent },
  {path:'', redirectTo: 'books', pathMatch:'full'} 

];
@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
    AddBookComponent,
    UpdateBookComponent,
    DetailsBookComponent,
    SignUpComponent,
    SignInComponent,
    HeaderComponent,
    SearchfilterPipe,
    BookComponent,
    DeleteBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)

    
  ],
  providers: [
    BookService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
