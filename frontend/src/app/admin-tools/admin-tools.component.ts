import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-admin-tools',
  templateUrl: './admin-tools.component.html',
  styleUrls: ['./admin-tools.component.css'],
})
export class AdminToolsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  id = 'JJM35J7NGF31'
  nome = 'João'
  date = '28/07/96'
  phone_number = 968547784
  email = 'goncalopedrogil@gmail.com'
  dataContextFunc = 'funcionario'
  dataContextUser = 'user'

  dropDownClientes: string = 'inactive'
  dropDownFuncionarios: string = 'inactive'

  setDropdownState(option: string) {
    switch (option) {
      case 'clientes':
        if (this.dropDownClientes == 'inactive') {
          this.dropDownClientes = 'active'
        } else {
          this.dropDownClientes = 'inactive'
        }
        break
      case 'funcionarios':
        if (this.dropDownFuncionarios == 'inactive') {
          this.dropDownFuncionarios = 'active'
        } else {
          this.dropDownFuncionarios = 'inactive'
        }
        break
        
      default:
        break
    }
  }
}
