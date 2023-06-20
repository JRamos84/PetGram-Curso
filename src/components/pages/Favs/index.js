import React from "react";
import { useGetFavPhotos } from "../../container/useGetFavPhotos";
import ListOfFavs from "../../ListOfFavs";
import { Layaout } from "../../Layaout";

export default  () => {
  const { loanding, data, error } = useGetFavPhotos();
  if (loanding) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  if (!data) {
    console.log(data);
    return <p>data vacia</p>;
  }
  const { favs } = data;
  console.log(favs);
  return(
    <Layaout title={'Mis Mascotas Favorita'} subtitle={"Tus mascotas favorita"}>
      <ListOfFavs favs={favs} />
    </Layaout>
  )
};


