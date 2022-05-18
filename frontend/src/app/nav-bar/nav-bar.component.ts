import { Component, OnInit } from '@angular/core'
import { GlobalServicesService } from '../services/global-services.service';

interface linkProps {
  name: string
  to: string
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})

export class NavBarComponent implements OnInit {
  constructor(public GlobalServicesService:GlobalServicesService) {}

  link1: linkProps = {
    name: 'DashBoard',
    to: '/ClientDash',
  }

  link2: linkProps = {
    name: 'Selling',
    to: '/Selling',
  }

  link3: linkProps = {
    name: 'Market Place',
    to: '/MarketPlace',
  }

  chagePage(page:string) {
    console.log("ChangePage");
    this.GlobalServicesService.setPage(page);
  }

  getClass(name:string){
    if (name == this.GlobalServicesService.getPage()){ 
      return "linksNav active"
    }
    return "linksNav "
  }

  ngOnInit(): void {}
}
