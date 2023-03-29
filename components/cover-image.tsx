import Link from 'next/link';
import Image from 'next/image';

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = <Image src={src} alt={`Cover Image for ${title}`} className={'rounded-lg w-full h-full'} width={480} height={480} />;
  return (
    <>
      {slug ? (
        <Link as={`/posts/${slug}`} href='/posts/[slug]' aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </>
  );
};

export default CoverImage;
