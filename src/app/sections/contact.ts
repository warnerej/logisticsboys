import { Component, signal } from '@angular/core';
import { SITE } from '../site.config';

@Component({
  selector: 'app-contact',
  template: `
    <section id="contact" class="bg-stone-100 py-20">
      <div class="mx-auto max-w-xl px-6">
        <h2 class="text-center text-3xl font-extrabold text-navy md:text-4xl">Contact Us</h2>
        <p class="mt-3 text-center text-stone-600">{{ site.contactBlurb }}</p>
        @if (sent()) {
          <p class="mt-8 rounded border border-orange bg-white p-4 text-center font-semibold" role="status">
            {{ site.contactConfirmation }}
          </p>
        } @else {
          <form class="mt-8 space-y-4" (submit)="submit($event)">
            <input
              type="text"
              aria-label="Name"
              placeholder="Name (optional)"
              class="w-full rounded border border-stone-300 px-4 py-3"
            />
            <input
              type="email"
              aria-label="Email"
              placeholder="Email (or similar)"
              class="w-full rounded border border-stone-300 px-4 py-3"
            />
            <textarea
              aria-label="Message"
              rows="4"
              placeholder="What needs moving? (Be vague.)"
              class="w-full rounded border border-stone-300 px-4 py-3"
            ></textarea>
            <button
              type="submit"
              class="w-full rounded bg-navy px-6 py-3 font-bold text-white transition hover:bg-navy-light"
            >
              Send
            </button>
          </form>
        }
      </div>
    </section>
  `,
})
export class Contact {
  protected readonly site = SITE;
  protected readonly sent = signal(false);

  protected submit(event: Event) {
    event.preventDefault();
    this.sent.set(true);
  }
}
