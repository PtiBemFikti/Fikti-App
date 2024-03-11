// import "./styles.css";
import { useState, useEffect } from 'react';
import { useAnimate, stagger, motion } from 'framer-motion';

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate('.arrow', { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      'ul',
      {
        clipPath: isOpen ? 'inset(0% 0% 0% 0% round 10px)' : 'inset(10% 50% 90% 50% round 10px)',
      },
      {
        type: 'spring',
        bounce: 0,
        duration: 0.5,
      }
    );

    animate('li', isOpen ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : { opacity: 0, scale: 0.3, filter: 'blur(20px)' }, {
      duration: 0.2,
      delay: isOpen ? staggerMenuItems : 0,
    });
  }, [isOpen]);

  return scope;
}

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <nav className="menu" ref={scope}>
      <div
        style={{
          position: 'fixed',
          background: 'white',
        }}
      />
      <motion.button whileTap={{ scale: 0.97 }} onClick={() => setIsOpen(!isOpen)}>
        <div className="md:flex md:gap-4">
          <div className="flex gap-4 justify-center items-center">
            <p className="md:text-md">Events</p>
            <div className="arrow pt-0" style={{ transformOrigin: '50% 55%' }}>
              <svg width="15" height="15" viewBox="0 0 20 20">
                <path d="M0 7 L 20 7 L 10 16" />
              </svg>
            </div>
          </div>
        </div>
      </motion.button>
      <ul
        className="bg-[#dddfe4] text-center mt-2"
        style={{
          pointerEvents: isOpen ? 'auto' : 'none',
          clipPath: 'inset(10% 50% 90% 50% round 10px)',
        }}
      >
        <li className="md:text-[#241525] md:my-2">Item 1 </li>
        <li className="md:text-[#241525] md:my-2">Item 2 </li>
        <li className="md:text-[#241525] md:my-2">Item 3 </li>
        <li className="md:text-[#241525] md:my-2">Item 4 </li>
        <li className="md:text-[#241525] md:my-2">Item 5 </li>
      </ul>{' '}
    </nav>
  );
}
