import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { Tracker } from './sections/tracker';
import { PhotoSlot } from './shared/photo-slot';
import { SITE } from './site.config';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });

  it('should render the brand in the hero', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(SITE.brand);
  });

  it('should render a card for each boy', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('#boys article').length).toBe(SITE.boys.length);
  });
});

describe('Tracker', () => {
  it('shows a vague status after tracking', async () => {
    const fixture = TestBed.createComponent(Tracker);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('[role="status"]')).toBeNull();
    el.querySelector('form')!.dispatchEvent(new Event('submit'));
    await fixture.whenStable();
    expect(SITE.trackerStatuses).toContain(el.querySelector('[role="status"]')!.textContent!.trim());
  });
});

describe('PhotoSlot', () => {
  it('falls back to a placeholder when the image fails to load', async () => {
    const fixture = TestBed.createComponent(PhotoSlot);
    fixture.componentRef.setInput('src', 'images/missing.jpg');
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    el.querySelector('img')!.dispatchEvent(new Event('error'));
    await fixture.whenStable();
    expect(el.querySelector('img')).toBeNull();
    expect(el.textContent).toContain('Photo pending');
  });
});
