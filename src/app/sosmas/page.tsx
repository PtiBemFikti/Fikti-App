import React from "react";
import Image from 'next/image';
import { motion, useAnimation } from "framer-motion";


function page() {
  return 
  
}
export default function Page() {
  return (
    /* Section Dept Sosial Masyarakat
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
      alt="Dept Sosial Masyarakat
      "
    />
    </div>
    <div style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px"
        }}>
    <h1 className="text-[30px] md:text-6xl font-black mb-2 "> Dept Sosial Masyarakat

</h1>
    </div>

     {/* Section Dept Politik Kesejahteraan Mahasiswa
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
      alt="Dept Politik Kesejahteraan Mahasiswa
      "
    />
    </div>
    <div style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "100px"
        }}>
    <h1 className="text-[30px] md:text-6xl font-black mb-2"> Dept Politik Kesejahteraan Mahasiswa
</h1>
    </div>
    </div>


  )
}





