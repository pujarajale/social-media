import { useContext, useRef, useState } from "react";
import { PostList } from "./store/post-list-store";
import Alert from "./Alert";
const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const [alertMsg, setAlertMsg] = useState("");

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmt = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = {
      likes: reactionsElement.current.value,
      dislikes: 0,
    };
    const tags = tagsElement.current.value.split(" ");
    setAlertMsg("Post Created Sucessfuly!!!");
    //after add post form will be clear...
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
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

      <form className="create-post" onSubmit={handleSubmt}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter Your User Id
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            placeholder="Enter User Id"
            ref={userIdElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="How are you feeling today..."
            ref={postTitleElement}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            rows="4"
            type="text"
            className="form-control"
            id="body"
            placeholder="Tell us more about it"
            ref={postBodyElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            No of Reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            placeholder="How many people reacted to this post"
            ref={reactionsElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter Your Hashtags Here
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            placeholder="Please enter tags using space"
            ref={tagsElement}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};
export default CreatePost;
