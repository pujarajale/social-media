import { useContext, useState } from "react";
import { PostList as PostListData } from "./store/post-list-store";
import Post from "./Post";
import Alert from "./Alert";

const PostList = () => {
  const { postList, deletePost } = useContext(PostListData);
  const [alertMsg, setAlertMsg] = useState("");

  const handleDelete = (id) => {
    deletePost(id);
    setAlertMsg("Post Deleted Sucessfuly!!!");
    setTimeout(() => setAlertMsg(""), 1000); // hide after 1000 seconds
  };

  return (
    <>
      {alertMsg && (
        <Alert
          message={alertMsg}
          type="success"
          onClose={() => setAlertMsg("")}
        />
      )}

      {postList.map((post) => (
        <Post key={post.id} post={post} onDelete={handleDelete} />
      ))}
    </>
  );
};

export default PostList;
