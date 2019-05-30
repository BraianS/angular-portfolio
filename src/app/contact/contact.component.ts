import { Component, OnInit} from '@angular/core';
import { scrollAnimation } from '../shared/animations';
import { ScrollAnimationComponent } from '../shared/scroll-animation.component';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    scrollAnimation
  ]
})
export class ContactComponent extends ScrollAnimationComponent implements OnInit { 

  ngOnInit() {
  }

}