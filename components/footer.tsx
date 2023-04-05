const Footer = () => {
  return (
    <footer className='bg-white border-t border-neutral-200 sm:max-w-screen-sm md:max-w-screen-md mx-auto'>
      <div className='py-8 flex lg:flex-row items-center justify-between'>
        <h3 className='text-2xl lg:text-3xl items-center font-bold tracking-tighter leading-tight lg:mb-0 lg:pr-4 lg:w-1/2'>94sssh TechBlog</h3>
        <div className='flex lg:flex-row justify-end items-center lg:pl-4'>
          <a href={`https://github.com/94sssh`} className='mx-3 font-bold'>
            Visit GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
