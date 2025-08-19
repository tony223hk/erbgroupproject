const Restaurant = 
({name, maininfo, image, location, 
  itemimage1, iteminfo1, itemprice1, 
  itemimage2, iteminfo2, itemprice2, 
  itemimage3, iteminfo3, itemprice3}) => {
  return (
    <div className="restaurant-card">
      <h2><b>{name}</b></h2>
      <p>{maininfo}</p>
        <div className="restaurant-card-img">
          <img className="restaurant-image" src={image} alt=""/>
          <p><i className="fa-solid fa-location-dot"></i>{location}</p>
        </div>  
          <div className="restaurant-card-container">
          <h3>Recomendations</h3>
            <div className="restaurant-row">
              <div className="restaurant-column">
                <img className="restaurant-itemimage" src={itemimage1} alt=""/>
                <li>{iteminfo1}</li>
                <li>{itemprice1}</li>
              </div>
              <div className="restaurant-column">
                <img className="restaurant-itemimage" src={itemimage2} alt=""/>
                <li>{iteminfo2}</li>
                <li>{itemprice2}</li>
              </div>
            <div className="restaurant-column">
                <img className="restaurant-itemimage" src={itemimage3} alt=""/>
                <li>{iteminfo3}</li>
                <li>{itemprice3}</li>
              </div>
            </div>
          </div>
          <a className="btn-restaurant" href="#popup2">Booking Now</a>
            <div id="popup2" className="restaurant-overlay">
              <div className="restaurant-popup">
                <h2>Restaurant Reservation</h2>
              <a className="close" href="#">&times;</a>
              <div className="restaurant-contact-content">
                <p>Please complete the following table in below.</p>
              <div className="restaurant-contact-container">
            <form action="">
              <div className="restaurant-contact-row">
                <div className="restaurant-contact-col-25">
                  <label for="fname">Name</label>
                </div>
                <div className="restaurant-contact-col-75">
                  <input type="text" id="name" name="name" placeholder="Your name" required/>
                </div>
              </div>
              <div className="restaurant-contact-row">
                <div className="restaurant-contact-col-25">
                  <label for="contact">Contact</label>
                </div>
                <div className="restaurant-contact-col-75">
                  <input type="text" id="contact" name="contact" placeholder="Your phone number" required/>
                </div>
              </div>          
              <div className="restaurant-contact-row">
                <div className="restaurant-contact-col-25">
                  <label for="restaurant">Restaurant</label>
                </div>
                <div className="restaurant-contact-col-75">
                  <select id="restaurantname" name="restaurantname">
                    <option value="Pixelfood">Pixelfood</option>
                    <option value="Griddiner">Griddiner</option>
                    <option value="Synthfood">Synthfood</option>
                    <option value="Lyonrice">Lyonrice</option>
                  </select>
                </div>
              </div>
              <div className="restaurant-contact-row">
                <div class="restaurant-contact-col-25">
                  <label for="lname">Date</label>
                </div>
                <div className="restaurant-contact-col-75">
                  <input type="date" id="date" name="date" required/>
                </div>
              </div>
              <div className="restaurant-contact-row">
                <div class="restaurant-contact-col-25">
                  <label for="name">Time</label>
                </div>
                <div className="restaurant-contact-col-75">
                  <input type="time" id="time" name="time" required/>
                </div>
              </div>
              <div className="restaurant-contact-row">
                <div class="restaurant-contact-col-25">
                  <label for="nog">No. of Guest</label>
                </div>
                <div className="restaurant-contact-col-75">
                  <input type="number" id="nog" name="nog" required/>
                </div>
              </div>
              <div className="restaurant-contact-row">
                <div class="restaurant-contact-col-25">
                  <label for="special request">Request</label>
                </div>
                <div className="restaurant-contact-col-75">
                  <input type="text" id="requirements" name="requirements" placeholder="Special Request" required/>
                </div>
              </div>
              <br></br>
              <div className="restaurant-contact-row">
                <input type="submit" value="Submit"/>
              </div>
              </form>
              </div>
		      </div>
	      </div>
      </div>
    </div>
  );
};

export default Restaurant;