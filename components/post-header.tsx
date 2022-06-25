import PostTitle from "./post-title";
import Author from "../types/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
    </>
  );
};

export default PostHeader;
