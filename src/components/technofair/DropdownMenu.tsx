import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react';

export default function DropdownMenuNav() {
  return (
    <Dropdown>
      <DropdownTrigger>
          <Button className="bg-white hover:bg-white hover:text-purpleText text-md">
            Events
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9l-7 7l-7-7" />
            </svg>
          </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem className='text-[#251425]'>Seminar</DropdownItem>
        <DropdownItem className='text-[#241525]'>Workshop</DropdownItem>
        <DropdownItem className='text-[#241525]'>Competition</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
