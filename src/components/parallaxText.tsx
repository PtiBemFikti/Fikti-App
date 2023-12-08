// components/ParallaxText.tsx
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Image from "next/image";

interface ParallaxTextProps {
  baseVelocity: number;
}

function ParallaxText({ baseVelocity = 100 }: ParallaxTextProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 10000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  // Ganti URL gambar sesuai dengan kebutuhan Anda
  const imageUrls = [
    "/logo/AKADEMIK.png",
    "/logo/AU.png",
    "/logo/BISMIT.png",
    "/logo/HUMAS.png",
    "/logo/LITBANG.png",
    "/logo/MEDIA.png",
    "/logo/PTI.png",
    "/logo/OR.png",
    "/logo/POLKESMA.png",
    "/logo/PSDM.png",
    "/logo/SB.png",
    "/logo/SOSMAS.png",
  ];

  return (
    <div className="parallax overflow-hidden m-0 flex-nowrap whitespace-nowrap">
      <motion.div
        className="scroller flex whitespace-nowrap flex-nowrap uppercase text-6xl font-semibold text-[#D5B2E6]"
        style={{ x }}
      >
        {imageUrls.map((imageUrl, index) => (
          <motion.div key={index} className="block text-center shadow-inner">
            <Image
              className="object-cover"
              src={imageUrl}
              width={80}
              height={80}
              alt={`Image ${index + 1}`}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default ParallaxText;
