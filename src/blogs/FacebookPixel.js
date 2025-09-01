// src/utils/FacebookPixel.js
export const pageView = () => {
    if (window.fbq) {
        window.fbq("track", "PageView");
    }
};
