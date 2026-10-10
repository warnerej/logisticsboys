import { Component } from '@angular/core';
import { SITE } from '../site.config';

@Component({
  selector: 'app-faq',
  template: `
    <section id="faq" class="bg-white py-20">
      <div class="mx-auto max-w-3xl px-6">
        <h2 class="text-center text-3xl font-extrabold text-navy md:text-4xl">
          Frequently Asked Questions
        </h2>
        <div class="mt-10 space-y-3">
          @for (f of site.faqs; track f.question) {
            <details class="group rounded-lg border border-stone-200 p-4">
              <summary class="cursor-pointer font-bold text-navy">{{ f.question }}</summary>
              <p class="mt-3 text-stone-600">{{ f.answer }}</p>
            </details>
          }
        </div>
      </div>
    </section>
  `,
})
export class Faq {
  protected readonly site = SITE;
}
