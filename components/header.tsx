import Link from 'next/link';

const Header = () => {
  return (
    <header className='mt-8 mb-20 flex justify-between sm:max-w-screen-sm md:max-w-screen-md mx-auto'>
      <h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight'>
        <Link href='/'>94sssh</Link>.
      </h2>
      <div className='flex justify-center'>
        <p className='m-2'>
          <Link href='/'>소개</Link>
        </p>
        <p className='m-2'>
          <Link href='/'>블로그</Link>
        </p>
      </div>
    </header>
  );
};

export default Header;
