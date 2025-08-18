import { foodkiosks } from "../../data";
import FoodKiosk from "./Components/FoodKiosk";
import Title from "./Components/Title";

const FoodKiosks = () => {
  return (
    <div className="foodkiosks" id="foodkiosks">
    <Title title='foodkiosks' subtitle='informations'/>
      <div className="foodkiosk-cards">
        {foodkiosks.map((foodkiosk) => (
          <FoodKiosk key={foodkiosk.id} {...foodkiosk} />
        ))}
      </div>
    </div>
    );
  };

export default FoodKiosks;