import { Component, OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { scrollAnimation } from '../shared/animations';
import { ScrollAnimationComponent } from '../shared/scroll-animation.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [scrollAnimation]
})
export class PortfolioComponent extends ScrollAnimationComponent implements OnInit {

  constructor(_el:ElementRef, cdRef: ChangeDetectorRef ,private http: HttpClient){
    super(_el,cdRef);
  }

  projectList:any = [];

  ngOnInit() {
   this.http.get("./assets/json/projetos.json").subscribe((portfolio) => {
     this.projectList = portfolio;
   });
  }
}