import { Component } from '@angular/core';
import { SITE } from '../site.config';
import { PhotoSlot } from '../shared/photo-slot';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'app-gallery',
  imports: [PhotoSlot, Reveal],
  template: `
    <section id="gallery" class="bg-white py-20">
      <div class="mx-auto max-w-6xl px-6">
        <h2 class="text-center text-3xl font-extrabold text-navy md:text-4xl">Operations Gallery</h2>
        <div class="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          @for (item of site.gallery; track item.photo) {
            <figure appReveal class="overflow-hidden rounded-lg border border-stone-200 shadow">
              <app-photo-slot class="aspect-4/3" [src]="item.photo" [alt]="item.caption" />
              <figcaption class="p-3 text-center text-sm italic text-stone-600">
                {{ item.caption }}
              </figcaption>
            </figure>
          }
        </div>
      </div>
    </section>
  `,
})
export class Gallery {
  protected readonly site = SITE;
}
