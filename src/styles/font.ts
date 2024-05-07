//ini file buat font lokal ≠ fonts/google
//tinggal masukin ke classname pake backtick cth: classname: `${circleAmolens.className}`
import localFont from "next/font/local";

const circleAmolens = localFont({
  src: "../../public/font/CircleAmolensRegular.ttf",
});
const Guardians = localFont({ src: "../../public/font/Guardians.ttf" });
const Urbanist = localFont({ src: "../../public/font/Urbanist-Regular.ttf" });

export { circleAmolens, Guardians, Urbanist };
