import Link from "next/link";
import * as userItemStyle from "../styles/UserItem.module.css";

export default function UserItem({ user }) {
  return (
    <div className={userItemStyle.container}>
      <Link href={`/user/${user.id}`}>{user.name}</Link>
    </div>
  );
}
