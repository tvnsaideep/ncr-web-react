function CustomerSays() {
    return (
        <>
        <section className="w-100 clearfix customerSays" id="customerSays">
   <div className="container">
      <div className="customerSaysInner">
         <div className="customerSaysRow">
            <div className="customerSaysCol">
               <div className="customerSaysImg">
                  <div className="customerSaysImgInner">
                     <img src="images/bg1.png" alt="img" className="img-fluid customerSaysBg"/>
                     <img src="images/img13.png" alt="img" className="img-fluid customerSaysChef"/>

                     <img src="images/img2.png" alt="img"
                        className="img-fluid customerSaysIcon customerSaysIcon1 movingjs" data-value="-2"/>
                     <img src="images/img3.png" alt="img"
                        className="img-fluid customerSaysIcon customerSaysIcon2 movingjs" data-value="2"/>
                     <img src="images/img5.png" alt="img"
                        className="img-fluid customerSaysIcon customerSaysIcon3 movingjs" data-value="-2"/>
                  </div>
                  <div className="ourReviewer movingjs" data-value="4">
                     <span>Our Reviewer</span>
                     <div className="ourReviewerInner">
                        <a href="javascript:void(0);">
                           <img src="images/img9.png" alt="our-reviewer" className="img-fluid"/>
                        </a>
                        <a href="javascript:void(0);">
                           <img src="images/img10.png" alt="our-reviewer" className="img-fluid"/>
                        </a>
                        <a href="javascript:void(0);">
                           <img src="images/img11.png" alt="our-reviewer" className="img-fluid"/>
                        </a>
                        <a href="javascript:void(0);" className="ourReviewerCount">
                           12k
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="howItWorkCol">
               <div className="howItWorkContent">
                  <div className="commonHeading headingLeft">
                     <h4>About <span>Us</span></h4>
                     <p>24Seven is the one-stop-shop for all customer needs, whatever the time of day
                        or night. Customers can find the best global brands on the shelves to meet their daily
                        needs like groceries, snacks, a wide variety of beverages, personal care products, and
                        even Colorbar - our own brand of premium cosmetics. The ready-to-eat food counters feature
                        the best quality of local & international cuisines, made within our very own
                        state-of-the-art central kitchen. our own brand of premium cosmetics.</p>
                     <p className="mb-0">Our dedication to providing comprehensive solutions ensures that customers
                        not only find a diverse selection of products but also have access to a suite of services
                        that cater to their varied needs. From essential tasks to indulgent extras, we pride
                        ourselves on being more than just a shopping destination - we are a hub of convenience and
                        innovation. Picture the convenience of instant photo development, where cherished memories
                        can be brought to life on the spot.</p>
                  </div>
                  <div className="customerSayReview">
                     <div className="customerSayStarInner">
                        <div className="customerSayStar">
                           <div className="customerSayStarImg">
                              <a href="javascript:void(0);"><img src="images/user5.png" alt="user"
                                    className="img-fluid"/></a>
                           </div>
                           <div className="customerSayStarTxt">
                              <h6 className="mb-0"><a href="javascript:void(0);">Theresa Jordan</a></h6>
                              <p className="mb-0">Food Enthusiast</p>
                           </div>
                        </div>
                        <div className="customerSayRate">
                           <div className="customerSayStarGroup">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                           </div>
                           <div className="customerSayStarRating">
                              <span>4.8</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
        </>
    );
}

export default CustomerSays