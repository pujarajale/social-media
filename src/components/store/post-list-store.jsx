import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    console.log(action.payload.postId);
    newPostList = currentPostList.filter((post) => {
      console.log(currentPostList);
      return post.id !== action.payload.postId;
    });
  }
  console.log(newPostList);
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = () => {};

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId: postId,
      },
    });
  };

  return (
    <>
      <PostList.Provider
        value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
      >
        {children}
      </PostList.Provider>
    </>
  );
};

export default PostListProvider;

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to mumbai",
    body: "Hii, friends , im going to mumbai.",
    reactions: 4,
    userId: "user-g",
    tags: ["vacation", "mumbai", "enjoying"],
  },
  {
    id: "2",
    title: "B.E. Graduated ",
    body: "Hii, friends , I got graduated degree. im so happy bcoz completed degree.",
    reactions: 2,
    userId: "user-b",
    tags: ["graduation", "pass"],
  },
];
