import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { scrollAnimation } from '../shared/animations';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [scrollAnimation]
})
export class PortfolioComponent implements OnInit {

  constructor(public el: ElementRef) { }

  title: string = "MangasTech";
  paragraph: string = "Projeto para organizar mangas e ler seus mangas preferidos";

  list = [
    { tool: "Spring Boot" },
    { tool: "AngularJS" },
    { tool: "MySql" },
    { tool: "BootStrap" },
  ];

  public state: string = 'hide';

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset + ((window.innerHeight * 3) / 4);

    if (scrollPosition >= componentPosition) {
      this.state = 'show'
    } else {
      this.state = 'hide'
    }
  }
}