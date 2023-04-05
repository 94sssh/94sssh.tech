type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className='w-full sm:max-w-screen-sm md:max-w-screen-[684px] mx-auto px-5'>{children}</div>;
};

export default Container;
