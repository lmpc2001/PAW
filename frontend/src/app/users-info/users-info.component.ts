import { Component, Input, OnInit } from '@angular/core'
import { ClientService } from '../services/rest/client/client.service'
import { EmployeeService } from '../services/rest/employee/employee.service'

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
  @Input() email: string = ''
  @Input() fidelizado: boolean = true
  @Input() userType: 'e' | 'c' | 'admin' | '' = '';

  popUpVerify: string = 'alert inactive'
  popUpText: string = ''
  popUpBtn: string = ''

  constructor(public restE: EmployeeService, public restC: ClientService) { }

  ngOnInit(): void { }

  submit() {
    switch (this.popUpBtn) {
      case 'submit':
        this.userType == 'c' ? this.updateClient(this.id) : this.updateEmployee(this.id);
        this.changeValuePopUp()
        break

      case 'delete':
        this.userType == 'c' ? this.deleteClient(this.id) : this.deleteEmployee(this.id);
        this.changeValuePopUp()
        break

      case 'fidelizar':
        this.userType == 'c' && this.fidelizeClient(this.id)
        this.changeValuePopUp()
        break

      default:
        break
    }
  }

  changeValuePopUp(btn?: string) {
    if (this.popUpVerify == 'alert active') { this.popUpVerify = 'alert inactive' }
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

      default:
        break
    }
  }

  getDataContext(type: string) {
    if (this.userType == type) { return 'show' }
    else { return 'hidden' }
  }

  deleteEmployee(id: string) {
    this.restE.deleteEmployee(id).subscribe((data: any) => {
      console.log(data);
    })
  }

  deleteClient(id: string) {
    this.restC.deleteClient(id).subscribe((data: any) => {
      console.log(data);
    })
  }

  fidelizeClient(id:string){
    this.restC.fidelizeClient(id).subscribe((data:any) => {
      console.log(data);
    })
  }

  updateEmployee(id: string) {
    this.restE.updateEmployee(id, {
      employee: {
        name: this.nome,
        phone_number: this.phone_number,
        email: this.email
      }
    }).subscribe((data: any) => {
      console.log(data)
    }, (error: any) => {
      console.log(error)
    })
  }

  updateClient(id: string) {
    this.restC.updateClient(id, {
      client: {
        name: this.nome,
        phone_number: this.phone_number,
        email: this.email
      }
    }).subscribe((data: any) => {
      console.log(data);
    }, (error: any) => {
      console.log(error)
    })
  }
}
