import { getAllPosts } from "../lib/api";
import Post from "../types/post";
import { useRouter } from "next/router";
import { useEffect } from "react";

type Props = {
  latestPost: Post;
};

const Index = ({ latestPost }: Props) => {
  const router = useRouter();
  useEffect(() => {
    router.push(`/${latestPost.slug}`);
  }, [router, latestPost]);

  return <></>;
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["slug"]);
  const latestPost = allPosts[0];
  return {
    props: { latestPost },
  };
};
