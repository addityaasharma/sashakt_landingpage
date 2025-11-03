import { useEffect } from "react";

const AdsterraSocialBar = () => {
  useEffect(() => {
    const configScript = document.createElement("script");
    configScript.type = "text/javascript";
    configScript.text = `
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
    invokeScript.src = "//www.highperformanceformat.com/24cfcce803380b677dd0e174b93362b2/invoke.js";
    invokeScript.async = true;

    document.body.appendChild(configScript);
    document.body.appendChild(invokeScript);

    return () => {
      try {
        document.body.removeChild(configScript);
        document.body.removeChild(invokeScript);
      } catch {
        // ignore cleanup errors
      }
    };
  }, []);

  return null;
};

export default AdsterraSocialBar;
