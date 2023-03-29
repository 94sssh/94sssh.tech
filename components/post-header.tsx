import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';

type Props = {
  title: string;
  thumbnailImage: string;
  date: string;
};

const PostHeader = ({ title, thumbnailImage, date }: Props) => {
  return (
    <>
      <div className='border-2 border-green-500 mb-8 sm:mx-0 h-64 flex justify-center'>
        <CoverImage title={title} src={thumbnailImage} />
      </div>
      <PostTitle>{title}</PostTitle>
      <div className='max-w-2xl mb-12 text-base text-slate-600'>
        <DateFormatter dateString={date} />
      </div>
    </>
  );
};

export default PostHeader;
