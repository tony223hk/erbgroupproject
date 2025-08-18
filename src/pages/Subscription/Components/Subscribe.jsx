const Subscribe= 
({title, image, price, advantage1, advantage2, advantage3, advantage4, advantage5}) => {
  return (
    <div class="subscription-card">
      <div class="subscription-card-img">
        <img class="restaurant-image" src={image} alt=""/>
      <h1>{title}</h1>
      <h2 class="subscription-price">{price}</h2>
      <li><i class="fa-solid fa-thumbs-up"></i><br></br>{advantage1}</li>
      <li><i class="fa-solid fa-thumbs-up"></i><br></br>{advantage2}</li>
      <li><i class="fa-solid fa-thumbs-up"></i><br></br>{advantage3}</li>
      <li><i class="fa-solid fa-thumbs-up"></i><br></br>{advantage4}</li>
      <li><i class="fa-solid fa-thumbs-up"></i><br></br>{advantage5}</li>
    <a className="btn-subscribe" href="#popup3">Add to cert</a>
    </div>
      <div id="popup3" className="subscribe-overlay">
        <div className="subscribe-popup">
          <h2>Subscription</h2>
        <a className="close" href="#">&times;</a>
        <div className="subscribe-contact-content">
          <p>Please complete the following table in below.</p>
        <div className="subscribe-contact-container">
          <form action="">
          <div className="subscribe-contact-row">
            <div className="subscribe-contact-col-25">
              <label for="membership">Membership</label>
            </div>
            <div className="subscribe-contact-col-75">
              <select id="membershipname" name="membershipname">
                <option value="Copper">Copper</option>
                <option value="Sliver">Sliver</option>
                <option value="Gold">Gold</option>
              </select>
            </div>
          </div>
          <div className="subscribe-contact-row">
            <div className="restaurant-contact-col-25">
              <label for="fname">Name</label>
            </div>
            <div className="subscribe-contact-col-75">
              <input type="text" id="name" name="name" placeholder="Your name" required/>
            </div>
          </div>
          <div className="subscribe-contact-row">
            <div class="restaurant-contact-col-25">
               <label for="contact">Tel No.</label>
            </div>
            <div className="subscribe-contact-col-75">
               <input type="text" id="contact" name="contact" placeholder="Your phone number" required/>
            </div>
          </div>
          <div className="subscribe-contact-row">
            <div class="restaurant-contact-col-25">
              <label for="contact">Address</label>
            </div>
            <div className="subscribe-contact-col-75">
              <input type="text" id="contact" name="address" placeholder="Your Address" required/>
            </div>
          </div>
          <div className="subscribe-contact-row">
            <div class="restaurant-contact-col-25">
              <label for="birthday">Birthday</label>
            </div>
            <div className="subscribe-contact-col-75">
              <input type="date" id="date" name="birthday" required/>
            </div>
          </div>
          <br></br>
          <div className="subscribe-contact-row">
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

export default Subscribe;