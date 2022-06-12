import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { BookService } from '../services/rest/book/book.service'
import { Book } from '../services/rest/models/book';

@Component({
  selector: 'app-books-cover',
  templateUrl: './books-cover.component.html',
  styleUrls: ['./books-cover.component.css'],
})
export class BooksCoverComponent implements OnInit {
  bookData: Book | undefined

  @Input() id: string = ''
  @Input() imageUrl: string = ''
  @Input() bookName: string = 'Não existe'
  @Input() bookPrice: number = 0
  @Input() bookAutor: string = 'Não existe'
  @Input() bookISBN: string = 'Não existe'
  @Input() bookUnits: number = 0
  @Input() bookState: string = ''

  @Input() books:Array<any> = [];

  @Input() page: string = ''

  bookEditbtn: string = 'bookEdit inactive'

  constructor(public rest: BookService, private router: Router) {}

  ngOnInit(): void {}

  getToogleState() {
    if (this.bookState == 'Novo') {
      return 'checkbox'
    }
    return 'checkbox active'
  }

  bookEdit() {
    this.bookEditbtn == 'bookEdit active'
      ? (this.bookEditbtn = 'bookEdit inactive')
      : (this.bookEditbtn = 'bookEdit active')
  }

  actionBook() {
    if (this.page == 'Selling') {
      this.deleteBook();
    } else {
      console.log('Book bought')
    }
    this.bookEditbtn = 'bookEdit inactive'
  }
  
  getTextBtn() {
    if (this.page == 'Selling') {
      return 'Eliminar livro'
    } else {
      return 'Comprar livro'
    }
  }


  deleteBook(){
    this.rest.deleteBook(this.id).subscribe({
      complete: () => this.books.splice(this.books.indexOf(this.id)) ,
      error: (error:any) => console.log(error),
    })
  }

  editCapability(){
    const user = JSON.parse(localStorage.getItem('user')!);
    if(user.roule.description == 'admin' || user.roule.description == 'user') {
      return ""
    } 
    return "true"
  }

  saveEditBook(){
    this.rest.updateBook(this.id, {
      price: this.bookPrice,
      units_stock: this.bookUnits,
      author: this.bookAutor,
      isbn: this.bookISBN
    }).subscribe({
      complete: () => console.log('Sucesso') ,
      error: (error:any) => console.log(error),
    })
  }

}
