import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../services/rest/client/client.service';
import { EmployeeService } from '../services/rest/employee/employee.service';

@Component({
  selector: 'app-registro-page',
  templateUrl: './registro-page.component.html',
  styleUrls: ['./registro-page.component.css']
})
export class RegistroPageComponent implements OnInit {

  @Input() userType: string = 'cliente';
  @Input() name: string = '';
  @Input() email: string = '';
  @Input() phone_number: number = 0;
  @Input() password: string = '';

  msg = "Email ou password incorreta"
  type = true
  display = false

  constructor(private router: Router, private route: ActivatedRoute, public rest?: ClientService, public restEmployee?: EmployeeService) { }

  ngOnInit(): void {
  }

  changeUserType() {
    if (this.userType == 'cliente') {
      this.userType = 'funcionario'
    } else {
      this.userType = 'cliente'
    }
  }

  closePopUp() {
    setTimeout(() => {
      this.display = false;
    }, 5000)
  }

  submit() {
    try {
      if (this.userType == 'cliente') {
        this.rest?.createClient('web', {
          client: {
            name: this.name,
            email: this.email,
            phone_number: this.phone_number,
            password: this.password
          }
        }).subscribe({
          complete: () => {
            this.msg = "Cliente registado com sucesso"
            this.type = false;
            this.display = true;

            this.closePopUp();
            this.router.navigate(['/login']);
          },
          error: () => {
            this.msg = "Os dados inseridos são invalidos"
            this.display = true

            this.closePopUp()
          }
        })
      } else {
        this.restEmployee?.createEmployee({
          employee: {
            name: this.name,
            email: this.email,
            phone_number: this.phone_number,
            password: this.password
          }
        }).subscribe({
          complete: () => {
            this.msg = "Empregado registado com sucesso"
            this.type = false;
            this.display = true;

            this.closePopUp();
            this.router.navigate(['/login']);
          },
          error: () => {
            this.msg = "Os dados inseridos são invalidos"
            this.display = true

            this.closePopUp();
          }
        })
      }
    } catch (error) {
      this.display = true
      this.msg = "Algo deu errado, por favor tente outra vez!"
      console.log(error)
    }
  }
}
