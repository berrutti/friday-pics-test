import Pic from "../types/pic";

type Props = {
  pics: Pic[];
};

const PostBody = ({ pics }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      {pics.map((pic) => (
        <div key={pic.postUrl}>{pic.imageUrl}</div>
      ))}
    </div>

    /*
      <div class="card">
        <div class="card-image">
          <img class="post-img" src="https://i.redd.it/ovwcm4jqui391.gif" alt="MRW Im a single 39 year old man eating Chinese food alone in my boxers on a Friday night" title="MRW Im a single 39 year old man eating Chinese food alone in my boxers on a Friday night" />
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">
                Title: <a href="https://www.reddit.com/r/reactiongifs/comments/v4fw0e/mrw_im_a_single_39_year_old_man_eating_chinese/">MRW Im a single 39 year old man eating Chinese food alone in my boxers on a Friday night</a>
              </p>
              <p class="subtitle is-4">Posted by: /u/POTUSXanderCrews</p>
            </div>
          </div>
        </div>
      </div>
    */
  );
};

export default PostBody;
