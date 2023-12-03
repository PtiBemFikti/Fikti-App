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

interface ParallaxTextProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxTextProps) {
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

  return (
    <div className="parallax overflow-hidden m-0 flex-nowrap whitespace-nowrap">
      <motion.div
        className="scroller flex whitespace-nowrap flex-nowrap uppercase text-6xl font-semibold text-[#D5B2E6]"
        style={{ x }}
      >
        <span className="block mx-auto text-center mr-6">{children}</span>
        <span className="block mx-auto text-center mr-6">{children}</span>
        <span className="block mx-auto text-center mr-6">{children}</span>
        <span className="block mx-auto text-center mr-6">{children}</span>
        <span className="block mx-auto text-center mr-6">{children}</span>
        <span className="block mx-auto text-center">{children}</span>
      </motion.div>
    </div>
  );
}

export default ParallaxText;
