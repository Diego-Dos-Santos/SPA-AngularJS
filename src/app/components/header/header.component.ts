import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { gsap } from 'gsap';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @ViewChild('logo', {static: true}) logo: ElementRef<HTMLDivElement>;

    constructor( @Inject(DOCUMENT) private document: Document) {}
      
    ngOnInit(){
      this.initScrollAnimations();
      this.initialAnimations();
    }

  initScrollAnimations(): void {

  }

  initialAnimations(): void {
    gsap.from(this.logo.nativeElement.childNodes, {
      duration: 0.8,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 0.5,
    });
  }
}
