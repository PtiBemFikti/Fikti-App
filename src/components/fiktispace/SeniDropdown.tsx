import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function SeniDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="bg-[#060E23] text-white hover:text-purpleText text-md">
          Seni
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
        <DropdownItem
          href="/fiktispace/Competition/DigitalPoster"
          className="text-[#251425]"
        >
          Digital Poster
        </DropdownItem>
        <DropdownItem
          href="/fiktispace/Competition/SoloVocal"
          className="text-[#241525]"
        >
          Solo Vocal
        </DropdownItem>
        <DropdownItem
          href="/fiktispace/Competition/Fotografi"
          className="text-[#241525]"
        >
          Fotografi
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
