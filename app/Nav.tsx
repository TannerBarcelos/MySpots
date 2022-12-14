import Link from 'next/link';

const Nav = () => {
  return (
    <nav className='flex h-16 w-full items-center justify-between px-4'>
      <Link href='/' className='text-2xl font-semibold'>
        MySpots
      </Link>
      <ul className='flex h-16 w-auto items-center'>
        <li className='px-4'>
          <Link href='/'>Home</Link>
        </li>
        <li className='px-4'>
          <Link href='/find'>Find a Spot</Link>
        </li>
        <li className='px-4'>
          <Link href='/signin'>Signin</Link>
        </li>
        <li className='px-4'>
          <Link href='/signup'>Signup</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
