import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/rest/book/book.service';
//import { Book } from '../services/rest/models/book';

@Component({
  selector: 'app-selling-page',
  templateUrl: './selling-page.component.html',
  styleUrls: ['./selling-page.component.css']
})
export class SellingPageComponent implements OnInit {

  //@Input() bookData: Book = new Book();
  //public rest:BookService, private route: ActivatedRoute, private router: Router
  constructor() { }

  ngOnInit(): void {}

  page = "Selling"

  dropedCliente:string = "droped inactive";
  dropedAutor:string = "droped inactive";
  
  changeDropedCliente(){ this.dropedCliente == "droped inactive" ? this.dropedCliente = "droped" : this.dropedCliente = "droped inactive";}
  changeDropedAutor(){ this.dropedAutor == "droped inactive" ? this.dropedAutor = "droped" : this.dropedAutor = "droped inactive";}


  autorLabel:string = "Autor";
  client:string = "Cliente"
  changeAutorLabel(autor:string){ this.autorLabel = autor;}

  changeClientLabel(client:string){ this.client = client;}

  /*
  createBook() {
    // this.rest.createBook(this.bookData).subscribe((result: Book) => {
    //   this.router.navigate(['/']);
    // }, (err) => {
    //   console.log
    // })  deprecated


    this.rest.createBook(this.bookData).subscribe({
      complete: () => this.router.navigate(['/']),
      error: (error) => console.log(error),
    })
  }*/
}
