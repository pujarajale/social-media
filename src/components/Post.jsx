import { AiFillDelete } from "react-icons/ai";

const Post = ({ post, onDelete }) => {
  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">{post?.title}</h5>

        <span className="delete-icon" onClick={() => onDelete(post.id)}>
          <AiFillDelete />
        </span>

        <p className="card-text">{post?.body}</p>

        {post?.tags?.map((tag) => (
          <span key={tag} className="badge text-bg-primary post-tags">
            {tag}
          </span>
        ))}

        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {post.reactions.likes} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
