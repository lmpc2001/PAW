import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-page',
  templateUrl: './recover-page.component.html',
  styleUrls: ['./recover-page.component.css']
})
export class RecoverPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.router.navigate(['/'])
  }

}
