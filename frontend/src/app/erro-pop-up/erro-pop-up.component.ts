import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-erro-pop-up',
  templateUrl: './erro-pop-up.component.html',
  styleUrls: ['./erro-pop-up.component.css'],
})
export class ErroPopUpComponent implements OnInit, OnDestroy {
  subscription: Subscription | undefined;
  fiveSeconds: Observable<number> = timer(0, 5000);
  @Input() msg: string = 'Dados incorretos'
  @Input() type: boolean = true
  @Input() display: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  getType() {
    return this.type ? 'red' : 'green'
  }

  getDisplay(){
    return this.display ? "display" : ""
  }

  changeDisplay() {
    this.display = false;
  }


  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  
}
