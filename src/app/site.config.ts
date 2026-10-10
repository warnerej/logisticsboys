export interface Boy {
  name: string;
  title: string;
  bio: string;
  photo: string;
}

export interface Service {
  title: string;
  blurb: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface GalleryItem {
  photo: string;
  caption: string;
}

export const SITE = {
  brand: 'Logistics Boys',
  tagline: 'Moving Things. Somewhere.',
  subtitle:
    'A full-spectrum logistical enterprise delivering outcomes, at times, to locations.',
  heroPhoto: 'images/hero.jpg',
  boys: [
    {
      name: 'Boy One',
      title: 'Chief Movement Officer',
      bio: 'Has been involved in several movements. Prefers not to elaborate.',
      photo: 'images/boy-1.jpg',
    },
    {
      name: 'Boy Two',
      title: 'Director of Things In Transit',
      bio: 'Oversees things. Some are in transit. Others are not. He knows which.',
      photo: 'images/boy-2.jpg',
    },
  ] satisfies Boy[],
  services: [
    {
      title: 'Last-Mile Adjacent Solutions',
      blurb: 'We get close. Very close. Sometimes closer than that.',
    },
    {
      title: 'Synergistic Handling',
      blurb: 'Things are handled. Synergy is present throughout.',
    },
    {
      title: 'End-to-End Middle-Mile',
      blurb: 'We specialize in the part of the process that happens.',
    },
    {
      title: 'Strategic Placement',
      blurb: 'A thing goes somewhere. We have a view on where.',
    },
    {
      title: 'Time-Sensitive Timing',
      blurb: 'Timing, but with sensitivity.',
    },
    {
      title: 'Bespoke Quantities',
      blurb: 'Not too many. Not too few. A number.',
    },
  ] satisfies Service[],
  stats: [
    { value: 1000, suffix: '+', label: 'items moved (units unspecified)' },
    { value: 99, suffix: '%', label: 'on time (time unspecified)' },
    { value: 24, suffix: '/7', label: 'availability (subject to availability)' },
  ] satisfies Stat[],
  gallery: [
    { photo: 'images/gallery-1.jpg', caption: 'Inspecting a thing.' },
    { photo: 'images/gallery-2.jpg', caption: 'Awaiting a delivery. Or a pickup.' },
    { photo: 'images/gallery-3.jpg', caption: 'Operations, in progress.' },
    { photo: 'images/gallery-4.jpg', caption: 'A meeting regarding logistics.' },
    { photo: 'images/gallery-5.jpg', caption: 'Pre-movement alignment.' },
    { photo: 'images/gallery-6.jpg', caption: 'Post-movement reflection.' },
  ] satisfies GalleryItem[],
  trackerStatuses: [
    'In transit. Probably.',
    'Delayed by factors.',
    'Arrived. Location withheld.',
    'Being handled. Carefully.',
    'Awaiting the next step.',
    'Moving. Direction undisclosed.',
    'Status pending a status.',
    'Out for delivery to somewhere.',
  ],
  testimonials: [
    {
      quote: 'They moved it. I am not sure what, but it was moved.',
      author: 'A Satisfied Party',
    },
    {
      quote: 'Exactly as described. Which is to say, not described.',
      author: 'An Industry Leader',
    },
    {
      quote: 'We have used many logistics providers. None of them were these ones.',
      author: 'Someone, Somewhere',
    },
  ] satisfies Testimonial[],
  faqs: [
    {
      question: 'What do you do?',
      answer: 'Logistics. Next question.',
    },
    {
      question: 'Where do you operate?',
      answer: 'Places. Several of them.',
    },
    {
      question: 'How much does it cost?',
      answer: 'An amount. We will let you know the amount at the appropriate time.',
    },
    {
      question: 'Are you hiring?',
      answer: 'We are open to the concept of a third boy. Applications are not accepted.',
    },
  ] satisfies Faq[],
  contactBlurb: 'Tell us what you need moved. Or do not. We will be in touch, in some form.',
  contactConfirmation: 'Message received. Or something like it. A boy will respond.',
};
