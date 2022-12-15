import Link from 'next/link';

const Nav = () => {
  return (
    <nav className='container relative mx-auto p-4'>
      <div className='flex items-center justify-between'>
        <Link href='/' className='text-2xl font-semibold'>
          MySpots
        </Link>
        {/* space-x-6 adds 1.5rem space between each link. md:flex says only show this container on medium or larger screens (TW is mobile-first) */}
        <div className='hidden space-x-6 md:flex'>
          <Link href='/' className='hover:text-orange-700'>
            Home
          </Link>
          <Link href='/find' className='hover:text-orange-700'>
            Spots
          </Link>
          <Link href='/signin' className='hover:text-orange-700'>
            Sign In
          </Link>
          <Link href='/signup' className='hover:text-orange-700'>
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
