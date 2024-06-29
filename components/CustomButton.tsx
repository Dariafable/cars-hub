"use client";

import Image from "next/image";

import { ICustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  isDisabled,
}: ICustomButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      className={`custom-btn ${containerStyles}`}
      type={btnType || "button"}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>

      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="arrow_left" fill className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
