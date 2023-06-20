import React from "react";
import "./styles.js";
import {  Button } from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";


const FavButton = ({ liked, likes, id, onClick, loading, error }) => {
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button onClick={onClick}>
      <Icon size="32px" />
      {likes} likes!
    </Button>
  );
};

export default FavButton;
