import PostPreview from './post-preview';
import type Post from '../interfaces/post';

type Props = {
  posts: Post[];
};

const Posts = ({ posts }: Props) => {
  return (
    <section>
      <h2 className='mb-8 text-5xl md:text-[4rem] font-black tracking-tighter leading-tight'>Posts</h2>
      <div className='mb-32'>
        {posts.map((post) => (
          <PostPreview key={post.slug} title={post.title} coverImage={post.coverImage} date={post.date} slug={post.slug} excerpt={post.excerpt} />
        ))}
      </div>
    </section>
  );
};

export default Posts;
