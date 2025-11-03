import { useEffect, useRef, useState } from "react";

const AdsterraAd = ({ showDebug = false }) => {
    const adRef = useRef(null);
    const [adStatus, setAdStatus] = useState("loading");
    const timeoutRef = useRef(null);

    useEffect(() => {
        // Create the Adsterra config script (defines atOptions)
        const configScript = document.createElement("script");
        configScript.type = "text/javascript";
        configScript.innerHTML = `
            atOptions = {
                'key' : 'dd189736b24fabf395986a1f8fd82230',
                'format' : 'iframe',
                'height' : 250,
                'width' : 300,
                'params' : {}
            };
        `;

        // Create the invoke script (loads ad)
        const invokeScript = document.createElement("script");
        invokeScript.type = "text/javascript";
        invokeScript.src = "//www.highperformanceformat.com/dd189736b24fabf395986a1f8fd82230/invoke.js";
        invokeScript.async = true;

        invokeScript.onload = () => setAdStatus("loaded");
        invokeScript.onerror = () => setAdStatus("failed");

        // Append scripts to the ad container
        if (adRef.current) {
            adRef.current.appendChild(configScript);
            adRef.current.appendChild(invokeScript);
        }

        // Cleanup when component unmounts
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            if (adRef.current) adRef.current.innerHTML = "";
        };
    }, []);

    return (
        <div
            ref={adRef}
            style={{
                width: "100%",
                maxWidth: "300px",
                minHeight: "250px",
                margin: "20px auto",
                backgroundColor: "#f3f3f3",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative",
            }}
        >
            {adStatus !== "loaded" && (
                <p style={{ textAlign: "center", color: "#777" }}>Loading Ad...</p>
            )}

            {showDebug && (
                <span
                    style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        fontSize: "10px",
                        backgroundColor:
                            adStatus === "loaded"
                                ? "#4CAF50"
                                : adStatus === "failed"
                                    ? "#F44336"
                                    : "#2196F3",
                        color: "#fff",
                        padding: "2px 6px",
                        borderRadius: "4px",
                    }}
                >
                    {adStatus}
                </span>
            )}
        </div>
    );
};

export default AdsterraAd;
