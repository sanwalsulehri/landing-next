"use client";
import React, { useState } from "react";
import card1BG from "../../../public/card1.png";
import card2BG from "../../../public/card2.png";
import card3BG from "../../../public/card3.png";
import Image from "next/image";

const Featured = () => {
  const Cards = [
    {
      img: card1BG,
      heading: "Sobha Hearland II Villas",
      para: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
    },
    {
      img: card2BG,
      heading: "Sobha Hearland II Villas",
      para: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
    },
    {
      img: card3BG,
      heading: "Sobha Hearland II Villas",
      para: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
    },
    {
        img: card1BG,
        heading: "Sobha Hearland II Villas",
        para: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
      },
      {
        img: card2BG,
        heading: "Sobha Hearland II Villas",
        para: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
      },
      {
        img: card3BG,
        heading: "Sobha Hearland II Villas",
        para: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
      },
  ];

  const [ratings, setRatings] = useState(Array(Cards.length).fill(0));
  const [hovers, setHovers] = useState(Array(Cards.length).fill(0));

  const stars = [1, 2, 3, 4, 5];

  const getStarFill = (cardIndex, star) => {
    const value = hovers[cardIndex] || ratings[cardIndex];
    if (star <= value) return "#F59914";
    if (star - value < 1) return `url(#partial-${cardIndex}-${star})`;
    return "#BEBEBE";
  };

  const handleHover = (cardIndex, star) => {
    const updatedHovers = [...hovers];
    updatedHovers[cardIndex] = star;
    setHovers(updatedHovers);
  };

  const handleLeave = (cardIndex) => {
    const updatedHovers = [...hovers];
    updatedHovers[cardIndex] = 0;
    setHovers(updatedHovers);
  };

  const handleRating = (cardIndex, star) => {
    const updatedRatings = [...ratings];
    updatedRatings[cardIndex] = star;
    setRatings(updatedRatings);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Cards.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === Cards.length - 1 ? 0 : prevIndex + 1));
  };

  const isFirstCard = currentIndex === 0;

  const [selectedOption, setSelectedOption] = useState('All Properties');

  return (
    <div className="my-16">
      <div>
        <p className="font-[400]">Checkout our latest inventory</p>
        <div className="flex flex-wrap gap-10 items-center justify-between">
          <h1 className="font-semibold text-[30px] md:text-[40px] lg:text-[50px]">
            Our featured properties
          </h1>
          <div className="flex items-center gap-4">
            <select 
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="mt-4 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#6965FD]"
            >
              <option value="All Properties">All Properties</option>
              <option value="Houses">Houses</option>
              <option value="Apartments">Apartments</option>
              <option value="Villas">Villas</option>
            </select>
            <div
              className={`w-[45px] text-black h-[45px] rounded-full ${
                isFirstCard ? " text-black" : "bg-[#1F1F1F] text-white"
              } hover:shadow-xl cursor-pointer flex items-center justify-center`}
              onClick={handlePrev}
            >
              <svg
                className="rotate-180"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.91003 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91003 4.08002"
                  stroke={isFirstCard ? "currentColor" : "#FEFEFF"}
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div
              className="w-[45px] hover:bg-opacity-80 h-[45px] rounded-full shadow-xl cursor-pointer bg-[#1F1F1F] text-white flex items-center justify-center"
              onClick={handleNext}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.91003 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91003 4.08002"
                  stroke="#FEFEFF"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-14 w-full overflow-hidden">
        <div className="flex gap-5 w-fit">
          {Cards.map((card, index) => (
            <div
              key={index}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              className="border w-[290px] sm:w-[300px] md:w-[350px] xl:w-[420px] transition-transform duration-300 ease-in-out border-[#BEBEBE] overflow-hidden bg-white rounded-[14px]"
            >
              <div className="overflow-hidden w-full rounded-[14px] bg-gradient-to-r from-[#C1DEE8B2] via-[#FFFFFF00] to-[#FBD9B9B2]">
                <Image
                  src={card.img}
                  className="max-h-[263px] rounded-[14px] h-full object-cover"
                  alt="card1Img"
                />
              </div>
              <div className="px-4 pb-5 pt-3">
                <h2 className="text-[21px] font-semibold">{card.heading}</h2>
                <p className="font-[400] py-3">{card.para}</p>

                <div className="flex items-center">
                  <svg width="0" height="0">
                    {stars.map((star) => (
                      <linearGradient
                        key={`partial-${index}-${star}`}
                        id={`partial-${index}-${star}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset={`${((hovers[index] || ratings[index]) - star + 1) * 100}%`}
                          stopColor="#F59914"
                        />
                        <stop
                          offset={`${((hovers[index] || ratings[index]) - star + 1) * 100}%`}
                          stopColor="#BEBEBE"
                        />
                      </linearGradient>
                    ))}
                  </svg>

                  {stars.map((star) => (
                    <svg
                      key={star}
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill={getStarFill(index, star)}
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer"
                      onMouseEnter={() => handleHover(index, star)}
                      onMouseLeave={() => handleLeave(index)}
                      onClick={() => handleRating(index, star)}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.39496 13.0413L4.17167 15.3441C3.80595 15.5436 3.37104 15.2346 3.439 14.8236L4.25022 9.91797L0.797278 6.42704C0.50966 6.13625 0.673816 5.64196 1.07825 5.58101L5.83337 4.86435L7.94347 0.429842C8.12439 0.049624 8.66553 0.0496241 8.84645 0.429842L10.9566 4.86435L15.7117 5.58101C16.1161 5.64196 16.2803 6.13625 15.9926 6.42703L12.5397 9.91797L13.3509 14.8236C13.4189 15.2346 12.984 15.5436 12.6183 15.3442L8.39496 13.0413Z"
                      />
                    </svg>
                  ))}

                  <p className="ml-4 font-[400]">
                    {ratings[index] > 0 ? `${ratings[index].toFixed(2)}` : "No Rating"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
