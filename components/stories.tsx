import PostPreview from './post-preview';
import type Post from '../interfaces/post';

type Props = {
  posts: Post[];
};

const Stories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className='mb-8 text-4xl md:text-5xl font-black tracking-tighter leading-tight'>Stories</h2>
      <div className='mb-32'>
        {posts.map((post) => (
          <PostPreview key={post.slug} title={post.title} coverImage={post.coverImage} date={post.date} slug={post.slug} excerpt={post.excerpt} />
        ))}
      </div>
    </section>
  );
};

export default Stories;
