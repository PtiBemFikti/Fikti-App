import React from "react";
import Card1 from "./Card1";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card2 from "./Card2";

const Section3: React.FC = () => {
  return (
    <div className="block md:hidden">
      <div className=" bg-[#11111B] text-center text-[#FEFDFC] p-3">
        <h1 className="font-CircleAmolens text-[24px]">SAVE THE DATE!</h1>
        <h1 className="font-Poppins text-[14px] opacity-50">
          <a href="https://www.evernote.com/shard/s684/sh/703f1447-958f-2806-0be0-c2b1e0b47394/xhn5FAql2Cs2NXtJCQUiMvo4yQcpoD7sMaarBRPDow8RZbsHL0XU8mxo1w" target="_blank">Click here to save the date</a>
        </h1>
      </div>
      <div className="bg-white min-h-[850px] px-5 pt-2">
        <Card1 title="Pertemuan Pertama" />
        <Card2 title="Pertemuan Kedua" />
        <Card3 title="Pertemuan Ketiga" />
        <Card4 title="Pertemuan Keempat" />
      </div>
    </div>
  );
};
export default Section3;
