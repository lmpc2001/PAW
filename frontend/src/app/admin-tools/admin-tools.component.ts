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

  showAdminTools() {
    const user = JSON.parse(localStorage.getItem('user')!);
    if(user.roule.description == 'admin') {
      return ''
    } else {
      return 'hidde'
    }
  }

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
      this.employees = data.employees;
    })
  }

  getAllClients() {
    this.restC.getAllClients().subscribe((data: any) => {
      this.clients = data.clients;
    })
  }
}
