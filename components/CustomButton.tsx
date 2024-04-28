"use client";

import Image from "next/image";

import { ICustomButtonProps } from "@/types";

const CustomButton = ({ title, containerStyles, handleClick, btnType }: ICustomButtonProps) => {
  return (
    <button
      disabled
      className={`custom-btn ${containerStyles}`}
      type={btnType || "button"}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;
