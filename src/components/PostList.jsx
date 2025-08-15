import { useContext, useState } from "react";
import { PostList as PostListData } from "./store/post-list-store";
import Post from "./Post";
import Alert from "./Alert";
import WelcomeMsg from "./WelcomeMsg";

const PostList = () => {
  const { postList, addInitialPosts, deletePost } = useContext(PostListData);
  const [alertMsg, setAlertMsg] = useState("");

  const handleDelete = (id) => {
    deletePost(id);
    setAlertMsg("Post Deleted Sucessfuly!!!");
    setTimeout(() => setAlertMsg(""), 1000); // hide after 1000 seconds
  };

  const handleGetPostClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((res) => addInitialPosts(res.posts));
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
      {postList.length === 0 && (
        <WelcomeMsg onGetPostClick={handleGetPostClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} onDelete={handleDelete} />
      ))}
    </>
  );
};

export default PostList;
