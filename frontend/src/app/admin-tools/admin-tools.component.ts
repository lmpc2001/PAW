import { Component, OnInit } from '@angular/core'
import { ClientService } from '../services/rest/client/client.service'
import { EmployeeService } from '../services/rest/employee/employee.service'

@Component({
  selector: 'app-admin-tools',
  templateUrl: './admin-tools.component.html',
  styleUrls: ['./admin-tools.component.css'],
})
export class AdminToolsComponent implements OnInit {
  employees!: any;
  clients!:any

  constructor(public restE: EmployeeService, public restC: ClientService) {}

  ngOnInit(): void {
    this.getAllEmployees();
    this.getAllClients();
  }

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

  getAllEmployees() {
    this.restE.getAllEmployees().subscribe((data: any) => {
      console.log(data);
      this.employees = data.employees;
    })
  }

  getAllClients() {
    this.restC.getAllClients().subscribe((data: any) => {
      console.log(data);
      this.clients = data.clients;
    })
  }
}
