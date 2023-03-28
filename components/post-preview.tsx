import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({ title, coverImage, date, excerpt, slug }: Props) => {
  return (
    <div className='bg-blue-500'>
      <div className='mb-5'>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className='text-xl font-bold mb-3 leading-snug'>
        <Link as={`/posts/${slug}`} href='/posts/[slug]' className='hover:underline'>
          {title}
        </Link>
      </h3>
      <p className='text-base leading-relaxed mb-4'>{excerpt}</p>
      <div className='text-lg mb-4'>
        <DateFormatter dateString={date} />
      </div>
    </div>
  );
};

export default PostPreview;
