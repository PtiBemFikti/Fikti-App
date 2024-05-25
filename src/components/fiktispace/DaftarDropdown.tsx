import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function DaftarDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="bg-[#1D1564] text-[#F1EAF6]  hover:bg-[#110D3C] text-md">
          Daftar Kompetisi
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
          href="https://forms.gle/KvhoySC2SD2TqB5U9"
          className="text-[#251425]"
        >
          Pendaftaran Mahasiswa
        </DropdownItem>
        <DropdownItem
          href="https://forms.gle/KvhoySC2SD2TqB5U9"
          className="text-[#241525]"
        >
          Pendaftaran Non Mahasiswa
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
