"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"; // Import your CSS file for animations

const medicalTerms = [
  {
    id: 1,
    term: "auscultation",
    syllables: [
      { text: "aus.", color: "text-red-500" },
      { text: "cul.", color: "text-[#0FAAFF]" },
      { text: "ta.", color: "text-[#0FAAFF]" },
      { text: "tion", color: "text-[#0FAAFF]" },
    ],
    definition:
      "the act (or process) of listening to the heart, lung and other body sounds using a stethoscope as part of a medical exam",
    image: "/homepage/1.png",
    textStyle: "text-left text-[1.2rem] font-sfui md:text-[40px] text-[#0B4D71] leading-[52px] max-md:leading-relaxed",
  },
  {
    id: 2,
    definition: "Transforming auscultation through AI",
    image: "/homepage/2.png",
    image2: "/homepage/3.png",
    textStyle: "text-left text-[#D7504A] font-[400] font-sfui text-[1.5rem] md:text-[40px] leading-[50px]",
  },
  {
    id: 3,
    definition: "Empowering pediatricians to identify innocent heart murmurs using AI",
    image: "/homepage/iphone.png",
    image2: "/homepage/laptop.png",
    textStyle: "text-left w-[80%] max-md:w-full text-[#D7504A] font-sfui text-[1.4rem] md:text-[31px] leading-snug font-[400]",
  },
  // Add more terms here
];

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-[5%] top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900"
      aria-label="Next slide"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-[5%] top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900"
      aria-label="Previous slide"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  className: "px-4 md:px-8",
};

const TopSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentSlide(newIndex);
  };

  return (
    <div className="relative">
      <img
        src="/homepage/bg.jpg"
        alt="Background"
        className="w-screen absolute -bottom-9 -z-10"
      />
      <div className="max-w-screen overflow-hidden">
        <Slider {...settings} beforeChange={handleBeforeChange}>
          {medicalTerms.map((term, index) => (
            <div
              className={`relative min-h-[80vh] flex items-center ${currentSlide === index ? `animate-slide-${index}` : ""
                }`}
              key={term.id}
            >
              <div className="container mx-auto px-4 py-10 md:py-20 max-w-6xl min-h-[80vh] mt-[100px] max-md:mt-[0px] flex">
                <div className="grid gap-8 items-center">
                  {index % 2 === 0 ? (
                    <div className="grid max-md:flex-col max-md:gap-[100px] sm:grid-cols-1 md:grid-cols-[60%_40%] items-center">
                      {/* Image Section */}
                      <div className={`relative flex gap-4 justify-center items-center md:order-2 ${currentSlide === index ? 'fade-in' : ''}`}>
                        {term.image && (
                          <img
                            src={term.image}
                            alt={term.term || "Medical Term"}
                            className={`${term.id === 1
                                ? "w-full sm:w-[80%] max-md:w-[250px]  rounded-lg"
                                : term.id === 2
                                  ? "w-full   border-4 border-blue-500"
                                  : "mr-[65%] max-md:w-[30%] max-lg:mr-0 mt-9"
                              } ${currentSlide === index ? 'fade-in delay-300' : ''}`}
                          />
                        )}
                        {term.image2 && (
                          <div className={`absolute ${term.id === 2 ? "top-0 right-0" :
                              term.id === 3 ? "w-[650px] max-md:w-[250px] -top-10 max-md:top-8 left-10 max-md:left-[10%] max-lg:left-0 max-lg:w-full -z-[10]" : ""
                            }`}>
                            <img
                              src={term.image2}
                              alt={term.term || "Medical Term"}
                              className={`${term.id === 2 ? "opacity-50" : term.id === 3 ? "-z-[100]" : ""} ${currentSlide === index ? 'fade-in-delayed' : ''}`}
                            />
                          </div>
                        )}
                      </div>

                      {/* Text Content */}
                      <div className={`space-y-6 ${term.textStyle} md:order-1 ${currentSlide === index ? (index % 2 === 0 ? 'fade-right' : 'fade-left') : ''}`}>
                        {term.syllables && (
                          <span className="text-2xl sm:text-4xl md:text-[46px] font-[600] font-sfui">
                            {term.syllables.map((syllable, i) => (
                              <span
                                key={i}
                                className={syllable.color || "text-black"}
                              >
                                {syllable.text}
                              </span>
                            ))}
                            <span className="text-blue-600">:</span>
                          </span>
                        )}

                        {term.definition && (
                          <span className="">
                            {term.definition}
                          </span>
                        )}

                        <div>
                          <button className="px-8 sm:px-8 font-bold font-sfui tracking-[1.5px] py-0 text-[16px] sm:text-[16px] text-black border-[3px] border-[#5ac8fa] rounded-full hover:bg-[#5AC8FA] leading-[30px] hover:text-white transition-colors block mt-[40px] sm:mt-[80px]">
                            Explore
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid max-md:gap-[50px] sm:grid-cols-1 md:grid-cols-[40%_60%] gap-0 items-center">
                      {/* Image Section */}
                      <div className={`relative flex gap-4 justify-center items-center ${currentSlide === index ? 'fade-in' : ''}`}>
                        {term.image && (
                          <img
                            src={term.image}
                            alt={term.term || "Medical Term"}
                            className={`${term.id === 1
                                ? "w-full sm:w-[80%] rounded-lg"
                                : term.id === 2
                                  ? " max-md:w-[150px] ml-12 "
                                  : " mr-[65%]  max-md:w-[150px]  max-lg:w-[30%] max-lg:mr-0 mt-9 "
                              } ${currentSlide === index ? 'fade-in' : ''}`}
                          />
                        )}
                        {term.image2 && (
                          <div className={`absolute ${term.id === 2 ? "lg:-top-[10%] lg:right-[30%] w-full" :
                              term.id === 3 ? "w-[650px] -top-10 max-md:top-8 left-10 max-lg:left-0 max-lg:w-full -z-[10]" : ""
                            }`}>
                            <img
                              src={term.image2}
                              alt={term.term || "Medical Term"}
                              className={`${term.id === 2 ? "opacity-50 max-md:w-[160px] left-[15%] max-md:absolute max-md:-top-[150px]" : term.id === 3 ? "-z-[100]" : ""} ${currentSlide === index ? 'fade-in-delayed' : ''}`}
                            />
                          </div>
                        )}
                      </div>

                      {/* Text Content */}
                      <div className={`space-y-6 ${term.textStyle} ${currentSlide === index ? (index % 2 === 0 ? 'fade-right' : 'fade-left') : ''}`}>
                        {term.syllables && (
                          <span className="text-2xl sm:text-4xl md:text-6xl font-[600] font-sfui">
                            {term.syllables.map((syllable, i) => (
                              <span
                                key={i}
                                className={syllable.color || "text-black"}
                              >
                                {syllable.text}
                              </span>
                            ))}
                            <span className="text-blue-600">:</span>
                          </span>
                        )}

                        {term.definition && (
                          <span className="">
                            {term.definition}
                          </span>
                        )}

                        <div>
                          <button className="px-8  sm:px-8 py-0 leading-[30px] h-fit text-[14px] sm:text-[16px] text-black border-[3px] font-sfui font-bold  tracking-[1.5px] border-[#5ac8fa] rounded-full hover:bg-[#5AC8FA] hover:text-white transition-colors block mt-[40px] sm:mt-[80px]">
                            Explore
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopSlider;

