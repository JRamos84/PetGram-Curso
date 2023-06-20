import React from "react";
import { useParams } from "react-router-dom";
import { ListOfCategories } from "../../ListOfCategories";
import { ListOfPhotoCards } from "../../container/ListOfPhotoCards";
import { Layaout } from "../../Layaout";
export default  () => {
  const { id } = useParams();
  console.log("home", id);

  return (
    <Layaout title={'Petgram - Tu fotos de mascotas'}
    subtitle={"Con Petgram puedes encontrar fotos de anomales domésticos muy bonitos"}>

      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layaout>
  );
};

