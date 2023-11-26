import React from "react";
import Image from 'next/image';
import { motion, useAnimation } from "framer-motion";


function page() {
  return <div>DISINI BUAT ISI BIDANG MINAT BAKAT</div>;
  
}
export default function Page() {
  return (
    /* Section Dept Akademik */
    <div >
      <div style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px"
        }}>
    <Image
      src="/bg-1.jpg"
      width={600}
      height={600 }
      alt="Dept Akademik"
    />
    </div>
    <div style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px"
        }}>
    <h1 className="text-[30px] md:text-6xl font-black mb-2 "> Dept Akademik
</h1>
    </div>

     {/* Section Dept ORSB */}

    <div style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px"
        }}>
    <Image
      src="/bg-1.jpg"
      width={600}
      height={600 }
      alt="Dept orsb"
    />
    </div>
    <div style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "100px"
        }}>
    <h1 className="text-[30px] md:text-6xl font-black mb-2"> Dept orsb</h1>
    </div>
    </div>


  )
}





