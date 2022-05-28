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

    /* -----------------------------
  Variaveis para ir buscar à DB para a popUp dos livros
  ----------------------------- */
  imageUrl: string = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZSu--8n0BPe0VhWIg5xfbAHaL2%26pid%3DApi&f=1' /*../../assets/svg/image-portrait.svg*/
  bookName: string = 'Legacy'
  bookPrice: number = 2
  bookAutor: string = 'Ze Maria Lencastre'
  bookISPM: string = 'A5D42A2'
  bookUnits: number = 3
  bookState: boolean = false
  /* --------------------------------- */

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
