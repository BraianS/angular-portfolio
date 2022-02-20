import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
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

  constructor(_el:ElementRef, cdRef:ChangeDetectorRef, private http:HttpClient){
    super(_el, cdRef);
  }

  skills:any = [];

  ngOnInit() {
    this.http.get("./assets/json/skills.json").subscribe(skills => {
      this.skills = skills;
    });
  }
}
