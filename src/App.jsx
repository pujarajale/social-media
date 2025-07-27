import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";

const App = () => {
  return (
    <>
      <div className="app-container">
        <Sidebar></Sidebar>
        <div className="content">
          <Header></Header>
          <CreatePost></CreatePost>
          <PostList></PostList>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default App;
