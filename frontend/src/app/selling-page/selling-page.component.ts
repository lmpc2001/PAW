import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/rest/book/book.service';
import { Book } from '../services/rest/models/book';

@Component({
  selector: 'app-selling-page',
  templateUrl: './selling-page.component.html',
  styleUrls: ['./selling-page.component.css']
})
export class SellingPageComponent implements OnInit {

  @Input() bookData: Book = new Book();

  constructor(public rest:BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  createBook() {
    // this.rest.createBook(this.bookData).subscribe((result: Book) => {
    //   this.router.navigate(['/']);
    // }, (err) => {
    //   console.log
    // })  deprecated


    this.rest.createBook(this.bookData).subscribe({
      complete: () => this.router.navigate(['/']),
      error: (error) => console.log(error),
    })
  }
}
