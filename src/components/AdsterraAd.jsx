import { useEffect, useRef, useState } from "react";

const AdsterraAd = ({ showDebug = false }) => {
    const adRef = useRef(null);
    const [adStatus, setAdStatus] = useState("loading");
    const timeoutRef = useRef(null);

    useEffect(() => {
        const checkAdBlocker = () => {
            const testAd = document.createElement("div");
            testAd.className = "ad advertisement adsbox";
            testAd.style.cssText = "position:absolute;width:1px;height:1px;";
            document.body.appendChild(testAd);

            setTimeout(() => {
                if (testAd.offsetHeight === 0) {
                    setAdStatus("blocked");
                }
                try {
                    document.body.removeChild(testAd);
                } catch {
                    // ignore
                }
            }, 100);
        };

        checkAdBlocker();

        const configScript = document.createElement("script");
        configScript.type = "text/javascript";
        configScript.innerHTML = `
      atOptions = {
        'key' : '24cfcce803380b677dd0e174b93362b2',
        'format' : 'iframe',
        'height' : 50,
        'width' : 320,
        'params' : {}
      };
    `;

        const invokeScript = document.createElement("script");
        invokeScript.type = "text/javascript";
        invokeScript.src =
            "https://www.highperformanceformat.com/24cfcce803380b677dd0e174b93362b2/invoke.js";
        invokeScript.async = true;

        invokeScript.onload = () => {
            setAdStatus("loaded");

            timeoutRef.current = setTimeout(() => {
                if (adRef.current) {
                    const hasContent =
                        adRef.current.querySelector("iframe") ||
                        adRef.current.querySelector("img");

                    if (!hasContent) {
                        setAdStatus("failed");
                    }
                }
            }, 3000);
        };

        invokeScript.onerror = () => {
            setAdStatus("failed");
        };

        if (adRef.current) {
            adRef.current.appendChild(configScript);
            adRef.current.appendChild(invokeScript);
        }

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            if (adRef.current) adRef.current.innerHTML = "";
        };
    }, []);

    const renderPlaceholder = () => {
        if (adStatus === "blocked") {
            return (
                <div
                    style={{
                        padding: "20px",
                        textAlign: "center",
                        backgroundColor: "#fff3cd",
                        borderRadius: "8px",
                        border: "1px solid #ffc107",
                    }}
                >
                    <div style={{ fontSize: "24px", marginBottom: "10px" }}>🛡️</div>
                    <div
                        style={{
                            color: "#856404",
                            fontSize: "14px",
                            marginBottom: "8px",
                            fontWeight: "600",
                        }}
                    >
                        Ad Blocker Detected
                    </div>
                    <div style={{ color: "#856404", fontSize: "12px" }}>
                        Please disable your ad blocker to support us
                    </div>
                </div>
            );
        }

        if (adStatus === "failed") {
            return (
                <div
                    style={{
                        padding: "20px",
                        textAlign: "center",
                        backgroundColor: "#f8f9fa",
                        borderRadius: "8px",
                        border: "1px solid #dee2e6",
                    }}
                >
                    <div style={{ fontSize: "24px", marginBottom: "10px" }}>📢</div>
                    <div
                        style={{
                            color: "#6c757d",
                            fontSize: "14px",
                            marginBottom: "8px",
                            fontWeight: "600",
                        }}
                    >
                        Advertisement
                    </div>
                    <div style={{ color: "#6c757d", fontSize: "12px" }}>
                        No ads available
                    </div>
                </div>
            );
        }

        return (
            <div style={{ padding: "20px", textAlign: "center" }}>
                <div
                    style={{
                        width: "40px",
                        height: "40px",
                        border: "3px solid #f3f3f3",
                        borderTop: "3px solid #3498db",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite",
                        margin: "0 auto 10px",
                    }}
                />
                <div style={{ color: "#999", fontSize: "14px" }}>Loading...</div>
                <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
            </div>
        );
    };

    return (
        <div
            style={{
                width: "100%",
                maxWidth: "320px",
                minHeight: "50px",
                margin: "20px auto",
                borderRadius: "10px",
                overflow: "hidden",
                backgroundColor: "#f3f3f3",
                position: "relative",
            }}
        >
            <div
                ref={adRef}
                style={{
                    width: "100%",
                    minHeight: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {adStatus !== "loaded" && renderPlaceholder()}
            </div>

            {showDebug && (
                <div
                    style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        fontSize: "10px",
                        fontWeight: "bold",
                        backgroundColor:
                            adStatus === "loaded"
                                ? "#4CAF50"
                                : adStatus === "blocked"
                                    ? "#ff9800"
                                    : adStatus === "failed"
                                        ? "#f44336"
                                        : "#2196F3",
                        color: "white",
                        zIndex: 1000,
                    }}
                >
                    {adStatus}
                </div>
            )}
        </div>
    );
};

export default AdsterraAd;