import React from "react";
import Image from "next/image";
// Using Evangelio-del-Reino.png from public folder directly

const WavyBackground = () => {
  return (
    <div className="relative w-full">
      {/* You can add your content here */}
      <div className="relative z-10 mx-auto flex items-center justify-center py-4 md:py-6">
        <Image 
          className="w-2/3" 
          src="/Evangelio-del-Reino.png" 
          alt="Evangelio del Reino Logo" 
          width={400}
          height={200}
          unoptimized 
        />
      </div>
    </div>
  );
};

export default WavyBackground;
