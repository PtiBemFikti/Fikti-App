import VidYoutube from './video';
import Image from 'next/image';
import Link from 'next/link';
import RotatingWords from './RotatingWords';
import RotatingImage from './RotatingImage';

const Dashboard: React.FC = () => {
  return (
    <div className="text-[#FFE8CE] w-full min-h-screen">
      {/* Tampilan Mobile */}
      <div className="md:hidden block">
        <div className="flex-col">
          <div className="flex justify-center-items-center p-4 my-7">
            <div className="w-96 h-40 bg-gradient-to-t from-[#241525] to-[#833F57] text-center py-6 rounded-3xl">
              <h3 className="font-bold text-3xl font-[Bricolage-Grotesque]">
                <RotatingWords />
              </h3>
              <h2 className="font-bold text-5xl mt-5 font-[Bricolage-Grotesque]">In FutureTech</h2>
            </div>
          </div>
          <div className="py-5 flex justify-center items-center">
            <VidYoutube />
          </div>
          <div className="mx-3 p-3">
            <h1 className="text-[#241525] text-4xl font-bold font-[Bricolage-Grotesque]">TECHNOFAIR 11.0</h1>
            <p className="text-[#241525] italic text-xl">Realizing the dynamic technological transformation through collaborative innovation in FutureTech.</p>
            <div className="flex justify-center items-center my-7">
              <div className="w-96 h-10 text-center bg-[#241525] rounded-[14px] hover:bg-[#262626] transition duration-100 ease-in-out">
                <button className="hover:bg-[#262626]">
                  <p className="my-2 font-bold">What event do we do?</p>
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center items-center gap-7">
              <Image src={'/technofair/vector.png'} alt="vector" width={60} height={39} className="opacity-20" />
              <h3 className="font-bold text-black text-xl opacity-20 mt-5">Click here to Sign Up</h3>
            </div>
            <div className="text-center my-7">
              <h3 className="font-bold text-xl text-black opacity-20">OR</h3>
            </div>
            <div className="flex justify-center items-center gap-5 pb-10">
              {/* <RotatingImage/> */}
              {/* <Image src={'/technofair/arrow.png'} alt="arrow kebawah" width={30} height={30} className="opacity-20" /> */}
              <RotatingImage />
              <h3 className="font-bold text-xl text-black opacity-20">Scroll Down to Learn More</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Tampilan Mobile End */}
      {/* Tampilan Desktop */}
      <div className="md:block hidden">
        <div className="flex justify-center items-center gap-24 p-7">
          <Link href={'/'}>
            <div className="absolute left-0 top-0 mt-28 pl-7">
              <Image src={'/technofair/back.png'} alt="back" width={48} height={48} className="" />
            </div>
          </Link>
          <div className=" w-[426px] h-[632px] border bg-gradient-to-t from-[#241525] to-[#833f57] rounded-3xl">
            <div className="p-6 font-[Bricolage-Grotesque]">
              <h1 className="font-bold text-4xl">
                Transformation, <br />
                Collaborative <br />
                Innovation
              </h1>
              <h1 className="font-bold text-5xl">In FutureTech.</h1>
            </div>
            <div className="px-5">
              <Image src={'/technofair/tech.png'} alt="tech" width={398} height={401} />
            </div>
          </div>
          <div className="w-[635px] h-[632px] border bg-[#e9e9ed] rounded-3xl border-gray-100">
            <div className="">
              {/* <VidYoutube /> */}
              <Image src={'/technofair/mentahan-vid.png'} alt="video-tf" width={635} height={219} className=" rounded-t-3xl" />
            </div>
            <div className="px-7 my-6">
              <h1 className="text-[#241525] font-bold text-6xl font-[Bricolage-Grotesque]">TECHNOFAIR 11.0</h1>
              <p className="text-[#241525] italic text-xl my-3">
                Realizing the dynamic technological transformation <br /> through collaborative innovation in FutureTech.
              </p>
            </div>
            <div className="flex gap-3">
              <button>
                <div className="ml-7 flex gap-1">
                  <div className="flex justify-center items-center w-72 h-16 bg-[#241525] text-center rounded-l-3xl">
                    <p className="text-lg">What event do we do?</p>
                  </div>
                  <div className="bg-[#241525] w-12 h-16 flex justify-center items-center rounded-r-3xl">
                    <Image src={'/technofair/arrow-kanan-bawah-2.png'} alt="arrow kanan bawah" width={12} height={12} />
                  </div>
                </div>
              </button>
              {/* <div className="flex justify-center items-center mx-10">
                <h3 className="text-[#241525] opacity-20 text-2xl">or</h3>
              </div> */}
              <button>
                <div className="flex bg-[#dddfe4] w-52 h-16 justify-center items-center gap-5 rounded-3xl shadow-md">
                  <p className="text-[#241525] font-semibold text-lg">Learn More</p>
                  <div className="">
                    <Image src={'/technofair/arrow-kanan-bawah.png'} alt="arrow kanan bawah" width={12} height={12} />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Tampilan Desktop End */}
    </div>
  );
};

export default Dashboard;
