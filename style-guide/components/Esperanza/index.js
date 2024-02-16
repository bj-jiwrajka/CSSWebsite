import React from "react";
import ImageItem from "./ImageItem";
import styles from "./styles.module.css";

const Esperanza = () => {
  const path1 = "./images/cultural/";
  const images1 = [
    ["1", "CSS Orientation"],
    ["2", "CSS Orientation"],
    ["3", "CSS Orientation"],
    ["4", "CSS Orientation"],
    ["5", "CSS Orientation"],
  ];

  const path2 = "./images/esperanza/";
  const images2 = [1, 2, 3, 7, 4, 6, 8, 5, 9, 31];

  return (
    <div className={styles.wrapper}>
      {images1.map((image, ind) => (
        <ImageItem
          key={ind}
          src={path1 + image[0] + "-min.jpg"}
          alt="image"
          title={image[1]}
        />
      ))}

      {images2.map((image, ind) => (
        <ImageItem
          key={ind + images1.length}
          src={path2 + image + "-min.jpg"}
          alt="image"
          title="Esperanza"
        />
      ))}
    </div>
  );
};

export default Esperanza;
