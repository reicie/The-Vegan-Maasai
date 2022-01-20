import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.scss']
})
export class ResponsiveToolbarComponent implements OnInit {
  activeLinkIndex = -1
  menuItems: MenuItem[] = [
    {
    link: "./home",
    label: "Home",
    icon: "home",
    showOnMobile: true,
    showOnTablet: true,
    showOnDesktop: true,
    index: 0
  },
  {
    link: "./recipes",
    label: "Recipe",
    icon: "",
    showOnMobile: true,
    showOnTablet: true,
    showOnDesktop: true,
    index: 1
  },
  {
    link: "./blog",
    label: "Blog",
    icon: "rss_feed",
    showOnMobile: true,
    showOnTablet: true,
    showOnDesktop: true,
    index: 2
  },
  {
  link: "./about",
  label: "About",
  icon: "",
  showOnMobile: false,
  showOnTablet: true,
  showOnDesktop: true,
  index: 3
  },
  {
  link: "./contact-us",
  label: "Contact Us",
  icon: "",
  showOnMobile: false,
  showOnTablet: true,
  showOnDesktop: true,
  index: 4
  },
  {
  link: "./login",
  label: "Login",
  icon: "login",
  showOnMobile: true,
  showOnTablet: true,
  showOnDesktop: true,
  index: 5
  }
];
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

}
