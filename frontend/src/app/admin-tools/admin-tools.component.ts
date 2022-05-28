import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-tools',
  templateUrl: './admin-tools.component.html',
  styleUrls: ['./admin-tools.component.css']
})
export class AdminToolsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  id = "JJM35J7NGF31"
  nome = "João"
  date = "28/07/96"
  phone_number = 968547784
  email = "goncalopedrogil@gmail.com"
  dataContextFunc = "funcionario";
  dataContextUser = "user";


}
