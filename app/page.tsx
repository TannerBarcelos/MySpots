import Image from 'next/image';
import Link from 'next/link';
import findImage from '../public/images/landing-img.avif';

export default function Home() {
  return (
    <main>
      <div className='container mx-auto flex flex-col-reverse items-center space-y-0 px-4 md:flex-row md:space-y-10'>
        <div className='mb-30 flex flex-col space-y-8 md:w-1/2'>
          <h1 className='max-w-md text-center text-4xl font-bold md:text-left md:text-5xl'>
            Never forget a spot again
          </h1>
          <p className='max-w-md text-center text-gray-600 md:text-left'>
            Find, favorite and save your favorite spots in just a couple clicks.
          </p>
          <div className='flex justify-center md:justify-start'>
            <Link
              href='/find'
              className='rounded-xl bg-orange-600 p-3 px-6 text-white hover:bg-orange-700'
            >
              Find a spot
            </Link>
          </div>
        </div>
        <div className='md:w-1/2'>
          <Image
            alt='landing image'
            src={findImage}
            className='w-200 h-200 rounded-xl'
          />
        </div>
      </div>
    </main>
  );
}
