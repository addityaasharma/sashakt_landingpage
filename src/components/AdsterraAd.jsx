import { useEffect, useRef, useState } from "react";

const AdsterraAd = ({ scriptSrc, showDebug = false }) => {
    const adRef = useRef(null);
    const [adStatus, setAdStatus] = useState("loading");
    const timeoutRef = useRef(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = scriptSrc;
        script.async = true;
        script.type = "text/javascript";

        script.onload = () => setAdStatus("loaded");
        script.onerror = () => setAdStatus("failed");

        if (adRef.current) adRef.current.appendChild(script);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            if (adRef.current) adRef.current.innerHTML = "";
        };
    }, [scriptSrc]);

    return (
        <div
            ref={adRef}
            style={{
                width: "100%",
                maxWidth: "320px",
                minHeight: "50px",
                margin: "20px auto",
                backgroundColor: "#f3f3f3",
            }}
        >
            {adStatus !== "loaded" && <p style={{ textAlign: "center" }}>Loading Ad...</p>}
        </div>
    );
};

export default AdsterraAd;
