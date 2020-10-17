import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';
import { viewClassName } from '@angular/compiler';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.less']
})
export class Section1Component implements OnInit {
  @ViewChild ('sectionTwo', { static: true }) sectionTwo: ElementRef<HTMLDivElement>;
  
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.sectionTwoScrollAnimation();
  }

  sectionTwoScrollAnimation(): void{
    gsap.from(this.sectionTwo.nativeElement.childNodes, {
      scrollTrigger: {
        trigger: this.sectionTwo.nativeElement,
        scrub: true,
        start: '-150% top',
        end:'-10% top'
      },
      x: -20,
      duration: 0.2,
      opacity: 0,
      stagger: 0.15,
      delay: 0.2,
    });

    gsap.to(this.sectionTwo.nativeElement.childNodes, {
      scrollTrigger: {
        trigger: this.sectionTwo.nativeElement,
        scrub: true,
        start: 'top',
      },
      x: -15,
      duration: 0.2,
      opacity: 0,
      stagger: 0.15,
      delay: 0.2,
    });
  }
}
