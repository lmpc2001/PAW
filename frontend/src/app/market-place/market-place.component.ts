import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Book } from '../services/rest/models/book'
//import { BookService } from '../services/rest/book/book.service';

@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.css'],
})
export class MarketPlaceComponent implements OnInit {
  /*book!: Book;
public rest:BookService, private route: ActivatedRoute, private router: Router*/
  constructor() {}

  ngOnInit(): void {}

  page = "Market Place"

  dropedAutor:string = "droped inactive";
  changeDropedAutor(){ this.dropedAutor == "droped inactive" ? this.dropedAutor = "droped" : this.dropedAutor = "droped inactive";}


  autorLabel:string = "Autor";
  changeAutorLabel(autor:string){ this.autorLabel = autor;}

  /*
  getAllBooks(){
    this.rest.getAllBooks().subscribe((data: any) => {
    this.book = data;
    })
  }

  getBookByISBN(){
    var filter = this.route.snapshot.params['isbn'];
    this.rest.getBook(filter).subscribe((data: any) => {
    this.book = data;
    })
  }*/
}
