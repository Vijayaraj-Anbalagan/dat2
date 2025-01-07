import React from "react";

function LogoScroll() {
  
  const logos = [
    "/logo/DPIIT.png",
    "/logo/HAPS.png",
    "/logo/MSME.png",
    "/logo/SI.png",
    "/logo/TAA.png",
    "/logo/TS.png",
    "/logo/kcg.png",

  ]

  return (
    <div className="logo-scroll-container mt-96">
    <p className="text-center text-md mt-4 text-white"> Supported and Partnered with </p>
      <div className="logo-scroll">
        <div className="logo-track">
          {logos.map((logo, index) => (
            <div className="logo-item" key={`logo-${index}`}>
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div className="logo-item" key={`logo-duplicate-${index}`}>
              <img src={logo} alt={`Logo Duplicate ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoScroll;

/* Ensure the accompanying CSS file is added as follows */
