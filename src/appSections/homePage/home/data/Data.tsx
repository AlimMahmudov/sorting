import React from "react";
export const useData = () => {
  const data = [
    {
      title: "Мухаммед Кыргыз",
      image:
        "https://img.labirint.ru/rcimg/b6f3a71396cc959ae0fcd09d9e15391e/1920x1080/comments_pic/2131/origin_0_cfd530fdc378e30c3143abec23da6d79.jpg?1628096450",
      type: "stories",
      category: "domestic",
    },
    {
      title: "Джамиля",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5LQg2RUQtF3G3GQzLuGQGEb5sGcxp2safZQ&s",
      type: "classic",
      category: "domestic",
    },

    {
      title: "Жестокий век",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWVPshb91JbKbdUw8WJbHJkuXTRi5MPXygBQ&s",
      type: "stories",
      category: "foreign",
    },
    {
      title: "Шерлок Холмс",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT71UsBSWKGdHp-6BOHlyzLAinQOqjktOrLSg&s",
      type: "classic",
      category: "foreign",
    },
    {
      title: "Хоббит",
      image: "https://imo10.labirint.ru/books/628074/cover.jpg/242-0",
      type: "fantasy",
      category: "foreign",
    },
  ];
  return { data };
};
