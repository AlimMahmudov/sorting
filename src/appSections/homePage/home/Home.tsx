"use client";
import { useFileSort } from "@/stores/SortStores";
import { useData } from "./data/Data";
import scss from "./Home.module.scss";

const Home = () => {
  const { selectType, selectCategory } = useFileSort(); // Destructure selectedType and selectedCategory
  const { data } = useData(); // Assuming data contains your products

  const filteredData = data.filter((el) => {
    const matchesType = selectType ? el.type === selectType : true;
    const matchesCategory = selectCategory
      ? el.category === selectCategory
      : true;
    return matchesType && matchesCategory;
  });

  return (
    <div id={scss.Home}>
      <div className="container">
        <div className={scss.home}>
          {filteredData.length === 0 ? (
            <p>No products found</p> // Display a message if no products match the filters
          ) : (
            filteredData.map((el, index) => (
              <div className={scss.text} key={index}>
                <h1>{el.title}</h1>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
