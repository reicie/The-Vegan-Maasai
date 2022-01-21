import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item';
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
    showOnMobile: false,
    showOnTablet: true,
    showOnDesktop: true
  },
  {
    link: "./recipes",
    label: "Recipe",
    icon: "",
    showOnMobile: false,
    showOnTablet: true,
    showOnDesktop: true
  },
  {
    link: "./blog",
    label: "Blog",
    icon: "rss_feed",
    showOnMobile: false,
    showOnTablet: true,
    showOnDesktop: true
  },
  {
  link: "./about",
  label: "About",
  icon: "",
  showOnMobile: false,
  showOnTablet: true,
  showOnDesktop: true
  },
  {
  link: "./contact-us",
  label: "Contact Us",
  icon: "",
  showOnMobile: false,
  showOnTablet: true,
  showOnDesktop: true
  },
  {
  link: "./login",
  label: "Login",
  icon: "login",
  showOnMobile: true,
  showOnTablet: true,
  showOnDesktop: true
  }
];
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

}
