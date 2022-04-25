import { images } from "../../resource/images";

const getCatImage = (category) => {
  switch (category) {
    case "Produce":
      return images.saladImg;
    case "Meat":
      return images.steakImg;
    case "Snacks":
      return images.donutImg;
    case "Baked Goods":
      return images.croissantImg;
    case "Desserts":
      return images.chocolateImg;
  }
};

export default getCatImage;
