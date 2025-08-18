import { specialfoods } from "../../data";
import SpecialFood from "./Components/SpecialFood";
import Title from "./Components/Title";

const SpecialFoods = () => {
  return (
    <div className="specialfoods" id="specialfoods">
    <Title title='special food' subtitle='arrangements'/>
      <div className="specialfoods-content">
        {specialfoods.map((specialfood) => (
          <SpecialFood key={specialfood.id} {...specialfood} />
        ))}
      </div>
    </div>
    );
  };

export default SpecialFoods;