import restaurant1 from "/img/Restaurant/restaurant1.png";
import restaurant2 from "/img/Restaurant/restaurant2.png";
import restaurant3 from "/img/Restaurant/restaurant3.jpeg";
import restaurant4 from "/img/Restaurant/restaurant4.jpeg";
import foodA1 from "/img/Restaurant/foodA1.png";
import foodA2 from "/img/Restaurant/foodA2.png";
import foodA3 from "/img/Restaurant/foodA3.png";
import foodB1 from "/img/Restaurant/foodB1.png";
import foodB2 from "/img/Restaurant/foodB2.png";
import foodB3 from "/img/Restaurant/foodB3.png";
import foodC1 from "/img/Restaurant/foodC1.png";
import foodC2 from "/img/Restaurant/foodC2.png";
import foodC3 from "/img/Restaurant/foodC3.png";
import foodD1 from "/img/Restaurant/foodD1.png";
import foodD2 from "/img/Restaurant/foodD2.png";
import foodD3 from "/img/Restaurant/foodD3.png";
//================================================
import foodkiosk1 from "/img/FoodKiosk/kiosk1.png";
import foodkiosk2 from "/img/FoodKiosk/kiosk2.png";
import foodkiosk3 from "/img/FoodKiosk/kiosk3.png";
import foodkiosk4 from "/img/FoodKiosk/kiosk4.png";
import snacksA1 from "/img/FoodKiosk/snacksA1.png";
import snacksA2 from "/img/FoodKiosk/snacksA2.png";
import snacksA3 from "/img/FoodKiosk/snacksA3.png";
import snacksB1 from "/img/FoodKiosk/snacksB1.png";
import snacksB2 from "/img/FoodKiosk/snacksB2.png";
import snacksB3 from "/img/FoodKiosk/snacksB3.png";
import snacksC1 from "/img/FoodKiosk/snacksC1.png";
import snacksC2 from "/img/FoodKiosk/snacksC2.png";
import snacksC3 from "/img/FoodKiosk/snacksC3.png";
import snacksD1 from "/img/FoodKiosk/snacksD1.png";
import snacksD2 from "/img/FoodKiosk/snacksD2.png";
import snacksD3 from "/img/FoodKiosk/snacksD3.png";

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

export const foodkiosks = [
    {   
        id: 1,
        image: foodkiosk1,
        location: "Futuristic land",
        name: "CYER",
        maininfo: "An accessible place where users can relax while enjoying a coffee or snack in a lively, technology-focused setting.",
        itemimage1: snacksA1,
        iteminfo1: "Signatured Ice Coffee",
        itemprice1: 30,
        itemimage2: snacksA2,
        iteminfo2: "Healthy Sandwich",
        itemprice2: 40,
        itemimage3: snacksA3,
        iteminfo3: "Coffee Cake",
        itemprice3: 25,
    },
    {   
        id: 2,
        image: foodkiosk2,
        location: "Neon Space",
        name: "NeonFeast",
        maininfo: "It offers a vibrant experience featuring authentic Thai snacks, prepared with fresh ingredients and bold, aromatic flavors.",
        itemimage1: snacksB1,
        iteminfo1: "Mee Krob",
        itemprice1: 40,
        itemimage2: snacksB2,
        iteminfo2: "Moo Ping",
        itemprice2: 40,
        itemimage3: snacksB3,
        iteminfo3: "Thai Fried Chicken",
        itemprice3: 40,
    },
    {   
        id: 3,
        image: foodkiosk3,
        location: "Dystopian World",
        name: "DigitalBento",
        maininfo: "It offers a casual, accessible way to enjoy Japanese snacks with an emphasis on quality and quick service.",
        itemimage1: snacksC1,
        iteminfo1: "Takoyaki",
        itemprice1: 40,
        itemimage2: snacksC2,
        iteminfo2: "Okonomiyaki",
        itemprice2: 40,
        itemimage3: snacksC3,
        iteminfo3: "Gyoza",
        itemprice3: 40,
    },
    {
    id: 4,
        image: foodkiosk4,
        location: "High-tech centre",
        name: "SweetBytes",
        maininfo: "It offers a fast-paced treat experience featuring a variety of desserts, crafted with fresh ingredients and appealing flavors. ",
        itemimage1: snacksD1,
        iteminfo1: "Icecream",
        itemprice1: 20,
        itemimage2: snacksD2,
        iteminfo2: "Homemade Cannoli",
        itemprice2: 20,
        itemimage3: snacksD3,
        iteminfo3: "Egg Waffle",
        itemprice3: 30,
    },
];