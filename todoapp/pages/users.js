import UserItem from "../components/UserItem";
import * as usersStyle from "../styles/Users.module.css";

export default function Users({ users }) {
  return (
    <div className={usersStyle.container}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export async function getStaticProps({ users }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { users: data }, // will be passed to the page component as props
  };
}
