import React from "react";
import Image from 'next/image';
import { motion, useAnimation } from "framer-motion";


function page() {
  return <div>Aryo Biadab Make nextjs tapi gaada figma nya KWONTOL</div>;
  
}
export default function Page() {
  return (
    /* Section biro PTI
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
      alt="biro PTI
      "
    />
    </div>
    <div style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px"
        }}>
    <h1 className="text-[30px] md:text-6xl font-black mb-2 "> Biro PTI

</h1>
    </div>

     {/* Section Biro Media
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
      alt="Biro Media
      "
    />
    </div>
    <div style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "100px"
        }}>
    <h1 className="text-[30px] md:text-6xl font-black mb-2"> Biro Media
</h1>
    </div>

    {/* Section Biro Administrasi Umum */}

    <div style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px"
        }}>
    <Image
      src="/bg-1.jpg"
      width={600}
      height={600 }
      alt="Biro Administrasi Umum"
    />
    </div>
    <div style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "100px"
        }}>
    <h1 className="text-[30px] md:text-6xl font-black mb-2"> Biro Administrasi Umum</h1>
    </div>
    </div>


  )
}





