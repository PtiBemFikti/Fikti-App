import Image from "next/image";
import { epilogue } from "@/styles/font";
export default function Nominees() {
  return (
    <div className="py-16 md:pt-36">
      <div className="flex justify-center items-center">
        <div className="flex-col">
          <h1
            className={`${epilogue.className} text-neutral-900 text-3xl md:text-4xl font-bold text-center`}
          >
            Meet the Candidates
          </h1>
          <p
            className={`${epilogue.className} text-gray-400 text-sm md:text-xl text-center pb-10`}
          >
            Get to know the candidate profiles
          </p>
          <div className="flex justify-start items-center gap-16">
            <div className="w-60 h-96 bg-white rounded-3xl border-1 md:block hidden">
              <div className="flex-col ">
                <Image
                  src={"/pemira/yudha.jpg"}
                  alt={"yudha"}
                  width={250}
                  height={300}
                  className="rounded-3xl"
                ></Image>
                <p
                  className={`${epilogue.className} text-neutral-900 text-2xl  mt-2 text-center`}
                >
                  Yudha Ari
                </p>
                <p
                  className={`${epilogue.className} text-neutral-900 text-2xl text-center`}
                >
                  &
                </p>
                <p
                  className={`${epilogue.className} text-neutral-900 text-2xl text-center`}
                >
                  Agita Sonia
                </p>
              </div>
            </div>
            <div className="w-60 h-96 bg-white rounded-3xl border-1 md:block hidden">
              <div className="flex-col">
                <Image
                  src={"/pemira/lutpi.jpg"}
                  alt={"yudha"}
                  width={230}
                  height={300}
                  className="rounded-3xl"
                ></Image>
                <p
                  className={`${epilogue.className} text-neutral-900 text-2xl text-center mt-2`}
                >
                  Lutfi Hakim Mulih
                </p>
                <p
                  className={`${epilogue.className} text-neutral-900 text-2xl text-center`}
                >
                  &
                </p>
                <p
                  className={`${epilogue.className} text-neutral-900 text-2xl text-center`}
                >
                  Fella Salsabila
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="mt-4 md:hidden">
        <div className="flex justify-start items-center gap-2 px-6">
          <div className="w-28 h-28 bg-white rounded-3xl border-1">
            <div className="flex-col">
              <Image
                src={"/pemira/yudha.jpg"}
                alt={"yudha"}
                width={250}
                height={300}
                className="rounded-3xl"
              ></Image>
              <p
                className={`${epilogue.className} text-neutral-900 text-sm text-center`}
              >
                Yudha Ari
              </p>
              <p
                className={`${epilogue.className} text-neutral-900 text-sm text-center`}
              >
                &
              </p>
              <p
                className={`${epilogue.className} text-neutral-900 text-sm text-center`}
              >
                Agita Sonia
              </p>
            </div>
          </div>
          <div className="w-28 h-28 bg-white rounded-3xl border-1">
            <div className="flex-col">
              <Image
                src={"/pemira/lutpi.jpg"}
                alt={"lutpi"}
                width={250}
                height={300}
                className="rounded-3xl"
              ></Image>
              <p
                className={`${epilogue.className} text-neutral-900 text-sm text-center`}
              >
                Lutfi Hakim Mulih
              </p>
              <p
                className={`${epilogue.className} text-neutral-900 text-sm text-center`}
              >
                &
              </p>
              <p
                className={`${epilogue.className} text-neutral-900 text-sm text-center`}
              >
                Fella Salsabila
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
