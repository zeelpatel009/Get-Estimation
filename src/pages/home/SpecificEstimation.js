import React, { useRef } from "react";
import Slider from "react-slick";
import NavigationButtons from "../../components/NavigationButton";
import CardComponent from "../../components/CardComponent";
import air from "../../assets/images/air.png";
import fitness from "../../assets/images/fitness.png";
import education from "../../assets/images/education.png";
import fiance from "../../assets/images/fiance.png";

const SpecificEstimation = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.7,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1.3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
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

  const cardData = [
    {
      title: "Travel ",
      description:
        "Lorem ipsum dolor sit amet consectetur. Diam risus nulla volutpat pretium a pellentesque nunc convallis ullamcorper.",
      image: air,
    },
    {
      title: "Health & Fitness",
      description:
        "Lorem ipsum dolor sit amet consectetur. Diam risus nulla volutpat pretium a pellentesque nunc convallis ullamcorper.",
      image: fitness,
    },
    {
      title: "Educational",
      description:
        "Lorem ipsum dolor sit amet consectetur. Diam risus nulla volutpat pretium a pellentesque nunc convallis ullamcorper.",
      image: education,
    },
    {
      title: "Finance & Banking",
      description:
        "Lorem ipsum dolor sit amet consectetur. Diam risus nulla volutpat pretium a pellentesque nunc convallis ullamcorper.",
      image: fiance,
    },
    {
      title: "Hospitality",
      description:
        "Lorem ipsum dolor sit amet consectetur. Diam risus nulla volutpat pretium a pellentesque nunc convallis ullamcorper.",
      image: fiance,
    },
  ];
  console.log("card image = ", cardData.image);

  return (
    <div className=" max-md:ml-5 max-lg:ml-7 max-sm:ml-0 ">
      <div className=" container mx-auto px-4 flex flex-row justify-between  max-sm:block ">
        <div>
          <h2 className="font-Archivo font-medium text-45  max-xs:text-2xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-xl:text-4xl">
            Industry-Specific Estimations
          </h2>
          <p className="font-Archivo text-grayscale text-2xl mt-4 mb-8 max-xs:text-lg max-sm:text-xl  max-sm:mb-2 max-md:text-2xl max-lg:text-2xl max-xs:mb-4 max-xl:text-xl">
            Navigate to industry-specific estimations that align with your
            project goals.
          </p>
        </div>
        <NavigationButtons handlePrev={handlePrev} handleNext={handleNext} />
      </div>

      <Slider
        ref={sliderRef}
        {...settings}
        className="ml-[160px] max-lg:ml-0 max-sm:m-0 max-2xl:ml-[50px] max-xl:ml-[50px] h-[500px]"
      >
        {cardData.map((card, index) => (
          <div key={index}>
            <CardComponent
              title={card.title}
              description={card.description}
              image={card.image}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SpecificEstimation;
