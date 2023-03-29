import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <div className='mb-8 sm:mx-0'>
        <CoverImage title={title} src={coverImage} />
      </div>
      <PostTitle>{title}</PostTitle>
      <div className='max-w-2xl text-base text-slate-600'>
        <DateFormatter dateString={date} />
      </div>
    </>
  );
};

export default PostHeader;
