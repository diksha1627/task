import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { navlinks } from "../constants";

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`w-[11rem] h-[48px] rounded-[10px] ${
      isActive && isActive === name && "font-bold"
    } flex justify-center items-center ${
      !disabled && "cursor-pointer"
    } ${styles}`}
    onClick={handleClick}
  >
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
      
    ) : (
      <img
        src={imgUrl}
        alt="fund_logo"
        className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
      />
    )}
    <p className="text-[black]">{name}</p>
  </div>
);

const Sidebar = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState("dashboard");

  return (
    <div className='flex justify-between flex-col sticky  h-[93vh] w-[15rem]  bg-[#F2F9FF] border border-right'>
      
    
       
      <div className="flex-1 flex flex-col justify-between items-center rounded-[20px] w-[12rem] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
        
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
              name={link.name}
            />
          
             ))}
        </div>

        <div className="flex flex-col gap-1 ">
          <span>Help & Information</span>
          <span>Logout</span>
        </div>

       </div>
    </div>
  )
}

export default Sidebar
