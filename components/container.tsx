type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className='w-full max-w-screen-md mx-auto px-5'>{children}</div>;
};

export default Container;
