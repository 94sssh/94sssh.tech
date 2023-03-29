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
    <div className='flex flex-row mb-16'>
      <div className='w-48 h-48 overflow-hidden'>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className='flex flex-col justify-center ml-8 max-w-lg'>
        <h3 className='text-2xl font-bold leading-snug w-full mb-2'>
          <Link as={`/posts/${slug}`} href='/posts/[slug]' className='hover:text-blue-500 text-[#0112C5]'>
            {title}
          </Link>
        </h3>
        <p className='text-lg leading-relaxed text-slate-800 overflow-hidden max-h-24'>{excerpt}</p>
        <div className='text-base text-slate-600'>
          <DateFormatter dateString={date} />
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
