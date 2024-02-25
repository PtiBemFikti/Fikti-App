import VidYoutube from './video';

const Dashboard: React.FC = () => {
  return (
    <div className="text-[#FFE8CE] bg-white w-full h-screen">
      <div className="flex justify-center items-center p-7 flex-col">
        <div className="w-96 h-40 bg-gradient-to-t from-[#241525] to-[#833F57] text-center py-6 rounded-3xl">
          <h3 className="font-bold text-2xl">Transformations</h3>
          <h2 className="font-bold text-5xl mt-5">In FutureTech</h2>
        </div>
        <div className="py-5">
            <VidYoutube />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Dashboard;
