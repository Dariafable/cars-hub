import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

import { ICarProps } from "@/types";
import calculateCarRent from "@/utils/helpers";

interface CarCardProps {
  car: ICarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="car-card__price">
        <span className="car-card__price-dollar">$</span>
        {carRent}
        <span className="car-card__price-day">/day</span>
      </p>

      <div className="car-card__image">
        <Image src="/hero.png" alt="car" fill className="object-contain" />
      </div>

      <div className="mt-2 relative w-full flex">
        <div className="flex group-hover:invisible w-full justify-between  text-grey">
          <div className="car-card__icon">
            <Image src="/steering-wheel.svg" width={20} height={20} alt="steering wheel" />
            <p className="car-card__icon-text">{transmission === "a" ? "Automatic" : "Manual"}</p>
          </div>

          <div className="car-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="car-card__icon-text">{drive.toUpperCase()}</p>
          </div>

          <div className="car-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="car-card__icon-text">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
