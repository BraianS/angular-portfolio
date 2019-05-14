import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  title: string = "Olá, meu nome é Braian ";
  paragraph: string = "Sou formado em Tecnologia em Análise e Desenvolvimento de Sistemas pela "+
   "faculdade Anhanguera de Sorocaba, meu objetivo é me tornar desenvolvedor full-stack.";

  ngOnInit() {}

}
