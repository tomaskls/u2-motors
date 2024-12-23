import React from "react";  


export  const U2LogoMainLight = () => {
    return (
      <div className="w-32 h-10 relative  lg:mr-4">
        <Image
          src="logo/u2mainlight.png"
          alt="U2 Motors Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    );
  };

  export  const U2LogoMainDark = () => {
    return (
      <div className="w-32 h-10 relative  lg:mr-4">
        <Image
          src="logo/u2maindark.png"
          alt="U2 Motors Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    );
  };