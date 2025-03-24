function MealPlan() {
    return (
        <>
        <section className="w-100 clearfix ourMealPlan" id="ourMealPlan">
   <div className="container">
      <div className="ourMealPlanInner">
         <div className="ourMealPlanRow">
            <div className="ourMealPlanCol">
               <div className="commonHeading headingLeft">
                  <h4>Our <span>Meal</span> Plan</h4>
                  <p className="mb-0">Plan Your Meals, Perfect Your Life – Explore Our Options.</p>
               </div>
            </div>
            <div className="ourMealPlanCol"> 
               <ul className="nav nav-pills ourMealNav">
                  <li className="nav-item">
                     <a className="nav-link active" data-bs-toggle="pill" href="#veg">Specials</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" data-bs-toggle="pill" href="#nonVeg">Regular</a>
                  </li>
               </ul>
            </div>
         </div>
         <div className="">
         </div>

         <div className="tab-content">
            <div className="tab-pane container active" id="veg">
               <div className="ourMealContent">
                  <div className="row">
                     <div className="col-md-6 col-xl-3">
                        <div className="ourMealCard">
                           <div className="ourMealImg">
                              <a href="meal-single.html">
                                 <img src="images/dishes/home/meals.jpg" alt="our-meal-img" className="img-fluid w-100"/>
                              </a>
                           </div>
                           <div className="ourMealContent">
                              <div className="ourMealHead">
                                 <div className="ourMealTitle">
                                    <h2><a href="meal-single.html">Mappillai Virundhu</a></h2>
                                 </div>
                                 <div className="ourMealPrice">
                                    <span>₹ 275</span>
                                 </div>
                              </div>
                              <div className="ourMealPara">
                                 <p> Mutton Gravy, Chicken Thokku, Prawn Thokku, Karuvadu
                                 Thokku, Boti Fry, Thalai Curry, Liver Roast, Mutton/Chicken
                                 Kola, Fish Fry, Egg Thoku, Sambar, Rasam, Kuttu, Poriyal,
                                 Curd, Appalam, Pickle, Beeda, Icecream, Banana, Sweet</p>
                                 <br></br>
                              </div>
                              {/* <div className="ourMealBtn">
                                 <a href="check-out.html" className="btn btnPrimary">Add To Cart</a>
                                 <a href="javascript:void(0);" className="ourMealWishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18"
                                       viewBox="0 0 20 18" fill="none">
                                       <path
                                          d="M2.09519 9.17766C0.148184 6.57021 0.797187 2.65904 4.0422 1.35532C7.28721 0.0515967 9.23422 2.65904 9.88322 3.96277C10.5322 2.65904 13.1282 0.0515967 16.3732 1.35532C19.6183 2.65904 19.6183 6.57021 17.6712 9.17766C15.7242 11.7851 9.88322 17 9.88322 17C9.88322 17 4.0422 11.7851 2.09519 9.17766Z"
                                          stroke="#999999" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                 </a>
                              </div> */}
                           </div>
                        </div>
                     </div>
                     <div className="col-md-6 col-xl-3">
                        <div className="ourMealCard">
                           <div className="ourMealImg">
                              <a href="meal-single.html">
                                 <img src="images/dishes/home/meals.jpg" alt="our-meal-img" className="img-fluid w-100"/>
                              </a>
                           </div>
                           <div className="ourMealContent">
                              <div className="ourMealHead">
                                 <div className="ourMealTitle">
                                    <h2><a href="meal-single.html">MOI Virundhu</a></h2>
                                 </div>
                                 <div className="ourMealPrice">
                                    <span>₹ 300</span>
                                 </div>
                              </div>
                              <div className="ourMealPara">
                                 <p>Mutton Varthala Curry, Chicken Milagai Curry,
                                    Chettinadu Sangara Fish Curry, Mutton/Chicken
                                    Uppu Curry, Botti Kuttu, Fish Karuvadu Kolambu,
                                    Sambar, Rasam, Kuttu, Poriyal, Curd, Appalam, Pickle,
                                    Beeda, Icecream, Banana, Sweet</p>
                                 <br></br>
                              </div>
                              {/* <div className="ourMealBtn">
                                 <a href="check-out.html" className="btn btnPrimary">Add To Cart</a>
                                 <a href="javascript:void(0);" className="ourMealWishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18"
                                       viewBox="0 0 20 18" fill="none">
                                       <path
                                          d="M2.09519 9.17766C0.148184 6.57021 0.797187 2.65904 4.0422 1.35532C7.28721 0.0515967 9.23422 2.65904 9.88322 3.96277C10.5322 2.65904 13.1282 0.0515967 16.3732 1.35532C19.6183 2.65904 19.6183 6.57021 17.6712 9.17766C15.7242 11.7851 9.88322 17 9.88322 17C9.88322 17 4.0422 11.7851 2.09519 9.17766Z"
                                          stroke="#999999" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                 </a>
                              </div> */}
                           </div>
                        </div>
                     </div>
                     <div className="col-md-6 col-xl-3">
                        <div className="ourMealCard">
                           <div className="ourMealImg">
                              <a href="meal-single.html">
                                 <img src="images/dishes/home/meals.jpg" alt="our-meal-img" className="img-fluid w-100"/>
                              </a>
                           </div>
                           <div className="ourMealContent">
                              <div className="ourMealHead">
                                 <div className="ourMealTitle">
                                    <h2><a href="meal-single.html">Kalyana Virundhu</a></h2>
                                 </div>
                                 <div className="ourMealPrice">
                                    <span>₹ 450</span>
                                 </div>
                              </div>
                              <div className="ourMealPara">
                                 <p>Biryani Rice, Egg Paniyaram, Raitha, Kudal Kuttu, Chicken
                                    Varuval, Mutton Podi Kulambu, Nattu Kozhi Rasam, Nattu
                                    Kozhi Sukka Varuval, Mandi, Banana Varuval Ukkara
                                    (Sweet), Sambar, Rasam, Kuttu, Poriyal, Curd, Appalam,
                                    Pickle, Beeda, Banana, Icecream</p>
                              </div>
                              {/* <div className="ourMealBtn">
                                 <a href="check-out.html" className="btn btnPrimary">Add To Cart</a>
                                 <a href="javascript:void(0);" className="ourMealWishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18"
                                       viewBox="0 0 20 18" fill="none">
                                       <path
                                          d="M2.09519 9.17766C0.148184 6.57021 0.797187 2.65904 4.0422 1.35532C7.28721 0.0515967 9.23422 2.65904 9.88322 3.96277C10.5322 2.65904 13.1282 0.0515967 16.3732 1.35532C19.6183 2.65904 19.6183 6.57021 17.6712 9.17766C15.7242 11.7851 9.88322 17 9.88322 17C9.88322 17 4.0422 11.7851 2.09519 9.17766Z"
                                          stroke="#999999" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                 </a>
                              </div> */}
                           </div>
                        </div>
                     </div>
                     <div className="col-md-6 col-xl-3">
                        <div className="ourMealCard">
                           <div className="ourMealImg">
                              <a href="meal-single.html">
                                 <img src="images/dishes/home/meals.jpg" alt="our-meal-img" className="img-fluid w-100"/>
                              </a>
                           </div>
                           <div className="ourMealContent">
                              <div className="ourMealHead">
                                 <div className="ourMealTitle">
                                    <h2><a href="meal-single.html">NCR Non Veg Thali</a></h2>
                                 </div>
                                 <div className="ourMealPrice">
                                    <span>₹ 315</span>
                                 </div>
                              </div>
                              <div className="ourMealPara">
                                 <p> Papad / Dalfry / 5 Roti / Jeera Rice
                                 / Raita / 1 Sweet / Salad / Paneer Chatpata</p>
                              </div>
                              <br></br>
                              <br></br>
                              <br></br>
                              <br></br>
                              <br></br>
                              <br></br>
                              {/* <div className="ourMealBtn">
                                 <a href="check-out.html" className="btn btnPrimary">Add To Cart</a>
                                 <a href="javascript:void(0);" className="ourMealWishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18"
                                       viewBox="0 0 20 18" fill="none">
                                       <path
                                          d="M2.09519 9.17766C0.148184 6.57021 0.797187 2.65904 4.0422 1.35532C7.28721 0.0515967 9.23422 2.65904 9.88322 3.96277C10.5322 2.65904 13.1282 0.0515967 16.3732 1.35532C19.6183 2.65904 19.6183 6.57021 17.6712 9.17766C15.7242 11.7851 9.88322 17 9.88322 17C9.88322 17 4.0422 11.7851 2.09519 9.17766Z"
                                          stroke="#999999" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                 </a>
                              </div> */}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tab-pane container fade" id="nonVeg">
               <div className="ourMealContent">
                  <div className="row">
                     <div className="col-md-6 col-xl-3">
                        <div className="ourMealCard">
                           <div className="ourMealImg">
                              <a href="meal-single.html">
                                 <img src="images/dishes/home/meals.jpg" alt="our-meal-img" className="img-fluid w-100"/>
                              </a>
                           </div>
                           <div className="ourMealContent">
                              <div className="ourMealHead">
                                 <div className="ourMealTitle">
                                    <h2><a href="meal-single.html">Regular Veg Meals</a></h2>
                                 </div>
                                 <div className="ourMealPrice">
                                    <span>₹ 210</span>
                                 </div>
                              </div>
                              <div className="ourMealPara">
                                 <p>Dal / fry / Roti / Rice
                                    / Sambar / Rasam / Curd / 1 Sweet / Salad / Papad</p>
                              </div>
                              {/* <div className="ourMealBtn">
                                 <a href="check-out.html" className="btn btnPrimary">Add To Cart</a>
                                 <a href="javascript:void(0);" className="ourMealWishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18"
                                       viewBox="0 0 20 18" fill="none">
                                       <path
                                          d="M2.09519 9.17766C0.148184 6.57021 0.797187 2.65904 4.0422 1.35532C7.28721 0.0515967 9.23422 2.65904 9.88322 3.96277C10.5322 2.65904 13.1282 0.0515967 16.3732 1.35532C19.6183 2.65904 19.6183 6.57021 17.6712 9.17766C15.7242 11.7851 9.88322 17 9.88322 17C9.88322 17 4.0422 11.7851 2.09519 9.17766Z"
                                          stroke="#999999" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                 </a>
                              </div> */}
                           </div>
                        </div>
                     </div>
                     <div className="col-md-6 col-xl-3">
                        <div className="ourMealCard">
                           <div className="ourMealImg">
                              <a href="meal-single.html">
                                 <img src="images/dishes/home/meals.jpg" alt="our-meal-img" className="img-fluid w-100"/>
                              </a>
                           </div>
                           <div className="ourMealContent">
                              <div className="ourMealHead">
                                 <div className="ourMealTitle">
                                    <h2><a href="meal-single.html">Mutton Meals</a></h2>
                                 </div>
                                 <div className="ourMealPrice">
                                    <span>₹ 340</span>
                                 </div>
                              </div>
                              <div className="ourMealPara">
                                 <p>Mutton Curry / Dal / fry /  Roti / Rice
                                    / Curd / 1 Sweet / Salad / Papad</p>
                              </div>
                              {/* <div className="ourMealBtn">
                                 <a href="check-out.html" className="btn btnPrimary">Add To Cart</a>
                                 <a href="javascript:void(0);" className="ourMealWishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18"
                                       viewBox="0 0 20 18" fill="none">
                                       <path
                                          d="M2.09519 9.17766C0.148184 6.57021 0.797187 2.65904 4.0422 1.35532C7.28721 0.0515967 9.23422 2.65904 9.88322 3.96277C10.5322 2.65904 13.1282 0.0515967 16.3732 1.35532C19.6183 2.65904 19.6183 6.57021 17.6712 9.17766C15.7242 11.7851 9.88322 17 9.88322 17C9.88322 17 4.0422 11.7851 2.09519 9.17766Z"
                                          stroke="#999999" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                 </a>
                              </div> */}
                           </div>
                        </div>
                     </div>
                     <div className="col-md-6 col-xl-3">
                        <div className="ourMealCard">
                           <div className="ourMealImg">
                              <a href="meal-single.html">
                                 <img src="images/dishes/home/meals.jpg" alt="our-meal-img" className="img-fluid w-100"/>
                              </a>
                           </div>
                           <div className="ourMealContent">
                              <div className="ourMealHead">
                                 <div className="ourMealTitle">
                                    <h2><a href="meal-single.html">Fish Meals</a></h2>
                                 </div>
                                 <div className="ourMealPrice">
                                    <span>₹ 315</span>
                                 </div>
                              </div>
                              <div className="ourMealPara">
                                 <p>Fish Curry / Dal / fry /  Roti / Rice
                                 / Rasam / Curd / 1 Sweet / Salad / Papad</p>
                              </div>
                              {/* <div className="ourMealBtn">
                                 <a href="check-out.html" className="btn btnPrimary">Add To Cart</a>
                                 <a href="javascript:void(0);" className="ourMealWishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18"
                                       viewBox="0 0 20 18" fill="none">
                                       <path
                                          d="M2.09519 9.17766C0.148184 6.57021 0.797187 2.65904 4.0422 1.35532C7.28721 0.0515967 9.23422 2.65904 9.88322 3.96277C10.5322 2.65904 13.1282 0.0515967 16.3732 1.35532C19.6183 2.65904 19.6183 6.57021 17.6712 9.17766C15.7242 11.7851 9.88322 17 9.88322 17C9.88322 17 4.0422 11.7851 2.09519 9.17766Z"
                                          stroke="#999999" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                 </a>
                              </div> */}
                           </div>
                        </div>
                     </div>
                     <div className="col-md-6 col-xl-3">
                        <div className="ourMealCard">
                           <div className="ourMealImg">
                              <a href="meal-single.html">
                                 <img src="images/dishes/home/meals.jpg" alt="our-meal-img" className="img-fluid w-100"/>
                              </a>
                           </div>
                           <div className="ourMealContent">
                              <div className="ourMealHead">
                                 <div className="ourMealTitle">
                                    <h2><a href="meal-single.html">Chicken Meals</a></h2>
                                 </div>
                                 <div className="ourMealPrice">
                                    <span>₹ 325</span>
                                 </div>
                              </div>
                              <div className="ourMealPara">
                                 <p>Chicken Curry / Dal / fry /  Roti / Rice
                                 / Curd / 1 Sweet / Salad / Papad</p>
                              </div>
                              {/* <div className="ourMealBtn">
                                 <a href="check-out.html" className="btn btnPrimary">Add To Cart</a>
                                 <a href="javascript:void(0);" className="ourMealWishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18"
                                       viewBox="0 0 20 18" fill="none">
                                       <path
                                          d="M2.09519 9.17766C0.148184 6.57021 0.797187 2.65904 4.0422 1.35532C7.28721 0.0515967 9.23422 2.65904 9.88322 3.96277C10.5322 2.65904 13.1282 0.0515967 16.3732 1.35532C19.6183 2.65904 19.6183 6.57021 17.6712 9.17766C15.7242 11.7851 9.88322 17 9.88322 17C9.88322 17 4.0422 11.7851 2.09519 9.17766Z"
                                          stroke="#999999" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                 </a>
                              </div> */}
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

export default MealPlan;