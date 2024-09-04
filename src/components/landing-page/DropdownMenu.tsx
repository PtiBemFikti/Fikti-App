import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
export default function DropdownMenuNav() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="bg-[#060E23] text-white hover:text-purpleText text-md">
          Program Kerja
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className=""
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 9l-7 7l-7-7"
            />
          </svg>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem href="/oprec-volunteer" className="text-[#251425]">
          OPREC Volunteer
        </DropdownItem>
        <DropdownItem href="/filing" className="text-[#241525]">
          FIKTI Learning
        </DropdownItem>
        <DropdownItem href="/technofair" className="text-[#241525]">
          TechnoFair
        </DropdownItem>
        <DropdownItem href="/fiktispace" className="text-[#241525]">
          FIKTI Space
        </DropdownItem>
        <DropdownItem href="/pemira" className="text-[#241525]">
          PEMIRA
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
