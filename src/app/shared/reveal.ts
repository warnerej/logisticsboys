import { afterNextRender, Directive, ElementRef, inject } from '@angular/core';

/** Fades an element in when it scrolls into view. No-op during SSR. */
@Directive({ selector: '[appReveal]' })
export class Reveal {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  constructor() {
    afterNextRender(() => {
      if (typeof IntersectionObserver === 'undefined') return;
      this.el.classList.add('reveal');
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            this.el.classList.add('reveal-in');
            observer.disconnect();
          }
        },
        { threshold: 0.15 },
      );
      observer.observe(this.el);
    });
  }
}
