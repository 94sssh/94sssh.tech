import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';
import type Author from '../interfaces/author';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({ title, coverImage, date, excerpt, author, slug }: Props) => {
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
      <div className='text-lg mb-4'>
        <DateFormatter dateString={date} />
      </div>
      <p className='text-base leading-relaxed mb-4'>{excerpt}</p>
    </div>
  );
};

export default PostPreview;
