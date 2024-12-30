import React from "react";

function LogoScroll() {
  const logos = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  ];

  return (
    <div className="logo-scroll-container">
    <p className="text-center text-md m-4 text-black md:text-white"> Supported and Partnered with </p>
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
