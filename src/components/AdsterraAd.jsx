import { useEffect } from "react";

const AdsterraAd = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//pl27915875.effectivegatecpm.com/a3/c9/44/a3c94460043413cf6832bac4b7f37fb7.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="adsterra-ad" style={{ width: "300px", height: "250px" }}>
        </div>
    );
};

export default AdsterraAd;
