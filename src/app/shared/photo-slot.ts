import { Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-photo-slot',
  template: `
    @if (failed()) {
      <div
        class="flex h-full w-full flex-col items-center justify-center gap-2 bg-stone-200 p-4 text-center text-stone-500"
        role="img"
        [attr.aria-label]="alt()"
      >
        <span class="text-3xl" aria-hidden="true">📦</span>
        <span class="text-sm font-semibold">{{ placeholderText() }}</span>
        <span class="text-xs">{{ src() }}</span>
      </div>
    } @else {
      <img
        class="h-full w-full object-cover"
        [src]="src()"
        [alt]="alt()"
        loading="lazy"
        (error)="failed.set(true)"
      />
    }
  `,
  host: { class: 'block overflow-hidden' },
})
export class PhotoSlot {
  readonly src = input.required<string>();
  readonly alt = input('');
  readonly placeholder = input<string>();

  protected readonly failed = signal(false);
  protected readonly placeholderText = computed(
    () => this.placeholder() ?? 'Photo pending. Cargo unspecified.',
  );
}
