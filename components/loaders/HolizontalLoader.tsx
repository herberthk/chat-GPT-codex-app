import classNames from "classnames";
import styles from "./loader.module.scss";
const HorizontalLoader = () => {
  return (
    <div className={classNames(styles.loader, "mx-auto")}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default HorizontalLoader;
