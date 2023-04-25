import Container from '../components/container';
import Stories from '../components/stories';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Post from '../interfaces/post';
import Header from '../components/header';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const posts = allPosts;
  return (
    <>
      <Layout>
        <Head>
          <title>94sssh Blog</title>
        </Head>
        <Container>{posts.length > 0 && <Stories posts={posts} />}</Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'coverImage', 'excerpt']);

  return {
    props: { allPosts },
  };
};
