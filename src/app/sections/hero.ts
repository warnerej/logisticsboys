import { Component } from '@angular/core';
import { SITE } from '../site.config';
import { PhotoSlot } from '../shared/photo-slot';

@Component({
  selector: 'app-hero',
  imports: [PhotoSlot],
  template: `
    <section id="top" class="bg-navy text-white">
      <div class="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p class="mb-4 text-sm font-semibold uppercase tracking-widest text-orange">
            Global-ish Logistics Solutions
          </p>
          <h1 class="text-5xl font-extrabold leading-tight md:text-6xl">
            {{ site.brand }}.<br />
            <span class="text-orange">{{ site.tagline }}</span>
          </h1>
          <p class="mt-6 max-w-md text-lg text-stone-300">{{ site.subtitle }}</p>
          <a
            href="#contact"
            class="mt-8 inline-block rounded bg-orange px-6 py-3 font-bold text-navy transition hover:bg-orange/85"
          >
            Request a Quote (Of Some Kind)
          </a>
        </div>
        <app-photo-slot
          class="aspect-4/3 rounded-lg border-4 border-orange shadow-2xl"
          [src]="site.heroPhoto"
          alt="The Logistics Boys, mid-logistics"
          placeholder="Hero photo pending. Boys unspecified."
        />
      </div>
    </section>
  `,
})
export class Hero {
  protected readonly site = SITE;
}
