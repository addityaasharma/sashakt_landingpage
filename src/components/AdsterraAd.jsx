import { useEffect, useState, useRef } from "react";

const AdsterraAd = () => {
    const adRef = useRef(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://pl27915875.effectivegatecpm.com/a3/c9/44/a3c94460043413cf6832bac4b7f37fb7.js";
        script.async = true;

        script.onload = () => setLoaded(true);

        if (adRef.current) {
            adRef.current.appendChild(script);
        }

        return () => {
            if (adRef.current) {
                adRef.current.innerHTML = "";
            }
        };
    }, []);

    return (
        <div
            ref={adRef}
            style={{
                width: "100%",
                maxWidth: "300px",
                height: "250px",
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#f5f5f5",
                borderRadius: "8px",
                overflow: "hidden",
            }}
        >
            {!loaded && (
                <span style={{ color: "#999", fontSize: "14px" }}>Loading ad…</span>
            )}
        </div>
    );
};

export default AdsterraAd;