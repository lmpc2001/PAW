import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-erro-pop-up',
  templateUrl: './erro-pop-up.component.html',
  styleUrls: ['./erro-pop-up.component.css'],
})
export class ErroPopUpComponent implements OnInit {
  @Input() msg: string = 'Dados incorretos'
  @Input() type: boolean = true
  @Input() display: boolean = false

  constructor() {}

  ngOnInit(): void {}

  getType() {
    return this.type ? 'red' : 'green'
  }

  getDisplay(){
    return this.display ? "display" : ""
  }
}
