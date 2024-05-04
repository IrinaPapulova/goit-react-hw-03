import { FcBusinessman } from "react-icons/fc";
import { FaSquarePhone } from "react-icons/fa6";

import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <ul className={css.card}>
        <li className={css.item}>
          <FcBusinessman className={css.iconName} />
          {name}
        </li>

        <li className={css.item}>
          <FaSquarePhone className={css.iconPhone} />
          {number}
        </li>
      </ul>
      <button className={css.btn} onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
