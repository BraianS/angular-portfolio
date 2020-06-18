import { ElementRef, Injectable, AfterViewInit, OnDestroy, Output, ChangeDetectorRef, Directive } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Directive()
@Injectable()
export class ScrollAnimationComponent implements AfterViewInit, OnDestroy {

    constructor(private _el: ElementRef,
                public cdRef: ChangeDetectorRef) { }

    @Output()
    state: string;

    componentPosition: number;
    scrollPosition: number;

    subscribeScroll: Subscription;

    onScroll() {
        this.componentPosition = this._el.nativeElement.offsetTop;
        this.scrollPosition = window.pageYOffset + ((window.innerHeight * 3) / 4);
        this.checkState();
    }

    checkState() {
        if (this.state = 'hide') {
            if (this.scrollPosition >= this.componentPosition) {
                this.state = 'show';
                this.unsubscribe();
            }
        }
    }

    subscribe() {
        this.subscribeScroll = fromEvent(window, 'scroll')
            .subscribe(() => this.onScroll());
    }

    unsubscribe() {
        if (this.subscribeScroll) {
            this.subscribeScroll.unsubscribe();
        }
    }

    ngAfterViewInit() {       
        this.state = 'hide';
        this.cdRef.detectChanges();
        this.subscribe();
    }

    ngOnDestroy() {
        this.unsubscribe();
    }
}