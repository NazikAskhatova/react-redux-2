import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "./postsSlice";
import { loadUsers } from "./usersSlice";
import { loadTodos } from "./todosSlice";


function App() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users.users);
  const posts = useSelector((store) => store.posts.posts);
  const todos = useSelector((store) => store.todos.todos);
  
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  const output = users.map((user) => <li key={user.id}>{user.name}</li>);
  const outputPosts = posts.map((post) => <h5 key={post.body}>{post.title}</h5>);
  const outputTodos = todos.map((todo) => <div key={todo.title}>{todo.comlited}</div>);

  return (
    <ul className="App">
      {output}
      <hr/>
      <article>{outputPosts}</article>
      <hr/>
    <>{outputTodos}</>
    </ul>
  );
}

export default App;
