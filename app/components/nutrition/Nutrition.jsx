"use client";
import React from "react";
import { useState } from "react";
import Nutri from "./Nutrition.module.css";
import LargeDivider from "../labelDividers/LargeDivider";
import MediumDivider from "../labelDividers/MediumDivider";
import ThinDivider from "../labelDividers/ThinDivider";

const Nutrition = () => {
  const [inputText, setInputText] = useState();
  const [apiResult, setApiResult] = useState();

  async function buttonPress(e) {
    e.preventDefault();
    // console.log(inputText);
    const id = "2fd99e61";
    const key = "96e61a7ec4e69fccadeb8daf3c7ef874";
    const temporary = await fetch(
      `https://api.edamam.com/api/food-database/v2/parser?app_id=${id}&app_key=${key}&ingr=${inputText}&nutrition-type=cooking`
    );
    const result = await temporary.json();
    // console.log(result);
    setApiResult(result);
  }
  //   console.log(apiResult);
  //   console.log(apiResult.parsed[0].food.nutrients);

  let nutrients = apiResult ? apiResult.parsed[0].food.nutrients : "null";

  return (
    <section className={Nutri.section}>
      <form onSubmit={buttonPress}>
        <input
          className={Nutri.input}
          placeholder="Feed me..."
          onChange={(e) => setInputText(e.target.value)}
        ></input>
        <button className={Nutri.searchButton}>Search</button>
      </form>

      <div className={Nutri.container}>
        <h1>Nutrition Facts</h1>
        <div className={Nutri.servingSize}>
          <p>Serving size</p>
          <p>100gr</p>
        </div>
        <LargeDivider />
        <div className={Nutri.caloriesLine}>
          <p>Calories</p>
          <p className={Nutri.calories}>
            {nutrients ? nutrients.ENERC_KCAL : "--"}
          </p>
        </div>
        {/* <div className={Nutri.dividerSmall}></div> */}
        <MediumDivider />
        <div className={Nutri.macrosMajor}>
          <p>Total fat</p>
          <p>{nutrients ? nutrients.FAT : "--"}</p>
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
          <p>{nutrients ? nutrients.CHOCDF : "--"}</p>
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
          <p>{nutrients ? nutrients.PROCNT : "--"}</p>
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
