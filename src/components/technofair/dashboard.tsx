import VidYoutube from './video';

const Dashboard: React.FC = () => {
  return (
    <div className="text-[#FFE8CE] w-full h-screen">
      <div className="flex-col">
        <div className="flex justify-center-items-center p-4">
          <div className="w-96 h-40 bg-gradient-to-t from-[#241525] to-[#833F57] text-center py-6 rounded-3xl">
            <h3 className="font-bold text-3xl">Transformations</h3>
            <h2 className="font-bold text-5xl mt-5">In FutureTech</h2>
          </div>
        </div>
        <div className="py-5 flex justify-center items-center">
          <VidYoutube />
        </div>
        <div className="mx-3 p-3">
          <h1 className="text-[#241525] text-4xl font-bold">TECHNOFAIR 11.0</h1>
          <p className="text-[#241525] italic text-xl">Realizing the dynamic technological transformation through collaborative innovation in FutureTech.</p>
          <div className="flex justify-center items-center my-7">
            <div className="w-96 h-10 text-center bg-[#241525] rounded-[14px] hover:text-[#cc914d]">
              <button className="">
                <p className='my-2 font-bold'>Sign Up Now</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
