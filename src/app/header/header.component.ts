import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isNavOpen: boolean;

  constructor() { }

  scroll(id) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    this.isNavOpen = false;
  }

  ngOnInit() {
    this.isNavOpen = false;
  }

  navOpened() {
    console.log("clicado");
    this.isNavOpen = !this.isNavOpen;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 300) {
      let element = document.getElementsByClassName('nav')[0];
      element.classList.add('nav--sticky');
    } else {
      let element = document.getElementsByClassName('nav')[0];
      element.classList.remove('nav--sticky');
    }
  }
}