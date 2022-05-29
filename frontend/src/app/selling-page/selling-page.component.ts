import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { BookService } from '../services/rest/book/book.service'
import { Book } from '../services/rest/models/book'

@Component({
  selector: 'app-selling-page',
  templateUrl: './selling-page.component.html',
  styleUrls: ['./selling-page.component.css'],
})
export class SellingPageComponent implements OnInit {
  @Input() title: string = ''
  @Input() author: string = ''
  @Input() isbn: string = ''
  @Input() price: number = 0
  @Input() units_stock: number = 0
  @Input() coverImage!: File
  @Input() bookData: Book | undefined

  /* -----------------------------
  Variaveis para ir buscar à DB para a popUp dos livros
  ----------------------------- */
  id: string =''
  imageUrl: string = ''
  bookName: string = ''
  bookPrice: number = 0
  bookAutor: string = ''
  bookISBN: string = ''
  bookUnits: number = 0
  bookState: string = ''
  /* --------------------------------- */
  previewPhotos: string = ''

  constructor(public rest: BookService, private router: Router) {}

  ngOnInit(): void {}

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
      state: "Usado",
    })


    this.rest.createBook(this.bookData).subscribe({
      complete: () => this.router.navigate(['/']),
      error: (error) => console.log(error),
    })
  }

  getBook(id: string) {
    this.rest.getBook(id).subscribe((book:any) => {
      this.imageUrl = book.coverImage.
      this.bookName = book.title
      this.bookPrice = book.price,
      this.bookAutor = book.author,
      this.bookISBN = book.isbn
      this.bookUnits = book.units_stock
      this.bookState = book.state
    })
  }

  // getAllBooks() {
  //   this.rest.getAllBooks().subscribe((book:any) => {
  //     this.imageUrl = book.coverImage.
  //     this.bookName = book.title
  //     this.bookPrice = book.price,
  //     this.bookAutor = book.author,
  //     this.bookISBN = book.isbn
  //     this.bookUnits = book.units_stock
  //     this.bookState = book.state
  //   })

  //   this.rest.getAllBooks().subscribe((data: any) => {
  //     console.log(data);
  //     this.books = data;
  //   })
  // }

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
}
