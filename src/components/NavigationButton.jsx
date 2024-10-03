import React from "react";

const NavigationButton = ({ handlePrev, handleNext }) => {
  return (
    <div className="flex flex-row gap-4 mt-16  mb-10 justify-center max-sm:mt-0  max-sm:justify-end max-sm:gap-2 max-sm:px-5 max-sm:mb-4 max-xl:items-end max-xl:mb-5 max-xl:px-5">
      <svg
        className="w-20 h-20 cursor-pointer max-xs:h-8 max-xs:w-8 max-sm:w-9 max-sm:h-9 max-md:w-11 max-md:h-11 max-lg:h-12 max-lg:w-12 max-xl:w-14 max-xl:h-14"
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handlePrev}
      >
        <rect
          x="0.8"
          y="0.8"
          width="74.4"
          height="74.4"
          rx="37.2"
          stroke="#B1B1B6"
          strokeWidth="1.6"
        />
        <path
          d="M44.2 26L31 38L44.2 50"
          stroke="#B1B1B6"
          strokeWidth="2.70732"
          strokeLinecap="round"
        />
      </svg>

      <svg
        className="w-20 h-20 cursor-pointer max-xs:h-8 max-xs:w-8 max-sm:w-9 max-sm:h-9 max-md:w-11 max-md:h-11 max-lg:h-12 max-lg:w-12 max-xl:w-14 max-xl:h-14"
        viewBox="0 0 76 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleNext}
      >
        <rect
          width="76"
          height="76"
          rx="38"
          transform="matrix(-1 0 0 1 76 0)"
          fill="black"
        />
        <path
          d="M31.8 26L45 38L31.8 50"
          stroke="white"
          strokeWidth="2.70732"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default NavigationButton;
