import Pic from "../types/pic";
import Picture from "./picture";

type Props = {
  pics: Pic[];
};

const PostBody = ({ pics }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      {pics.map((pic) => (
        <Picture key={pic.imageUrl} pic={pic} />
      ))}
    </div>
  );
};

export default PostBody;
