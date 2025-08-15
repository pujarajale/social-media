const WelcomeMsg = ({ onGetPostClick }) => {
  return (
    <center className="center-msg">
      <h1>There are no post.</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostClick}
      >
        Fetch data From server
      </button>
    </center>
  );
};
export default WelcomeMsg;
