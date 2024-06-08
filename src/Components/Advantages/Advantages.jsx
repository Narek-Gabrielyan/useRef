import React, {forwardRef} from "react";

// css
import cssAdvantages from "./Advantages.module.css";

export const Advantages = forwardRef(function (_, ref) {
    return (
      <div ref={ref} className={cssAdvantages.Advantages}>
        <h2>Advantages</h2>
      </div>
    );
});
