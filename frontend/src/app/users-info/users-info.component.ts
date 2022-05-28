import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.css'],
})
export class UsersInfoComponent implements OnInit {
  @Input() id: string = ''
  @Input() nome: string = ''
  @Input() date: string = ''
  @Input() phone_number: number = 0
  @Input() email?: string = ''
  @Input() dataContext: string = ''
  @Input() fidelizado: boolean = true

  popUpVerify: string = 'alert inactive'
  popUpText: string = ''
  popUpBtn: string = ''

  constructor() {}

  ngOnInit(): void {}

  submit() {
    switch (this.popUpBtn) {
      case 'submit':
        console.log('Info submited')
        break

      case 'delete':
        console.log('User deleted')
        break

      case 'fidelizar':
        console.log('User fidelizado')
        break

      case 'plusEmployee':
        console.log('Funcionario atribuido')
        break

      default:
        break
    }
  }

  changeValuePopUp(btn?: string) {
    if (this.popUpVerify == 'alert active') { this.popUpVerify = 'alert inactive'}
    else { this.popUpVerify = 'alert active' }

    switch (btn) {
      case 'submit':
        this.popUpBtn = btn
        this.popUpText = `Tem a certeza que deseja alterar a informação do utilizador ${this.id}?`
        break

      case 'delete':
        this.popUpBtn = btn
        this.popUpText = `Tem a certeza que deseja eliminar o utilizador ${this.id}?`
        break

      case 'fidelizar':
        this.popUpBtn = btn
        this.popUpText = `Tem a certeza que deseja fidelizar o utilizador ${this.id}?`
        break

      case 'plusEmployee':
        this.popUpBtn = btn
        this.popUpText = `Tem a certeza que deseja atribuir um funcionario o utilizador ${this.id}?`
        break

      default:
        break
    }
  }

  getDataContext(type: string) {
    if (this.dataContext == type) { return 'show' } 
    else { return 'hidden' }
  }
}
