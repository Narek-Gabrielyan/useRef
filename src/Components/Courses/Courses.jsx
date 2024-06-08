import React, {forwardRef} from "react";

// css
import cssCourses from "./Courses.module.css";

export const Courses = forwardRef(function (_, ref) {
    return (
      <div ref={ref} className={cssCourses.Courses}>
        <h2>Programming courses</h2>
        <p>Programming courses for beginners</p>
      </div>
    );
});