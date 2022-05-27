import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { BookService } from '../services/rest/book/book.service';
import { Book } from '../services/rest/models/book'
//import { BookService } from '../services/rest/book/book.service';

@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.css'],
})
export class MarketPlaceComponent implements OnInit {
  books!: Book[];

  constructor(public rest: BookService, private router: Router) { }

  ngOnInit(): void { 
    this.getAllBooks()
  }

  page = "Market Place"

  dropedAutor: string = "droped inactive";
  changeDropedAutor() { this.dropedAutor == "droped inactive" ? this.dropedAutor = "droped" : this.dropedAutor = "droped inactive"; }


  autorLabel: string = "Autor";
  changeAutorLabel(autor: string) { this.autorLabel = autor; }


  getAllBooks() {
    console.log('Hi')
    this.rest.getAllBooks().subscribe((data: any) => {
      console.log(data);
      this.books = data;
    })
  }

  // getBookByISBN() {
  //   var filter = this.route.snapshot.params['isbn'];
  //   this.rest.getBook(filter).subscribe((data: any) => {
  //     this.book = data;
  //   })
  // } 
}
