import restaurant1 from "./img/restaurant1.png";
import restaurant2 from "./img/restaurant2.png";
import restaurant3 from "./img/restaurant3.jpeg";
import restaurant4 from "./img/restaurant4.jpeg";
import foodA1 from "./img/foodA1.png";
import foodA2 from "./img/foodA2.png";
import foodA3 from "./img/foodA3.png";
import foodB1 from "./img/foodB1.png";
import foodB2 from "./img/foodB2.png";
import foodB3 from "./img/foodB3.png";
import foodC1 from "./img/foodC1.png";
import foodC2 from "./img/foodC2.png";
import foodC3 from "./img/foodC3.png";
import foodD1 from "./img/foodD1.png";
import foodD2 from "./img/foodD2.png";
import foodD3 from "./img/foodD3.png";

export const restaurants = [
    {   
        id: 1,
        image: restaurant1,
        location: "Futuristic land",
        name: "Pixelfood",
        maininfo: "Pixelfood offers a warm and inviting dining experience that celebrates the rich flavors of Western cuisine.",
        itemimage1: foodA1,
        iteminfo1: "Pixel Burger",
        itemprice1: 40,
        itemimage2: foodA2,
        iteminfo2: "Pixel Steak",
        itemprice2: 60,
        itemimage3: foodA3,
        iteminfo3: "Pixel Healthy Set",
        itemprice3: 80,
    },
    {   
        id: 2,
        image: restaurant2,
        location: "Dystopian World",
        name: "Griddiner",
        maininfo: "Welcome to The Griddiner, where culinary abundance meets warm hospitality in a vibrant, family-friendly setting.",
        itemimage1: foodB1,
        iteminfo1: "Chinese Buffet",
        itemprice1: "300 per person",
        itemimage2: foodB2,
        iteminfo2: "Western Buffet",
        itemprice2: "300 per person",
        itemimage3: foodB3,
        iteminfo3: "Fusion Buffet",
        itemprice3: "300 per person",
    },
    {   
        id: 3,
        image: restaurant3,
        location: "High-tech centre",
        name: "Synthfood",
        maininfo: "Savor expertly crafted dishes such as fresh sushi and flavorful ramen, all prepared with high-quality ingredients. ",
        itemimage1: foodC1,
        iteminfo1: "Japanese Beef Rice",
        itemprice1: 80,
        itemimage2: foodC2,
        iteminfo2: "Japanese Sushi set",
        itemprice2: 80,
        itemimage3: foodC3,
        iteminfo3: "Japanese Deli Ramen",
        itemprice3: 80,
    },
    {
    id: 4,
        image: restaurant4,
        location: "Neon Space",
        name: "Lyonrice",
        maininfo: "Lyonrice is a well-loved restaurant that specializes in serving flavorful and satisfying Filipino-style rice meals.",
        itemimage1: foodD1,
        iteminfo1: "Sinangag",
        itemprice1: 80,
        itemimage2: foodD2,
        iteminfo2: "Sticky Rice Cake",
        itemprice2: 80,
        itemimage3: foodD3,
        iteminfo3: "Filipino Yellow Rice",
        itemprice3: 80,
    },
];