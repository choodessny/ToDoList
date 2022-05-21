import styles from "./styles.module.scss";
import classNames from "classnames";
import { useMemo } from "react";
import getRandomColor from "../../utils/getRandomColor";
import Cat from "../Cat/Cat";

const Item = ({ item, onDelete, onChange }) => {
  const color = useMemo(() => getRandomColor(), []);
  return (
    <>
      {!item.checked && <Cat />}
      <div
        className={classNames(styles.item, {
          [styles.checked]: item.checked,
        })}
        style={{ color }}
      >
        {item.text}
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => onChange(!item.checked)}
        />
        {item.checked && <button onClick={onDelete}>Удалить</button>}
      </div>
    </>
  );
};

export default Item;
