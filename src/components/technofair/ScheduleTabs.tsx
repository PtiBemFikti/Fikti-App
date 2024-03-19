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
        <div className="flex gap-5 py-3">
          {items.map((item: any, index: any) => (
            // eslint-disable-next-line react/jsx-key
            <div className="flex justify-center items-center">
              <div className="flex flex-col w-48 h-10">
                <button onClick={() => setSelectedTab(index)} ref={index === 0 ? firstBtnRef : null} key={index} className="text-base font-bold text-center p-1.5 bg-[#E87C6C] rounded-[19px] hover:bg-[#BA6356] focus:ring-2 focus:ring-white focus:bg-[#BA6356]">
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
