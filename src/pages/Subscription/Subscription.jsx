import { subscription } from "../../data";
import Subscribe from "./Components/Subscribe";
import Title from "./Components/Title";

const Subscription = () => {
  return (
    <div className="subscription" id="subscription">
    <Title title='subscription' subtitle='plan'/>
      <div className="subscription-cards">
        {subscription.map((subscribe) => (
          <Subscribe key={subscribe.id} {...subscribe} />
        ))}
      </div>
    </div>
    );
  };

export default Subscription;