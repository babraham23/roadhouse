export interface Product {
    title: string;
    subtitle: string;
    color1: string;
    color2: string;
    picture: number;
  }

  export const products = [
    {
      title: "Ham Burgers",
      subtitle: "Big Macs and Cheese Burgers",
      color1: "#eeeeee",
      color2: "#0033A0",
      picture: require("../assets/burgeKing/bk1.png"),
      aspectRatio: 1,
    },
  
    {
      title: "Fries",
      subtitle: "Large, Medium, Small",
      color1: "#eeeeee",
      color2: "#DA291C",
      picture: require("../assets/mcdonalds/fries.png"),
      aspectRatio: 1,
    },
    {
      title: "Coffee",
      subtitle: "Scolding hot shit",
      color1: "#eeeeee",
      color2: "#F2A900",
      picture: require("../assets/mcdonalds/coldbrew.png"),
      aspectRatio: 1,
    },
    {
      title: "Plant Based",
      subtitle: "Large, No cream, No sugar, Iced",
      color1: "#40824A",
      color2: "#B2D886",
      picture: require("../assets/mcdonalds/chicken.png"),
      aspectRatio: 1,
    },
    {
      title: "Nuggets?",
      subtitle: "Flaky perfection, baked fresh daily",
      color1: "#E2DDD1",
      color2: "#F3F1ED",
      picture: require("../assets/mcdonalds/nuggets.png"),
      aspectRatio: 757 / 735,
    },
  ];
  /*
  
    {
      title: "More Cold Brew to Love",
      subtitle: "32oz bottle now available",
      color1: "#FEAC00",
      color2: "#FDC946",
      picture: require("./assets/coldbrew2.png"),
      aspectRatio: 719 / 277,
    },*/
  