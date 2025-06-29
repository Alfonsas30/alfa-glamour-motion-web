
import { useEffect } from 'react';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export const FacebookPixel = () => {
  useEffect(() => {
    // Facebook Pixel Code
    !(function(f: any, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      if (s && s.parentNode) {
        s.parentNode.insertBefore(t, s);
      }
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    // Initialize Facebook Pixel
    window.fbq('init', 'YOUR_PIXEL_ID'); // Replace with actual pixel ID
    window.fbq('track', 'PageView');

    // Track specific events
    const trackEvent = (eventName: string, parameters?: any) => {
      window.fbq('track', eventName, parameters);
    };

    // Track contact form submissions
    const contactForms = document.querySelectorAll('form');
    contactForms.forEach(form => {
      form.addEventListener('submit', () => {
        trackEvent('Contact');
      });
    });

    // Track button clicks
    const ctaButtons = document.querySelectorAll('[data-track="cta"]');
    ctaButtons.forEach(button => {
      button.addEventListener('click', () => {
        trackEvent('Lead');
      });
    });

  }, []);

  return (
    <>
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1" 
          alt=""
        />
      </noscript>
    </>
  );
};
