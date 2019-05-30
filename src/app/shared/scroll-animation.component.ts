import { HostListener, ElementRef, Injectable, Input } from '@angular/core';

@Injectable()
export class ScrollAnimationComponent {

    constructor(private _el: ElementRef) { }

    @Input()
    state = 'hide';

    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const componentPosition = this._el.nativeElement.offsetTop;
        const scrollPosition = window.pageYOffset + ((window.innerHeight * 3) / 4);

        if (scrollPosition >= componentPosition) {
            this.state = 'show';
        } else {
            this.state = 'hide';
        }
    }
}