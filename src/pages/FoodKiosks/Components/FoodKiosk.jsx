const FoodKiosk= 
({name, maininfo, image, location, 
  itemimage1, iteminfo1, itemprice1, 
  itemimage2, iteminfo2, itemprice2, 
  itemimage3, iteminfo3, itemprice3}) => {
  return (
    <div class="foodkiosk-card">
      <h2><b>{name}</b></h2>
      <p>{maininfo}</p>
        <div class="foodkiosk-card-img">
          <img class="foodkiosk-image" src={image} alt=""/>
          <p><i class="fa-solid fa-location-dot"></i>{location}</p>
        </div>  
          <div class="foodkiosk-card-container">
          <h3>Recomendations</h3>
            <div class="foodkiosk-row">
              <div class="foodkiosk-column">
                <img class="foodkiosk-itemimage" src={itemimage1} alt=""/>
                <li>{iteminfo1}</li>
                <li>{itemprice1}</li>
              </div>
              <div class="foodkiosk-column">
                <img class="foodkiosk-itemimage" src={itemimage2} alt=""/>
                <li>{iteminfo2}</li>
                <li>{itemprice2}</li>
              </div>
            <div class="foodkiosk-column">
                <img class="foodkiosk-itemimage" src={itemimage3} alt=""/>
                <li>{iteminfo3}</li>
                <li>{itemprice3}</li>
              </div>
            </div>
          </div> 
    </div>   
  );
};

export default FoodKiosk;