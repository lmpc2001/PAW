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

  @Input() userType: string = 'client';
  @Input() name: string = '';
  @Input() email: string = '';
  @Input() phone_number: string = '';
  @Input() password: string = '';

  constructor(private router: Router, public rest: ClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  submit() {
    try {
      var platform = this.route.snapshot.queryParams['platform'];
      this.rest?.createClient(platform,{
        client:{
          name: this.name,
          email: this.email,
          phone_number: this.phone_number,
          password: this.password
        }
      }).subscribe((data: any) => {
        console.log(data);
      })
    } catch (error) {
      console.log(error)
    }
  }
}
