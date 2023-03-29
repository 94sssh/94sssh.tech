type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className='w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto px-5'>{children}</div>;
};

export default Container;
