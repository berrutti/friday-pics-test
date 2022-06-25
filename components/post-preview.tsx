import CoverImage from "./cover-image";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
  date: string;
  slug: string;
};

const PostPreview = ({ title, image, date, slug }: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={image} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
    </div>
  );
};

export default PostPreview;
