import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex h-16 w-full items-center justify-between px-4'>
      <Link href='/' className='text-2xl'>
        MySpots
      </Link>
      <ul className='flex h-16 w-auto items-center justify-between'>
        <li className='mx-3'>
          <Link href='/'>Home</Link>
        </li>
        <li className='mx-3'>
          <Link href='/find'>Find a Spot</Link>
        </li>
        <li className='mx-3'>
          <Link href='/auth/signin'>Signin</Link>
        </li>
        <li className='mx-3'>
          <Link href='/auth/signup'>Signup</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
