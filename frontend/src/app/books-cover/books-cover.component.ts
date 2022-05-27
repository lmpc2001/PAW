import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-books-cover',
  templateUrl: './books-cover.component.html',
  styleUrls: ['./books-cover.component.css'],
})
export class BooksCoverComponent implements OnInit {
  @Input() imageUrl: string = ''
  @Input() bookName: string = 'Não existe'
  @Input() bookPrice: number = 0
  @Input() bookAutor: string = 'Não existe'
  @Input() bookISPM: string = 'Não existe'
  @Input() bookUnits: number = 0
  @Input() bookState: boolean = false

  @Input() page: string = ''

  bookEditbtn: string = 'bookEdit inactive'

  constructor() {}
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
      console.log('Delete book')
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
}
