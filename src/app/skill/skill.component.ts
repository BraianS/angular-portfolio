import { Component, OnInit } from '@angular/core';
import { scrollAnimation } from '../shared/animations';
import { ScrollAnimationComponent } from '../shared/scroll-animation.component';

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  animations: [
    scrollAnimation
  ]
})
export class SkillComponent extends ScrollAnimationComponent implements OnInit {

  ngOnInit() {
  }
}
