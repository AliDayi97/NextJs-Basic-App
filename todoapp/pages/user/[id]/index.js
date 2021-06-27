import userStyle from "./../../../styles/User.module.css";
import { useState } from "react";
import TodoItem from "../../../components/TodoItem";

export default function User({ userDetails, userTodos }) {
  const [todos, setTodos] = useState(userTodos);

  const completedTodos = () => {
    if (userTodos && userTodos.length > 0) {
      return userTodos.filter((todo) => todo.completed === true);
    }
  };

  const incompletedDotos = () => {
    if (userTodos && userTodos.length > 0) {
      return userTodos.filter((todo) => todo.completed === false);
    }
  };

  const allTodos = () => {
    if (userTodos && userTodos.length > 0) {
      return userTodos;
    }
  };

  return (
    <div className={userStyle.container}>
      <div className={userStyle.userDetailsArea}>
        <div className={userStyle.row}>
          <div className={userStyle.userDetail}>
            <p className={userStyle.titles}>Name</p>
            <p>{userDetails.name}</p>
          </div>

          <div className={userStyle.userDetail}>
            <p className={userStyle.titles}>Username</p>
            <p>{userDetails.username}</p>
          </div>

          <div className={userStyle.userDetail}>
            <p className={userStyle.titles}>Email</p>
            <p>{userDetails.email}</p>
          </div>

          <div className={userStyle.userDetail}>
            <p className={userStyle.titles}>Address</p>
            <p>
              {userDetails.address.street}, {userDetails.address.suite},{" "}
              {userDetails.address.city}
            </p>
          </div>
        </div>

        <div className={userStyle.row}>
          <div className={userStyle.userDetail}>
            <p className={userStyle.titles}>Phone</p>
            <p>{userDetails.phone}</p>
          </div>

          <div className={userStyle.userDetail}>
            <p className={userStyle.titles}>Website</p>
            <p>{userDetails.website}</p>
          </div>

          <div className={userStyle.userDetail}>
            <p className={userStyle.titles}>Company</p>
            <p>{userDetails.company.name}</p>
            <p>{userDetails.company.catchPhrase}</p>
          </div>
        </div>
      </div>

      <hr
        style={{
          border: "1px red solid",
          width: "100%",
          marginTop: "10vh",
        }}
      />
      <div className={userStyle.todosArea}>
        <div>
          <button onClick={() => setTodos(allTodos())}>All</button>
          <button onClick={() => setTodos(completedTodos())}>Completed</button>
          <button onClick={() => setTodos(incompletedDotos())}>
            Incompleted
          </button>
        </div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const userRes = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );

  const todosRes = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}/todos`
  );

  const userDetails = await userRes.json();
  const userTodos = await todosRes.json();

  if (!userDetails || !userTodos) {
    return {
      redirect: {
        destination: "/users",
        permanent: false,
      },
    };
  }

  return {
    props: { userDetails, userTodos },
  };
}
