import { Component, OnInit } from '@angular/core';
import { scrollAnimation } from '../shared/animations';
import { ScrollAnimationComponent } from '../shared/scroll-animation.component';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [scrollAnimation]
})
export class PortfolioComponent extends ScrollAnimationComponent implements OnInit {

  title: string = "MangasTech";
  paragraph: string = "Projeto para organizar mangas e ler seus mangas preferidos";

  list = [
    { tool: "Spring Boot" },
    { tool: "AngularJS" },
    { tool: "MySql" },
    { tool: "BootStrap" },
  ];

  ngOnInit() {
  }
}