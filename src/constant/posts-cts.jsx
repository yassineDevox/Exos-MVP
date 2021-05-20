import React from "react";
import PostModel from "../models/model-post";
import SubjectEnum from "../models/enum-subjects";
import LevelStudyEnum from "../models/enum-level";
import  PostItem  from "../components/post/item";

const POSTS = [
  {
    ...new PostModel(
      "assets/images/y.jpg",
      "/assets/images/exerice1.png",
      "10h",
      " Besoin de la solution de l'exercice 4 en matrice svp !",
      "jawadi",
      "zouhair",
      SubjectEnum.MATH,
      LevelStudyEnum.BAC_2,
      "2",
      "10",
      "0",
      "pub1",
      "image",
      "ui1"
    ),
  },
  {
    ...new PostModel(
      "/src/assets/images/y.jpg",
      "/src/assets/images/exerice1.png",
      "1d",
      " Besoin de la solution de l'exercice 5 en Fonctions svp !",
      "toumi",
      "kamal",
      SubjectEnum.MATH,
      LevelStudyEnum.BAC_2,
      2,
      10,
      0,
      "pub2",
      "image",
      "ui2"
    ),
  },
];

export default function ListPost() {
  return POSTS.map((p, i) => <PostItem key={i} post={p} />);
}
