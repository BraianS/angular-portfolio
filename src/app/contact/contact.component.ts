import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { scrollAnimation } from '../shared/animations';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    scrollAnimation
  ]
})
export class ContactComponent implements OnInit {

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

  state = 'hide';

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