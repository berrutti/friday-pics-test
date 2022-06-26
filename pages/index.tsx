import { useRouter } from "next/router";
import { useEffect } from "react";

import Post from "../types/post";

import { getAllPosts } from "../lib/api";

type Props = {
  date: Post;
};

const Index = ({ date }: Props) => {
  const router = useRouter();
  const latestPostPath = `/${date}`;
  useEffect(() => {
    router.push(latestPostPath);
  }, [router, latestPostPath]);

  return <></>;
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts();
  const date = allPosts[0].date;
  return {
    props: { date },
  };
};
