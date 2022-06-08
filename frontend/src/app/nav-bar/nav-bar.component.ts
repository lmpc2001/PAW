import { Component, Input, OnInit } from '@angular/core'
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
  @Input() page: String | undefined

  constructor() {
    const user = JSON.parse(localStorage.getItem('user')!);
    if (user.roule !== undefined) {
      if (user.roule.description == 'admin') {
        this.link1.name = 'Admin Dashboard'
        this.link1.to = '/ShopDash'
      } else if (user.roule.description == 'user') {
        this.link1.name = 'Shop Dashboard'
        this.link1.to = '/ShopDash'
      }
    }
  }

  getPage(linkName: string) {
    switch (linkName) {
      case this.page:
        return "linksNav active";
      default:
        return "linksNav";
    }
  }

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

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  ngOnInit(): void { }
}
