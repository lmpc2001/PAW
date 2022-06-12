import { Component, Input, OnInit } from '@angular/core'
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
  books!: any;

  @Input() title: string = '';
  @Input() isbn: string = '';
  @Input() valMin: number = 0;
  @Input() valMax: number = 0;
  @Input() author: string = '';
  @Input() state: 'Novo'|'Usado' = 'Novo';

  constructor(public rest: BookService, private router: Router) {  }

  ngOnInit(): void { 
    this.getAllBooks()
  }

  page = "Market Place"

  dropedAutor: string = "droped inactive";
  changeDropedAutor() { this.dropedAutor == "droped inactive" ? this.dropedAutor = "droped" : this.dropedAutor = "droped inactive"; }


  autorLabel: string = "Autor";
  changeAutorLabel(autor: string) {
     this.autorLabel = autor; 
     this.author = autor
    }

    changeBookState() {
      if(this.state == 'Novo'){
        this.state = 'Usado'
      } else {
        this.state = 'Novo'
      }
    }

  getAllBooks() {
    this.rest.getAllBooks().subscribe((data: any) => {
      this.books = data.books.book;
    })
  }

  getFilteredBooks() {
    console.log(this.state);
    this.rest.getFilteredBook({
      state: this.state,
      author: this.author,
      isbn: this.isbn,
      title: this.title,
      valMin: this.valMin,
      valMax: this.valMax
    }).subscribe((data: any) => {
      console.log(data)
      this.books = data.books;
    })
  }
}
