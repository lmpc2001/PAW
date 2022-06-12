import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { BookService } from '../services/rest/book/book.service'
import { Book } from '../services/rest/models/book'

@Component({
  selector: 'app-selling-page',
  templateUrl: './selling-page.component.html',
  styleUrls: ['./selling-page.component.css'],
})
export class SellingPageComponent implements OnInit {
  books: Array<any> = [];

  @Input() title: string = ''
  @Input() author: string = ''
  @Input() isbn: string = ''
  @Input() price: number = 0
  @Input() units_stock: number = 0
  @Input() coverImage!: File
  @Input() bookData: Book | undefined
  @Input() state: 'Novo' | 'Usado' = 'Novo';
  @Input() valMin: number = 0;
  @Input() valMax: number = 0;

  previewPhotos: string = ''


  constructor(public rest: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  page = 'Selling'

  dropedCliente: string = 'droped inactive'
  dropedAutor: string = 'droped inactive'

  changeDropedCliente() {
    this.dropedCliente == 'droped inactive'
      ? (this.dropedCliente = 'droped')
      : (this.dropedCliente = 'droped inactive')
  }
  changeDropedAutor() {
    this.dropedAutor == 'droped inactive'
      ? (this.dropedAutor = 'droped')
      : (this.dropedAutor = 'droped inactive')
  }

  autorLabel: string = 'Autor'
  client: string = 'Cliente'
  changeAutorLabel(autor: string) {
    this.autorLabel = autor
  }

  changeClientLabel(client: string) {
    this.client = client
  }

  changeBookState() {
    if (this.state == 'Novo') {
      this.state = 'Usado'
    } else {
      this.state = 'Novo'
    }
  }

  setImage(event: Event) {
    const element = event.target as HTMLInputElement
    let file: FileList | null = element.files

    if (file) {
      this.coverImage = file[0]
    }
  }

  createBook() {
    this.bookData = new Book({
      title: this.title,
      author: this.author,
      price: this.price,
      isbn: this.isbn,
      coverImage: this.coverImage,
      units_stock: this.units_stock,
      state: this.state,
    })


    this.rest.createBook(this.bookData).subscribe({
      complete: () => console.log('Sucesso'),
      error: (error) => this.router.navigate(['/Selling']),
    })

    this.changeBookBtnState()
  }

  getAllBooks() {
    this.rest.getAllBooks().subscribe((data: any) => {
      this.books = data.books.book;
    })
  }

  createBookBtn: string = 'create inactive'
  newImage: string = 'new-image plus'

  changeBookBtnState() {
    if (this.createBookBtn == 'create active') {
      this.createBookBtn = 'create inactive'
      this.newImage = 'new-image plus'
    } else {
      this.createBookBtn = 'create active'
      this.newImage = 'new-image cross'
    }
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
