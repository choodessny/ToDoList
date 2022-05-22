import styles from "./styles.module.scss";
import classNames from "classnames";
import { useMemo } from "react";
import getRandomColor from "../../utils/getRandomColor";
import Cat from "../Cat/Cat";
import trash from "../../resources/trash-can-solid.svg";

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
        <div className={classNames(styles.container_for_delete)}>
          <div className={styles.checkboxContainergit}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => onChange(!item.checked)}
            />
            {item.text}
          </div>
          {item.checked && (
            <img className="trash" src={trash} onClick={onDelete} />
          )}
        </div>
      </div>
    </>
  );
};

export default Item;
