import Image from "next/image";
import Link from "next/link";

import Pic from "../types/pic";

type Props = {
  pic: Pic;
};

const Picture = ({ pic }: Props) => {
  return (
    <div className="card">
      <div style={{ height: "75vh", position: "relative" }}>
        <Image
          layout="fill"
          src={pic.imageUrl}
          alt={pic.postTitle}
          title={pic.postTitle}
        />
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">
              Title:{" "}
              <Link href={pic.postUrl}>
                <a href={pic.postUrl}>{pic.postTitle}</a>
              </Link>
            </p>
            <p className="subtitle is-4">Posted by: {pic.op}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Picture;
