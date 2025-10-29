import { useEffect, useRef } from "react";

const AdsterraAd = () => {
    const adRef = useRef(null);

    useEffect(() => {
        if (adRef.current) {
            adRef.current.innerHTML = "";
        }

        const script = document.createElement("script");
        script.src = "https://pl27915875.effectivegatecpm.com/a3/c9/44/a3c94460043413cf6832bac4b7f37fb7.js";
        script.async = true;

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
                margin: "20px auto",
                borderRadius: "10px",
                overflow: "hidden",
                backgroundColor: "#f3f3f3",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <span style={{ color: "#999", fontSize: "14px" }}>Loading Ad…</span>
        </div>
    );
};

export default AdsterraAd;
