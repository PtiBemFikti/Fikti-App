import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="mx-auto flex justify-between items-center">
      <Link href='/' className=''>
        <Image src="/logo-kabinet.png" alt="logo" width={25} height={25} />
      </Link>
    </nav>
  );
}
