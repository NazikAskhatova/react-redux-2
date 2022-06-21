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
const outputPosts = posts.map((post) => <p key={post.id}>{post.name}</p>);

  return <ul className="App">{output}
  <article>{outputPosts}</article>
 
  </ul> 
}

export default App;
