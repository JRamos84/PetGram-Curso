import React from "react";

import { ImgWrapper, Button, Img, Article } from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import FavButton from "../FavButton";
import { Link } from "react-router-dom";
import useToggleLikeMutation from "../container/useToggleLikeMutation.js";
import { useNearScreen } from "../hooks/useNearScreen";

const Default_Image =
  "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg";
export const PhotoCard = ({ id,liked, likes = 0, src = Default_Image }) => {
  const { like_photo, data, loading, error } = useToggleLikeMutation();
  const [show, element] = useNearScreen()

  const handleFavClick = () => {
    like_photo({
      variables: {
        input: { id },
      },
    });
  };

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="" />
            </ImgWrapper>
          </Link>
          <FavButton
            loading={loading}
            error={error}
            liked={liked}
            likes={likes}
            id={id}
            onClick={handleFavClick}
          />
        </>
      )}
    </Article>
  );
};
