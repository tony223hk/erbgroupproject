const SpecialFood = 
({specialfoodsimg, title, description}) => {
  return (
    <div className="specialfoods-container">
      <div className="specialfoods-row">
        <div className="specialfoods-column-33">
          <img className="img-specialfoods" src={specialfoodsimg} />
        </div>
        <div className="specialfoods-column-66">
          <h3>{title}</h3>
          <p>{description}</p>
        <a className="btn-specialfoods" href="#popup1">Send request</a>
          <div id="popup1" className="specialfoods-overlay">
            <div className="specialfoods-popup">
		        <h2>Special request Form</h2>
		      <a className="close" href="#">&times;</a>
		      <div className="specialfoods-contact-content">
			      <p>Please complete the following table in below.</p>
			    <div className="specialfoods-contact-container">
            <form action="">
              <div className="specialfoods-contact-row">
                <div className="specialfoods-contact-col-25">
                  <label for="fname">Name</label>
                </div>
                <div className="specialfoods-contact-col-75">
                  <input type="text" id="name" name="name" placeholder="Your name" required/>
                </div>
              </div>
              <div className="specialfoods-contact-row">
                <div class="specialfoods-contact-col-25">
                  <label for="contact">Contact</label>
                </div>
                <div className="specialfoods-contact-col-75">
                  <input type="text" id="contact" name="contact" placeholder="Your phone number" required/>
                </div>
              </div>
              <div className="specialfoods-contact-row">
                <div className="specialfoods-contact-col-25">
                  <label for="meal">Meal</label>
                </div>
                <div className="specialfoods-contact-col-75">
                  <select id="country" name="country">
                    <option value="kidsmeal">Kids meal</option>
                    <option value="plantbased ">Plant-based menu items</option>
                    <option value="halal">Halal Cuisine</option>
                    <option value="dietary">Dietary requirements</option>
                  </select>
                </div>
              </div>
              <div className="specialfoods-contact-row">
                <div className="specialfoods-contact-col-25">
                  <label for="subject">Requirement</label>
                </div>
              <div className="specialfoods-contact-col-75">
                 <input type="text" id="requirements" name="requirements" placeholder="Your requirements" required/>
                 </div>
              </div>
              <br></br>
              <div className="specialfoods-contact-row">
                <input type="submit" value="Submit"/>
              </div>
              </form>
            </div>
		      </div>
	      </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default SpecialFood;