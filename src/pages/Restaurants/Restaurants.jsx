import { restaurants } from "../../data";
import Restaurant from "./Components/Restaurant";
import Title from "./Components/Title";

const Restaurants = () => {
  return (
    <div className="restaurants" id="restaurants">
    <Title title='restaurant' subtitle='informations'/>
      <div className="restaurant-cards">
        {restaurants.map((restaurant) => (
          <Restaurant key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
    );
  };

export default Restaurants;