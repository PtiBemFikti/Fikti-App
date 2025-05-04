//ini file buat font lokal ≠ fonts/google
//tinggal masukin ke classname pake backtick cth: classname: `${circleAmolens.className}`
import localFont from 'next/font/local';

const circleAmolens = localFont({
  src: '../../public/font/CircleAmolensRegular.ttf',
});
const Guardians = localFont({ src: '../../public/font/Guardians.ttf' });
const Urbanist = localFont({ src: '../../public/font/Urbanist-Regular.ttf' });
const bricolageGrotesque = localFont({ src: '../../public/font/Bricolage_Grotesque.ttf' });
const poppins = localFont({ src: '../../public/font/Poppins.ttf' });
const terminaTest = localFont({src: '../../public/font/Termina-Test.otf'});
const terminaTestBold = localFont({src: '../../public/font/TerminaTest-Bold.otf'});
const epilogue = localFont({src: '../../public/font/Epilogue.ttf'});
const MonumentExtendedRegular = localFont({src: '../../public/font/MonumentExtended-Regular.otf'})
const MonumentExtendedBold = localFont({src: '../../public/font/MonumentExtended-Ultrabold.otf'})
const OpenSauceSans = localFont({src: '../../public/font/OpenSauceSans-Regular.ttf'})
const Montserrat = localFont({ src: '../../public/font/Montserrat-VariableFont_wght.ttf'})
const AkiraExpanded = localFont({ src: '../../public/font/Akira Expanded Demo.otf'})
const Designer = localFont({ src: '../../public/font/Designer.otf'})
const Lato = localFont({ src: '../../public/font/Lato-Regular.ttf'})

export { circleAmolens, Guardians, Urbanist, bricolageGrotesque, poppins, terminaTest, terminaTestBold, epilogue, MonumentExtendedRegular, MonumentExtendedBold, OpenSauceSans, Montserrat, AkiraExpanded, Designer, Lato };
