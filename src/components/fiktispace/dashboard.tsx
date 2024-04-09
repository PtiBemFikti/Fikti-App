import Image from "next/image";
export default function DashboardPage() {
  return (
    <div className="flex justify-center items-center">
      <Image
        src="/fiktispace/WIP.jpg"
        alt=""
        width={1080}
        height={1080}
      ></Image>
    </div>
  );
}
