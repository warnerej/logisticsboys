import { afterNextRender, Component } from '@angular/core';
import { SITE } from './site.config';
import { Hero } from './sections/hero';
import { MeetTheBoys } from './sections/meet-the-boys';
import { Services } from './sections/services';
import { Gallery } from './sections/gallery';
import { Tracker } from './sections/tracker';
import { Testimonials } from './sections/testimonials';
import { Faq } from './sections/faq';
import { Contact } from './sections/contact';

@Component({
  imports: [Hero, MeetTheBoys, Services, Gallery, Tracker, Testimonials, Faq, Contact],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  constructor() {
    // Don't let scroll restoration or post-hydration layout shifts leave the page scrolled down.
    afterNextRender(() => {
      if (location.hash) return;
      history.scrollRestoration = 'manual';
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }

  protected readonly site = SITE;
  protected readonly links = [
    { href: '#boys', label: 'The Boys' },
    { href: '#services', label: 'Solutions' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#tracker', label: 'Track' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];
}
