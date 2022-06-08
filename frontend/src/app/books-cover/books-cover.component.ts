import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { BookService } from '../services/rest/book/book.service'

@Component({
  selector: 'app-books-cover',
  templateUrl: './books-cover.component.html',
  styleUrls: ['./books-cover.component.css'],
})
export class BooksCoverComponent implements OnInit {
  @Input() id: string = ''
  @Input() imageUrl: string = ''
  @Input() bookName: string = 'Não existe'
  @Input() bookPrice: number = 0
  @Input() bookAutor: string = 'Não existe'
  @Input() bookISBN: string = 'Não existe'
  @Input() bookUnits: number = 0
  @Input() bookState: string = ''

  @Input() page: string = ''

  bookEditbtn: string = 'bookEdit inactive'

  constructor(public rest: BookService, private router: Router) {}

  ngOnInit(): void {}

  getToogleState() {
    if (this.bookState) {
      return 'checkbox active'
    }
    return 'checkbox'
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
  
  // handleBtnClick() {
  //   if (this.page == 'Selling') {
  //     this.rest.deleteBook(this.id)
  //   } else {
  //     return 'Comprar livro'
  //   }
  // }


  deleteBook(){
    this.rest.deleteBook(this.id).subscribe({
      complete: () => console.log('Sucesso'),
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
    
  }

}
