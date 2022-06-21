import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "./postsSlice";
import { loadUsers } from "./usersSlice";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users.users);
  const posts = useSelector((store) => store.posts.posts);
  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  const output = users.map((user) => <li key={user.id}>{user.name}</li>);
  const outputPosts = posts.map((post) => <h5 key={post.body}>{post.title}</h5>);

  return (
    <ul className="App">
      {output}
      <hr/>
      <article>{outputPosts}</article>
    </ul>
  );
}

export default App;
