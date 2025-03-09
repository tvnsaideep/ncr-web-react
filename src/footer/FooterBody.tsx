import { NavLink } from "react-router";

function FooterBody() {

    return (
        <>
        <div className="container">
      <div className="footerInner">
         <div className="subscribeOuter">
            <div className="row">
               <div className="col-md-12 col-lg-6">
                  <div className="logisticSubscribeTxt">
                     <h4>Subscribe For <span>Latest Offers</span></h4>
                     <p>Let us be your hunger solver ! Keep in touch with us for discounts and offers.</p>
                  </div>
               </div>
               <div className="col-md-12 col-lg-6">
                  <div className="subscribeInpt">
                     <form>
                        <div className="input-group">
                           <input type="text" className="form-control" placeholder="Enter Email Address"/>
                           <button type="submit" className="btn btnPrimary">Subscribe Now</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         <div className="middleContent">
            <div className="footerLogo">
               {/* <a href="javascript:void(0);"><img src="src/assets/images/footer-logo.png" alt="footer-logo"
                     className="img-fluid"/></a> */}
                     <h4>Namma Chettinadu Restaurant</h4>
            </div>
            <div className="footerMenu">
               <ul className="nav">
                  <NavLink to={"/about"}>
                  <li className="nav-item">
                     <a className="nav-link" href="about-us.html">About Us</a>
                  </li>
                  </NavLink>
                  <NavLink to={"/blog"}>
                  <li className="nav-item">
                     <a className="nav-link" href="our-blog.html">Our Blog</a>
                  </li>
                  </NavLink>
                  {/* <NavLink to={"/about"}></NavLink>
                  <li className="nav-item">
                     <a className="nav-link" href="gallery.html">Gallery</a>
                  </li> */}
                  
                  <NavLink to={"/contact"}>
                  <li className="nav-item">
                     <a className="nav-link" href="contact-us.html">Contact Us</a>
                  </li>
                  </NavLink>
                  {/* <li className="nav-item">
                     <a className="nav-link" href="our-chef.html">Our Chef</a>
                  </li> */}
                  <NavLink to={"/services"}>
                  <li className="nav-item">
                     <a className="nav-link" href="service.html">Service</a>
                  </li>
                  </NavLink>
                  {/* <li className="nav-item">
                     <a className="nav-link" href="blog-categories.html">Blog Categories</a>
                  </li> */}
               </ul>
            </div>
         </div>
         <div className="footContent">
            <div className="copyRight">
               <p className="mb-0">Copyright © 2024-2025 <a href="javascript:void(0);">Namma Chettinadu Restaurant</a>. All Rights
                  Reserved.</p>
            </div>
            <div className="socialMedia">
               <ul className="nav">
                  <li className="nav-item">
                     <a className="nav-link" target="_blank" href="https://wa.me/+918979796966"><i className="fa-brands fa-whatsapp"></i></a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" target="_blank" href="https://www.instagram.com/nammachettinadurestaurant/"><i className="fa-brands fa-instagram"></i></a>
                  </li>
                  {/* <li className="nav-item">
                     <a className="nav-link" href="javascript:void(0);"><i className="fa-brands fa-facebook-f"></i></a>
                  </li> */}
                  <li className="nav-item">
                     <a className="nav-link" href="https://www.youtube.com/@NammaChettinaduRestaurant"><i className="fa-brands fa-x-youtube"></i></a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
        </>
    );
}

export default FooterBody