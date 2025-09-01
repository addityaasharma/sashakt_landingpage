// facebookPixel.js

// Track PageView
export const pageView = () => {
  if (window.fbq) {
    window.fbq("track", "PageView");
  }
};

// Track Purchase
export const purchase = (value, currency = "USD") => {
  if (window.fbq) {
    window.fbq("track", "Purchase", {
      value: value,
      currency: currency,
    });
  }
};
