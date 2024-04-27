export default function DashboardPage() {
  return (
    <div className="w-full ml-16 h-96 flex-col justify-start items-start gap-8 inline-flex">
      <div className="w-12 h-12 relative"></div>
      <div className="h-72 flex-col justify-start items-start gap-3 flex">
        <div className="flex-col justify-start items-start gap-3 flex">
          <div>
            <span className="text-gray-200 text-2xl font-normal font-['Urbanist']">
              Welcome to
            </span>
            <span className="text-gray-200 text-2xl font-semibold font-['Urbanist']">
              {" "}
              FIKTI Sport and Art Championship
            </span>
          </div>
          <div className="flex-col justify-start items-start gap-3 flex">
            <div className="justify-start items-start gap-3 inline-flex">
              <div className="flex-col justify-start items-start gap-1 inline-flex">
                <div className="text-gray-200 text-6xl font-normal font-['Guardians']">
                  FIKTI
                </div>
                <div className="text-gray-200 text-6xl font-normal font-['Guardians']">
                  SPACE
                </div>
              </div>
              <div className="w-72 self-stretch text-gray-200 text-9xl font-normal font-['Guardians']">
                3.0
              </div>
            </div>
            <div className="justify-start items-start gap-4 inline-flex">
              <div className="text-gray-200 text-3xl font-normal font-['Guardians']">
                Harmony
              </div>
              <div className="text-gray-200 text-3xl font-normal font-['Guardians']">
                Of
              </div>
              <div className="text-gray-200 text-3xl font-normal font-['Guardians']">
                Body
              </div>
              <div className="text-gray-200 text-3xl font-normal font-['Guardians']">
                And
              </div>
              <div className="text-gray-200 text-3xl font-normal font-['Guardians']">
                Soul
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-3 inline-flex">
          <div className="w-full h-12 px-6 py-3 bg-gradient-to-r from-teal-600 to-violet-950 rounded-2xl border-2 border-white border-opacity-10 justify-center items-center gap-2.5 inline-flex">
            <div className="text-gray-200 text-xl font-medium font-['Urbanist']">
              What event do we do?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
