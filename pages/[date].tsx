import Head from "next/head";
import ErrorPage from "next/error";
import { useRouter } from "next/router";

import { getPostByFilename, getAllPosts } from "../lib/api";

import Container from "../components/container";
import PostBody from "../components/post-body";
import Header from "../components/header";
import Layout from "../components/layout";
import PostTitle from "../components/post-title";

import Post from "../types/post";

type Props = {
  post: Post;
  morePosts: Post[];
  preview?: boolean;
};

const Post = ({ post, morePosts }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.date) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{post.date} | Friday Pics!</title>
                <meta property="og:image" content={post.preview} />
              </Head>
              <PostTitle>{post.date}</PostTitle>
              <PostBody pics={post.pics} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    date: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostByFilename(`${params.date}.json`);
  const allPosts = getAllPosts();

  return {
    props: {
      post,
      morePosts: allPosts,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post: any) => {
      return {
        params: {
          date: post.date,
        },
      };
    }),
    fallback: false,
  };
}
