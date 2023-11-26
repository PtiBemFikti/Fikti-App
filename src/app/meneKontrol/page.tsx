import React from "react";
import Image from 'next/image';
import { motion, useAnimation } from "framer-motion";


function page() {
  return 
  
}
export default function Page() {
  return (
    /* Section Biro Pengembengan Sumber Daya Manusia

 */
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
      alt="Biro Pengembengan Sumber Daya Manusia

      "
    />
    </div>
    <div style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px"
        }}>
    <h1 className="text-[30px] md:text-6xl font-black mb-2 "> Biro Pengembengan Sumber Daya Manusia


</h1>
    </div>

     {/* Section Biro Penelitian dan Pengembangan

 */}

    <div style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px"
        }}>
    <Image
      src="/bg-1.jpg"
      width={600}
      height={600 }
      alt="Biro Penelitian dan Pengembangan

      "
    />
    </div>
    <div style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "100px"
        }}>
    <h1 className="text-[30px] md:text-6xl font-black mb-2"> Biro Penelitian dan Pengembangan

</h1>
    </div>
    </div>


  )
}





