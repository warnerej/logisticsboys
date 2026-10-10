import {
  afterNextRender,
  Component,
  ElementRef,
  signal,
  viewChild,
} from '@angular/core';
import { SITE } from '../site.config';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'app-services',
  imports: [Reveal],
  template: `
    <section id="services" class="bg-stone-100 py-20">
      <div class="mx-auto max-w-6xl px-6">
        <h2 class="text-center text-3xl font-extrabold text-navy md:text-4xl">Our Solutions</h2>
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          @for (s of site.services; track s.title) {
            <div appReveal class="rounded-lg border-t-4 border-orange bg-white p-6 shadow">
              <h3 class="text-lg font-bold text-navy">{{ s.title }}</h3>
              <p class="mt-2 text-stone-600">{{ s.blurb }}</p>
            </div>
          }
        </div>

        <div #stats class="mt-16 grid gap-8 rounded-lg bg-navy p-10 text-center text-white md:grid-cols-3">
          @for (stat of site.stats; track stat.label; let i = $index) {
            <div>
              <div class="text-5xl font-extrabold text-orange">
                {{ counts()[i] }}{{ stat.suffix }}
              </div>
              <div class="mt-2 text-sm text-stone-300">{{ stat.label }}</div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class Services {
  protected readonly site = SITE;
  private readonly statsEl = viewChild.required<ElementRef<HTMLElement>>('stats');

  // SSR renders the final numbers; the client resets to 0 and counts up on scroll.
  protected readonly counts = signal(SITE.stats.map((s) => s.value));

  constructor() {
    afterNextRender(() => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced || typeof IntersectionObserver === 'undefined') return;

      this.counts.set(SITE.stats.map(() => 0));
      const observer = new IntersectionObserver((entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        this.animate();
      });
      observer.observe(this.statsEl().nativeElement);
    });
  }

  private animate() {
    const duration = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      this.counts.set(SITE.stats.map((s) => Math.round(s.value * eased)));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
}
