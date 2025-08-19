const SpecialFood = 
({specialfoodsimg, title, description}) => {
  return (
    <div className="specialfoods-container">
      <div className="specialfoods-container-img">
        <img className="specialfoods-image" src={specialfoodsimg} />
      </div>
        <div className="specialfoods-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href="" className="button">Send Request</a>
        </div>
		  </div>
  );
};

export default SpecialFood;