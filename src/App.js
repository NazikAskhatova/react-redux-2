import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUsers } from "./usersSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return <div className="App"></div>;
}

export default App;
