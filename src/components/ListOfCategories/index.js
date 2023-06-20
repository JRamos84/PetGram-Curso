import React, { useState, useEffect } from "react";
import { List, Item } from "./styles";
import { Category } from "../Category";

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loanding, setLoanding] = useState(false);
  useEffect(function () {
    setLoanding(true);
    fetch("https://petgram-server-joseph0001-jramos84.vercel.app/categories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
        setLoanding(false);

      });
  }, []);
  return { categories, loanding };
}

 const ListOfCategoriesComponent = () => {
  const { categories, loanding } = useCategoriesData();
  const [showFixed, setShoFixed] = useState(false);

  useEffect(
    function () {
      const onScroll = (e) => {
        const newshowFixed = window.scrollY > 200;
        showFixed !== newshowFixed && setShoFixed(newshowFixed);
      };
      document.addEventListener("scroll", onScroll);

      return () => document.removeEventListener("scroll", onScroll);
    },
    [showFixed]
  );

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loanding ? (
        <Item key={"loading"}>
          <Category />
        </Item>
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))
      )}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};


export const ListOfCategories = React.memo(ListOfCategoriesComponent)