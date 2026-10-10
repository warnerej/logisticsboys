import { Component, signal } from '@angular/core';
import { SITE } from '../site.config';

@Component({
  selector: 'app-tracker',
  template: `
    <section id="tracker" class="bg-navy py-20 text-white">
      <div class="mx-auto max-w-xl px-6 text-center">
        <h2 class="text-3xl font-extrabold md:text-4xl">Track Your Shipment</h2>
        <p class="mt-3 text-slate-300">Enter any number. We will do our best.</p>
        <form class="mt-8 flex gap-2" (submit)="track($event)">
          <input
                       type="text"
            aria-label="Tracking number"
            placeholder="Tracking number (any)"
            class="min-w-0 flex-1 rounded px-4 py-3 text-navy"
          />
          <button
            type="submit"
            class="rounded bg-orange px-6 py-3 font-bold text-navy transition hover:bg-orange-300"
          >
            Track
          </button>
        </form>
        @if (status(); as s) {
          <p class="mt-6 rounded border border-orange p-4 text-lg font-semibold" role="status">
            {{ s }}
          </p>
        }
      </div>
    </section>
  `,
})
export class Tracker {
  protected readonly status = signal<string | null>(null);

  protected track(event: Event) {
    event.preventDefault();
    const options = SITE.trackerStatuses;
    this.status.set(options[Math.floor(Math.random() * options.length)]);
  }
}
