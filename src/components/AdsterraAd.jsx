import { useEffect, useState } from "react";

const AdsterraAd = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//pl27915875.effectivegatecpm.com/a3/c9/44/a3c94460043413cf6832bac4b7f37fb7.js";
        script.async = true;

        script.onload = () => setLoaded(true);

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            id="adsterra-ad"
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
                <span className="text-gray-400 text-sm">Loading ad…</span>
            )}
        </div>
    );
};

export default AdsterraAd;
