import { Fragment, useEffect, useState } from "react";
import "./App.css";
import { UserList } from "./components/UserList";
import { Accordion } from "./components/Accordion";
import axios from "axios";

function App() {
  const [components, setComponents] = useState("");
  const [userList, setUserList] = useState([]);

  const showUserLIst = function () {
    setComponents((prev) => (prev = "users"));
  };

  const showAccordion = function () {
    setComponents((prev) => (prev = "accordion"));
  };

  const fetchUserList = function () {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        const userData = response.data;
        setUserList(userData);
      });
    // const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    // const data = await response.json();
    // setUserList(data);
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <Fragment>
      <div className="btns-container">
        <button className="main-btns" onClick={showUserLIst}>User List</button>
        <button className="main-btns" onClick={showAccordion}>Accordion</button>
      </div>
      <div>
        {components === "users" && <UserList userList={userList} setUserList={setUserList} />}
        {components === "accordion" && <Accordion />}
      </div>
    </Fragment>
  );
}

export default App;
