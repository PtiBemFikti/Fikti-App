import React from "react";
import Card1 from "./Card1";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card2 from "./Card2";

const Section3: React.FC = () => {
  return (
    <div className="bg-white min-h-[700px]">
      <div>
        <Card1 title="Pertemuan Pertama" />
        <Card2 title="Pertemuan Kedua" />
        <Card3 title="Pertemuan Ketiga" />
        <Card4 title="Pertemuan Keempat" />
      </div>
    </div>
  );
};
export default Section3;
