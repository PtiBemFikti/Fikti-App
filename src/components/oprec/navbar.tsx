import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="mx-auto flex justify-between items-center">
      <Link href='/' className=''>
        <Image src="/logo-kabinet.png" alt="logo" width={48} height={48} />
      </Link>
      <Link href='/' className='font-semibold text-lg '>
        <p>Home</p>
      </Link>
    </nav>
  );
}
