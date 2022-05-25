import { Component, OnInit } from '@angular/core'

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
  constructor() {}

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

  ngOnInit(): void {}
}
