"use client";
import { useFileSort } from "@/stores/SortStores";
import React from "react";
import scss from "./Sort.module.scss";

const Sort = () => {
  const {
    selectType,
    selectCategory,
    setSelectCategory,
    setSelectType,
    resetFile,
  } = useFileSort();

  const TypeClick = (type: string) => {
    setSelectType(selectType === type ? "" : type);
  };

  const CategoryClick = (type: string) => {
    setSelectCategory(selectCategory === type ? "" : type);
  };

  const buttonStyle = (isSelected: boolean) => ({
    background: isSelected ? "#007bff" : "#e0e0e0",
    color: isSelected ? "#fff" : "#000",
    padding: "10px 20px",
    margin: "5px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  });

  return (
    <div id={scss.Sort}>
      <div className="container">
        <div className={scss.sort}>
          <div>
            <button
              style={buttonStyle(selectType === "stories")}
              onClick={() => TypeClick("stories")}
            >
              stories
            </button>
            <button
              style={buttonStyle(selectType === "classic")}
              onClick={() => TypeClick("classic")}
            >
              classic
            </button>
            <button
              style={buttonStyle(selectType === "fantasy")}
              onClick={() => TypeClick("fantasy")}
            >
              fantasy
            </button>
            <button
              style={buttonStyle(selectCategory === "domestic")}
              onClick={() => CategoryClick("domestic")}
            >
              Отечественные
            </button>
            <button
              style={buttonStyle(selectCategory === "foreign")}
              onClick={() => CategoryClick("foreign")}
            >
              Зарубежные
            </button>
            <button onClick={resetFile} style={buttonStyle(false)}>
              Все
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sort;
