
// css
import cssHeader from "./Header.module.css";

export const Header = function ({ coursesScroll, advantagesScroll }) {
  return (
    <div className={cssHeader.Header}>
      <button onClick={coursesScroll}>Courses</button>
      <button onClick={advantagesScroll}>Advantages</button>
    </div>
  );
};