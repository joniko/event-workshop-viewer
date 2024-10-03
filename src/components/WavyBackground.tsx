import React from "react";
import Image from "next/image";
import logoImage from "@/images/logo-PEC.png";

const WavyBackground = () => {
  return (
    <div className="relative w-full">
      {/* You can add your content here */}
      <div className="relative z-10 mx-auto flex items-center justify-center py-2 md:py-6">
        <Image className="w-2/3" src={logoImage} alt="" unoptimized />
      </div>
    </div>
  );
};

export default WavyBackground;
