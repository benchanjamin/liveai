/// <reference types="astro/client" />

import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'behold-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'feed-id'?: string;
      };
    }
  }
}