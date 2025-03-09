function AboutUsInfo(){
    return (
        <>
        <section className="w-100 clearfix informationInto" id="informationInto">
         <div className="container">
            <div className="informationIntoInner">
               <div className="informationIntoRow">
                  <div className="informationIntoCol">
                     <div className="informationIntoImg">
                        <div className="informationIntoImgInner">
                           <img src="src/assets/images/ncr/ambience/aboutUs/aboutUsLeftImg.jpeg" alt="img" className="img-fluid girlImg"/>
                        </div>
                     </div>
                  </div>
                  <div className="howItWorkCol">
                     <div className="howItWorkContent">
                        <div className="commonHeading headingLeft">
                           <h4>About <span>NCR</span> </h4>
                           <p>Welcome to Namma Chettinad Restaurant, where we take pride
                              in serving authentic Chettinad cuisine, along with a delightful
                              variety of Chinese and Indian dishes. Located in the heart of Thoraipakkam,
                              Chennai, we offer a warm and inviting atmosphere where every meal is an
                              experience of tradition, flavor, and hospitality.</p>

                           <p>At Namma Chettinad, we believe in preserving the rich culinary
                              heritage of the Chettinad region, renowned for its bold spices,
                              aromatic flavors, and unique cooking techniques. Whether you're
                              indulging in our signature Chettinad Chicken, fragrant Biryanis,
                              or sizzling Chettinad fish curry, each dish is crafted with the
                              finest ingredients, prepared fresh, and served with a passion for
                              excellence.</p>

                           <p>In addition to our Chettinad specialties, we offer a range of popular
                              Chinese and Indian dishes, blending the best of both worlds to satisfy
                              every palate. From crispy spring rolls to flavorful curries, our diverse
                              menu ensures that there is something for everyone.</p>   

                           <p>Our commitment to quality, authentic flavors, and excellent service makes
                              Namma Chettinad a favorite destination for food lovers. Whether you’re here
                              for a casual meal with friends or a family celebration, we strive to make every
                              dining experience memorable.</p>   

                           <p>Come, experience the essence of Chettinad cooking, and let us serve you the best
                              of South Indian and global flavors, all under one roof.</p>   
                        </div>

                        <div className="specialDishBtnGroup">
                           <div className="specialDishGetStartedBtn">
                              <a href="javascript:void(0);" className="btn btnPrimary">Get Started</a>
                           </div>
                           <div className="specialDishWatchVideoBtn">
                              <a href="javascript:void(0);" className="flVideo watchNow youtube-link" data-youtube-id="ZrGzRmcIFcU">
                                 <span className="playIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18"
                                       fill="none">
                                       <path d="M1 1V17L14 9L1 1Z" stroke="#FFA31E" strokeWidth="1.5"
                                          strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                 </span>
                                 <span>Watch video</span>
                              </a>
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

export default AboutUsInfo