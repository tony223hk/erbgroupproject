import restaurant1 from "/img/Restaurant/restaurant1.webp";
import restaurant2 from "/img/Restaurant/restaurant2.webp";
import restaurant3 from "/img/Restaurant/restaurant3.webp";
import restaurant4 from "/img/Restaurant/restaurant4.webp";
import foodA1 from "/img/Restaurant/foodA1.webp";
import foodA2 from "/img/Restaurant/foodA2.webp";
import foodA3 from "/img/Restaurant/foodA3.webp";
import foodB1 from "/img/Restaurant/foodB1.webp";
import foodB2 from "/img/Restaurant/foodB2.webp";
import foodB3 from "/img/Restaurant/foodB3.webp";
import foodC1 from "/img/Restaurant/foodC1.webp";
import foodC2 from "/img/Restaurant/foodC2.webp";
import foodC3 from "/img/Restaurant/foodC3.webp";
import foodD1 from "/img/Restaurant/foodD1.webp";
import foodD2 from "/img/Restaurant/foodD2.webp";
import foodD3 from "/img/Restaurant/foodD3.webp";
//================================================
import foodkiosk1 from "/img/FoodKiosk/kiosk1.webp";
import foodkiosk2 from "/img/FoodKiosk/kiosk2.webp";
import foodkiosk3 from "/img/FoodKiosk/kiosk3.webp";
import foodkiosk4 from "/img/FoodKiosk/kiosk4.webp";
import snacksA1 from "/img/FoodKiosk/snacksA1.webp";
import snacksA2 from "/img/FoodKiosk/snacksA2.webp";
import snacksA3 from "/img/FoodKiosk/snacksA3.webp";
import snacksB1 from "/img/FoodKiosk/snacksB1.webp";
import snacksB2 from "/img/FoodKiosk/snacksB2.webp";
import snacksB3 from "/img/FoodKiosk/snacksB3.webp";
import snacksC1 from "/img/FoodKiosk/snacksC1.webp";
import snacksC2 from "/img/FoodKiosk/snacksC2.webp";
import snacksC3 from "/img/FoodKiosk/snacksC3.webp";
import snacksD1 from "/img/FoodKiosk/snacksD1.webp";
import snacksD2 from "/img/FoodKiosk/snacksD2.webp";
import snacksD3 from "/img/FoodKiosk/snacksD3.webp";
//================================================
import specialfood1 from "/img/SpecialFood/food1.webp";
import specialfood2 from "/img/SpecialFood/food2.webp";
import specialfood3 from "/img/SpecialFood/food3.webp";
import specialfood4 from "/img/SpecialFood/food4.webp";
//================================================
import subscription1 from "/img/subscription/subscription1.webp";
import subscription2 from "/img/subscription/subscription2.webp";
import subscription3 from "/img/subscription/subscription3.webp";


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
        iteminfo1: "Beef Rice",
        itemprice1: 80,
        itemimage2: foodC2,
        iteminfo2: "Japanese Sushi set",
        itemprice2: 80,
        itemimage3: foodC3,
        iteminfo3: "Deli Ramen",
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
        iteminfo3: "Yellow Rice",
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
        iteminfo1: "Ice Coffee",
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
        iteminfo2: "Cannoli",
        itemprice2: 20,
        itemimage3: snacksD3,
        iteminfo3: "Egg Waffle",
        itemprice3: 30,
    },
];

export const specialfoods = [
    {  
        id: 1,
        specialfoodsimg: specialfood1, 
        title: "Kids meal",
        description: "Here you can enjoy both adorable kids plates and substantial main dishes. However, you may also send requests to the restaurants by pressing the below button preferably 24 hours in advance. "
    },
    {  
        id: 2,
        specialfoodsimg: specialfood2, 
        title: "Plant-based menu items",
        description: "Plant-based meal is available in the park and at the hotels of the Cyberpunk Hong Kong. However, you may also send requests to the restaurants by pressing the below button preferably 24 hours in advance. "
    },
    {  
        id: 3,
        specialfoodsimg: specialfood3, 
        title: "Halal Cuisine",
        description: "Halal-certified food is available in the park and at the hotels of the Cyberpunk Hong Kong. However, you may send you concerns to the restaurants by pressing the below button preferably 24 hours in advance."
    },
    {  
        id: 4,
        specialfoodsimg: specialfood4, 
        title: "Dietary requirements",
        description: "Many Cyberpunk Hong Kong restaurants can accommodate the common food allergies. However, you may also send requests to the restaurants by pressing the below button preferably 24 hours in advance. "
    },
];

export const subscription = [
        {  
        id: 1,
        image: subscription1, 
        title: "Copper",
        price: "HK$599 per year",
        advantage1:"Unlimited access for all operation weekdays",
        advantage2:"10% off car parking discount",
        advantage3:"10% off shopping discount",
        advantage4:"10% off hotel, food and Beverage discount",
        advantage5:"Birthday offers to celebrate your western birthday date",

    },
    {  
        id: 2,
        image: subscription2, 
        title: "Sliver",
        price: "HK$799 per year",
        advantage1:"Unlimited access for all operations days",
        advantage2:"15% off car parking discount",
        advantage3:"15% off shopping discount",
        advantage4:"15% off hotel, food and Beverage discount",
        advantage5:"Birthday offers to celebrate your birthday month"
    },
    {  
        id: 3,
        image: subscription3, 
        title: "Gold",
        price: "HK$999 per year",
        advantage1:"Unlimited access for all operations days",
        advantage2:"30% off car parking discount",
        advantage3:"30% off shopping discount",
        advantage4:"30% off hotel, food and Beverage discount",
        advantage5:"Birthday offers to celebrate your birthday month"
    },
]