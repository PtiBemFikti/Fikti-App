import { Urbanist } from "@/styles/font";

export default function AboutPage() {
  return (
    <div className="mt-4 md:hidden">
      <div className="flex items-center justify-center">
        <div className="my-8 px-8">
          <div>
            <p
              className={`${Urbanist.className} text-center text-slate-300 text-base font-bold`}
            >
              FIKTI SPACE is back and inviting you to join in for an array of
              exciting tournaments! This year, we have competitions in Futsal,
              3-on-3 Basketball, Mobile Legends and much more! Come and compete
              with us!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
