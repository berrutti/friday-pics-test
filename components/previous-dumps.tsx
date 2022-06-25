import PostPreview from "./post-preview";
import Post from "../types/post";
import PostSmallPreview from "./post-small-preview";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  const firstTen = posts.slice(0, 10);
  const rest = posts.slice(10, posts.length);
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Previous dumps
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {firstTen.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            image={post.image}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {rest.map((post) => (
          <PostSmallPreview
            key={post.slug}
            title={post.title}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
