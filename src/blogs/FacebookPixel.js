export const pageView = () => {
    if (window.fbq) {
        window.fbq("track", "PageView");
    }
};
