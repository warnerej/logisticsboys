import { Component } from '@angular/core';
import { SITE } from '../site.config';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'app-testimonials',
  imports: [Reveal],
  template: `
    <section id="testimonials" class="bg-stone-100 py-20">
      <div class="mx-auto max-w-6xl px-6">
        <h2 class="text-center text-3xl font-extrabold text-navy md:text-4xl">
          Trusted by Industry Leaders
        </h2>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          @for (t of site.testimonials; track t.author) {
            <blockquote appReveal class="rounded-lg bg-white p-6 shadow">
              <p class="text-stone-700">“{{ t.quote }}”</p>
              <footer class="mt-4 text-sm font-bold text-orange-dark">— {{ t.author }}</footer>
            </blockquote>
          }
        </div>
      </div>
    </section>
  `,
})
export class Testimonials {
  protected readonly site = SITE;
}
