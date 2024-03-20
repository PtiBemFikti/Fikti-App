'use client';
import { useState, useEffect, useRef } from 'react';

export default function ScheduleTabs({ items }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef();

  useEffect(() => {
    firstBtnRef.current.focus();
  }, []);

  return (
    <div className="">
      <div className="flex justify-center items-center">
        <div className="flex md:gap-5 gap-2 py-3">
          {items.map((item: any, index: any) => (
            // eslint-disable-next-line react/jsx-key
            <div className="flex justify-center items-center">
              <div className="flex flex-col md:w-48 md:h-10 w-28 h-9">
                <button
                  onClick={() => setSelectedTab(index)}
                  ref={index === 0 ? firstBtnRef : null}
                  key={index}
                  className="md:text-base text-sm font-bold text-center p-1.5 bg-[#E87C6C] rounded-[19px] hover:bg-[#BA6356] focus:ring-2 focus:ring-white focus:bg-[#BA6356]"
                >
                  {item.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        {items.map((item: any, index: any) => (
          // eslint-disable-next-line react/jsx-key
          <div className={`${selectedTab === index ? '' : 'hidden'}`}>{item.content}</div>
        ))}
      </div>
    </div>
  );
}
