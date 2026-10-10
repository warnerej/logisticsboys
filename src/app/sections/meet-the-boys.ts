import { Component } from '@angular/core';
import { SITE } from '../site.config';
import { PhotoSlot } from '../shared/photo-slot';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'app-meet-the-boys',
  imports: [PhotoSlot, Reveal],
  template: `
    <section id="boys" class="bg-white py-20">
      <div class="mx-auto max-w-6xl px-6">
        <h2 class="text-center text-3xl font-extrabold text-navy md:text-4xl">Meet the Boys</h2>
        <p class="mx-auto mt-3 max-w-xl text-center text-slate-600">
          Two professionals. Zero explanations.
        </p>
        <div class="mt-12 grid gap-8 md:grid-cols-2">
          @for (boy of site.boys; track boy.name) {
            <article appReveal class="overflow-hidden rounded-lg border border-slate-200 shadow-md">
              <app-photo-slot class="aspect-square" [src]="boy.photo" [alt]="boy.name" />
              <div class="p-6">
                <h3 class="text-2xl font-bold text-navy">{{ boy.name }}</h3>
                <p class="mt-1 font-semibold text-orange-600">{{ boy.title }}</p>
                <p class="mt-3 text-slate-600">{{ boy.bio }}</p>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class MeetTheBoys {
  protected readonly site = SITE;
}
