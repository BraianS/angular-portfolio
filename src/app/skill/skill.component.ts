import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { scrollAnimation } from '../shared/animations';

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  animations: [
    scrollAnimation
  ]
})
export class SkillComponent implements OnInit {

  constructor(public el:ElementRef) { }

  ngOnInit() {
  }

  state = 'hide';

  @HostListener('window:scroll',['$event'])
  checkScroll(){
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset + ((window.innerHeight *3) /4 );

    if(scrollPosition >= componentPosition){
      this.state = 'show';
    } else {
      this.state = 'hide';
    }

  }

}
