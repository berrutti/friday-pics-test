import CoverImage from "./cover-image";
import Link from "next/link";

type Props = {
  title: string;
  slug: string;
};

const PostSmallPreview = ({ title, slug }: Props) => {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
    </div>
  );
};

export default PostSmallPreview;
