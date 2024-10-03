import React from "react";
import Image from "next/image";

const CardComponent = ({ title, description, image }) => {
  return (
    <div
      className="  max-w-[382px] px-6 py-8 flex flex-col items-center justify-center shadow-xl   rounded-2xl border-grayscale1 border-2  
      max-sm:max-w-[300px]  max-md:max-w[340px] max-lg:p-4"
    >
      <div className="rounded-full p-26  bg-yellow flex items-center justify-center shadow-md">
        <Image
          src={image}
          alt="Estimation Image"
          className="max-xs:w-[30px] max-xs:h-[30px] max-sm:w-[30px] max-sm:h-[30px] max-md:h-[30px] max-md:w-[30px] max-lg:h-[30px] max-lg:w-[30px] max-xl:h-[30px] max-xl:w-[30px] max-2xl:w-[40px] max-2xl:h-[40px]"
        />
      </div>
      <h5 className="font-Archivo font-medium text-28 mb-4 mt-5 max-xs:text-2xl max-sm:text-xl max-sm:mt-[18px] max-md:text-xl text-center max-lg:text-xl max-xl:text-xl">
        {title}
      </h5>
      <p className="font-Archivo font-light text-22 max-xs:text-base max-sm:text-lg max-md:text-lg text-center text-grayscale2 max-lg:text-lg max-xl:text-lg">
        {description}
      </p>
    </div>
  );
};

export default CardComponent;
