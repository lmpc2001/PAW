import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Route, Router } from '@angular/router'
import { ClientService } from '../services/rest/client/client.service';
import { EmployeeService } from '../services/rest/employee/employee.service';
import { LoginService } from '../services/rest/login/login.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {

  @Input() email: string = '';
  @Input() password: string = '';

  msg = "Email ou password incorreta"
  type = true
  display = false
  rest: LoginService;

  constructor(private router: Router, private route: ActivatedRoute, rest: LoginService) {
    this.rest = rest;
  }

  ngOnInit(): void { }

  submit() {
    let nextPath = this.route.snapshot.queryParams['returnURL'];

    try {
      this.rest?.login({
        email: this.email,
        password: this.password
      }).subscribe((data: any) => {
        if (data.login) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
          if (nextPath) {
            this.router.navigate([nextPath])
          } else {
            if (data.user.roule === undefined) {
              this.router.navigate(['ClientDash'])
            } else {
              data.user.roule.description == 'admin' && this.router.navigate(['/', 'ShopDash'])
            }
          }
        }
      }, () => {
        this.display = true
        setTimeout(() => {
          this.display = false;
        }, 5000)
      })
    } catch (error) {
      console.log(error)
    }
  }
}
