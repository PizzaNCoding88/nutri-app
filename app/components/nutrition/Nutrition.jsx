import React from "react";
import Nutri from "./Nutrition.module.css";
import LargeDivider from "../labelDividers/LargeDivider";
import MediumDivider from "../labelDividers/MediumDivider";
import ThinDivider from "../labelDividers/ThinDivider";

const Nutrition = () => {
  return (
    <section className={Nutri.section}>
      <div className={Nutri.container}>
        <h1>Nutrition Facts</h1>
        <div className={Nutri.servingSize}>
          <p>Serving size</p>
          <p>1 slice</p>
        </div>
        <LargeDivider />
        <div className={Nutri.caloriesLine}>
          <p>Calories</p>
          <p className={Nutri.calories}>240</p>
        </div>
        {/* <div className={Nutri.dividerSmall}></div> */}
        <MediumDivider />
        <div className={Nutri.macrosMajor}>
          <p>Total fat</p>
          <p>4g</p>
        </div>
        <ThinDivider />
        <div className={Nutri.macrosMinor}>
          <p>Saturated Fat</p>
          <p>1.5g</p>
        </div>
        <ThinDivider />
        <div className={Nutri.macrosMinor}>
          <p>Trans Fat</p>
          <p>0g</p>
        </div>
        <ThinDivider />
        <div className={Nutri.macrosMajor}>
          <p>Total Carbohydrates</p>
          <p>46g</p>
        </div>
        <ThinDivider />
        <div className={Nutri.macrosMinor}>
          <p>Sugars</p>
          <p>4g</p>
        </div>
        <ThinDivider />
        <div className={Nutri.macrosMinor}>
          <p>Fibre</p>
          <p>7g</p>
        </div>
        <ThinDivider />
        <div className={Nutri.macrosMajor}>
          <p>Protein</p>
          <p>11g</p>
        </div>
        <LargeDivider />
        <div className={Nutri.micros}>
          <p>Salt</p>
          <p>3g</p>
        </div>
      </div>
    </section>
  );
};

export default Nutrition;
