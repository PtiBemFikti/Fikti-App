import { Montserrat } from "@/styles/font";
import DokumSlider from "./DokumSlider";
import { useRef, useState, useEffect } from "react";
import { animate, motion, useMotionValue } from "framer-motion";

const images = [
    "/technofair/Dokumentasi/dokum1.webp",
    "/technofair/Dokumentasi/dokum2.webp",
    "/technofair/Dokumentasi/dokum3.webp",
    "/technofair/Dokumentasi/dokum4.jpg",
    "/technofair/Dokumentasi/dokum5.webp",
    "/technofair/Dokumentasi/dokum6.webp",
    "/technofair/Dokumentasi/dokum7.webp",
    "/technofair/Dokumentasi/dokum12.webp",
  ];
const images2 = [
    "/technofair/Dokumentasi/dokum8.webp",
    "/technofair/Dokumentasi/dokum9.webp",
    "/technofair/Dokumentasi/dokum5.webp",
    "/technofair/Dokumentasi/dokum10.webp",
    "/technofair/Dokumentasi/dokum11.webp",
    "/technofair/Dokumentasi/dokum12.webp",
    "/technofair/Dokumentasi/dokum13.webp",
    "/technofair/Dokumentasi/dokum14.webp",
  ];

  const useDeviceDetect = () => {
    const [isDesktop, setIsDesktop] = useState(false);
  
    useEffect(() => {
      const checkDevice = () => {
        const hasMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        setIsDesktop(hasMouse);
      };
  
      checkDevice();
      window.addEventListener('resize', checkDevice);
      return () => window.removeEventListener('resize', checkDevice);
    }, []);
  
    return isDesktop;
  };

export function Dokumentasi() {
  const isDesktop = useDeviceDetect();
    const useMeasure = () => {
        const ref = useRef<HTMLDivElement | null>(null);
        const [bounds, setBounds] = useState({ width: 0, height: 0 });
      
        useEffect(() => {
          if (!ref.current) return;
      
          const observer = new ResizeObserver(([entry]) => {
            setBounds(entry.contentRect);
          });
      
          observer.observe(ref.current);
      
          return () => observer.disconnect();
        }, []);
      
        return [ref, bounds] as const;
    };

    const CEPAT = 40;
    const LAMBAT = 150;

    const [durasi, setDurasi] = useState(CEPAT);
      
    // untuk images 1
    const [ref1, { width: width1 }] = useMeasure();
    const xTranslation1 = useMotionValue(0);
  
    // untuk images 2
    const [ref2, { width: width2 }] = useMeasure();
    const xTranslation2 = useMotionValue(0);

    const [mustFinish, setMushFinish] = useState(false);
    const [rerender, setRerender] = useState(false);
    
    // animasi untuk images 1
  useEffect(() => {
    let controls;
    const finalPosition = -width1 / 2 - 8;
    if (mustFinish) {
      controls = animate(xTranslation1, [xTranslation1.get(), finalPosition], {
        ease: "linear",
        duration: durasi * (1 - xTranslation1.get() / finalPosition),
        onComplete: () => {
          setMushFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation1, [0, finalPosition], {
        ease: "linear",
        duration: durasi,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }
    return controls?.stop;
  }, [xTranslation1, width1, durasi, rerender, mustFinish]);

  // animasi untuk images 2
  useEffect(() => {
    let controls;
    const finalPosition = -width1 / 2 - 8;
    if (mustFinish) {
      controls = animate(xTranslation2, [xTranslation2.get(), 0], {
        ease: "linear",
        duration: durasi * (xTranslation2.get() / finalPosition),
        onComplete: () => {
          setMushFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation2, [finalPosition, 0], {
        ease: "linear",
        duration: durasi,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }
    return controls?.stop;
  }, [xTranslation2, width1, durasi, rerender, mustFinish]);

    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="mt-60 lg:mt-[300px] pt-10 border-t border-white sm:border-t-0 sm:pt-0">
            <div className="justify-center">
                <h1 className={`${Montserrat.className} text-2xl md:text-5xl font-semibold tracking-tighter text-center`}>TechnoFair 12.0</h1>
                <h1 className={`${Montserrat.className} text-3xl md:text-6xl tracking-tighter text-center`}>More Than Just Pictures, <br />
                <span className="font-bold">a Story!</span></h1>
            </div>

            <div className="py-8 scale-75 md:scale-100">
                <motion.div className="absolute left-0 flex gap-4" ref={ref1} style={{ x: xTranslation1 }}
                onHoverStart={() => {
                    setMushFinish(true);
                    setDurasi(LAMBAT);
                }}
                onHoverEnd={() => {
                    setMushFinish(true);
                    setDurasi(CEPAT);
                }}
                >
                    {[...images, ...images, ...images].map((item, idx) => (
                        <motion.div
                        key={idx}
                        {...(isDesktop && {
                          onMouseEnter: () => setHovered(idx),
                          onMouseLeave: () => setHovered(null)
                        })}
                      >
                        <DokumSlider image={item} isHovered={hovered === null || hovered === idx} />
                      </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="py-8 relative  mt-36 md:mt-52 scale-75 md:scale-100">
                <motion.div className="relative left-0 flex gap-4" ref={ref2} style={{ x: xTranslation2 }}
                onHoverStart={() => {
                    setMushFinish(true);
                    setDurasi(LAMBAT);
                }}
                onHoverEnd={() => {
                    setMushFinish(true);
                    setDurasi(CEPAT);
                }}
                >
                    {[...images2, ...images2, ...images2].map((item, idx) => (
                        <motion.div
                        key={idx}
                        {...(isDesktop && {
                          onMouseEnter: () => setHovered(idx),
                          onMouseLeave: () => setHovered(null)
                        })}
                      >
                        <DokumSlider image={item} isHovered={hovered === null || hovered === idx} />
                      </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

