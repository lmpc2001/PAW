import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/rest/book/book.service';
import { Book } from '../services/rest/models/book';
//import { Book } from '../services/rest/models/book';

@Component({
  selector: 'app-selling-page',
  templateUrl: './selling-page.component.html',
  styleUrls: ['./selling-page.component.css']
})
export class SellingPageComponent implements OnInit {

  @Input() title: string = '';
  @Input() author: string = '';
  @Input() isbn: string = '';
  @Input() price: number = 0;
  @Input() bar_code: string = '';
  @Input() units_stock: number = 0;
  @Input() coverImage!: File;

  @Input() bookData: Book | undefined;

  previewPhotos: string = '';

  constructor(public rest: BookService, private router: Router) { }

  ngOnInit(): void { }

  page = "Selling"

  dropedCliente: string = "droped inactive";
  dropedAutor: string = "droped inactive";

  changeDropedCliente() { this.dropedCliente == "droped inactive" ? this.dropedCliente = "droped" : this.dropedCliente = "droped inactive"; }
  changeDropedAutor() { this.dropedAutor == "droped inactive" ? this.dropedAutor = "droped" : this.dropedAutor = "droped inactive"; }


  autorLabel: string = "Autor";
  client: string = "Cliente"
  changeAutorLabel(autor: string) { this.autorLabel = autor; }

  changeClientLabel(client: string) { this.client = client; }


  setImage(event: Event) {
    const element = event.target as HTMLInputElement;
    let file: FileList | null = element.files;

    if (file) {
      this.coverImage = file[0];
    }
  }



  createBook() {
    this.bookData = new Book({
      title: this.title,
      author: this.author,
      bar_code: this.bar_code,
      price: this.price,
      isbn: this.isbn,
      coverImage: this.coverImage,
      units_stock: this.units_stock,
      state: 'Usado',
    });

    this.rest.createBook(this.bookData).subscribe({
      complete: () => this.router.navigate(['/']),
      error: (error) => console.log(error),
    })
  }

  createBookBtn:string = "create active";
  newImage:string = "new-image plus";

  changeBookBtnState(){
    if (this.createBookBtn == "create active"){
      this.createBookBtn = "create inactive";
      this.newImage = "new-image plus";
    } else {
      this.createBookBtn = "create active";
      this.newImage = "new-image cross";
    }
  }

}
