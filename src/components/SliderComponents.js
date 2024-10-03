import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import phone from "../assets/images/phone.png";

function SliderComponents() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <>
      <Slider ref={sliderRef} {...settings} className=" px-4 sm:px-6 md:px-8">
        <div>
          <div className="h-[320px] w-full max-w-[300px] sm:max-w-[340px] md:max-w-[360px] lg:max-w-[382px] rounded-2xl border-grayscale1 border-2 flex flex-col items-center justify-center shadow-xl mx-auto">
            <div className="rounded-full h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] bg-yellow flex items-center justify-center shadow-md">
              <Image
                src={phone}
                alt="Estimation Image"
                className="rounded-full"
              />
            </div>
            <h5 className="font-Archivo font-medium text-xl sm:text-2xl md:text-3xl mt-[18px] mb-2">
              Mobile Apps
            </h5>
            <p className="font-Archivo font-light text-sm sm:text-lg md:text-xl text-center text-grayscale2">
              Lorem ipsum dolor sit amet consectetur. Diam risus nulla volutpat
              pretium a pellentesque nunc convallis ullamcorper.
            </p>
          </div>
        </div>
      </Slider>

      <div className="flex justify-between mt-6">
        <button onClick={handlePrev} className="p-2 bg-gray-200 rounded-md">
          Previous
        </button>
        <button onClick={handleNext} className="p-2 bg-gray-200 rounded-md">
          Next
        </button>
      </div>
    </>
  );
}

export default SliderComponents;
