import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';
import { viewClassName } from '@angular/compiler';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.less']
})
export class Section2Component implements OnInit {

  @ViewChild ('sectionThree', { static: true}) sectionThree: ElementRef<HTMLDivElement>;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.sectionThreeScrollAnimation();
  }

  sectionThreeScrollAnimation(): void{
    gsap.from(this.sectionThree.nativeElement.childNodes, {
      scrollTrigger: {
        trigger: this.sectionThree.nativeElement,
        scrub: true,
        start: '-170% top',
        end: '-20% top',
      },
      y: -90,
      duration: 0.2,
      opacity: 0,
      stagger: 0.15,
      delay: 0.2,
    });
  }
}
