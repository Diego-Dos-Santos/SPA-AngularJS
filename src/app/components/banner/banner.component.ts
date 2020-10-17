import { Component, OnInit, ViewChild, ElementRef, Inject} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less']
})
export class BannerComponent implements OnInit {
  
  @ViewChild('imageBanner', { static: true }) imageBanner: ElementRef<HTMLDivElement>;
  @ViewChild('imageTitle', { static: true }) imageTitle: ElementRef<HTMLDivElement>;
  @ViewChild('sectionOne', { static: true }) sectionOne: ElementRef<HTMLDivElement>;

  constructor( @Inject(DOCUMENT) private document: Document) { 
  }

  ngOnInit(): void {
    this.disableScroll(true);

    this.initAnimations();
    this.sectioOneScrollAnimation();
  }

  disableScroll( disabled: boolean ): void {
    if (disabled) {
      this.document.querySelector('body').style.overflowY = "hidden";
    } else {
      this.document.querySelector('body').style.overflowY = "auto";
    }
  }

  initAnimations(): void {
    gsap.from(this.imageBanner.nativeElement.childNodes, {
      duration: 0.8,
      opacity: 0,
      x: 50,
      stagger: 0.15,
      delay: 0.8,

    });

    gsap.from(this.imageTitle.nativeElement.childNodes, {
      duration: 0.8,
      opacity: 0,
      y: 90,
      stagger: 0.15,
      delay: 1.5,
      onComplete: () => this.disableScroll(false)
    });
  }

  sectioOneScrollAnimation(): void{
    gsap.to(this.sectionOne.nativeElement.childNodes, {
      scrollTrigger: {
        trigger: this.sectionOne.nativeElement,
        scrub: true,
        start: '-150px top'
      },
      duration: 0.5,
      opacity: 0,
      stagger: 0.15,
      delay: 0.5,
    })
  }
}
