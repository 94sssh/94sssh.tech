type Props = {
  name: string;
  picture: string;
};

const TechIcon = ({ name, picture }: Props) => {
  return (
    <div className='flex items-center'>
      <img
        src={picture}
        className='w-10 h-10 rounded-lg

mr-4'
        alt={name}
      />
      <div className='text-xl font-bold'>{name}</div>
    </div>
  );
};

export default TechIcon;
