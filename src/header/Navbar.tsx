import { NavLink } from "react-router"

function Navbar() {
   return (
      <>
         <nav className="navbar navbar-expand-xl">
            <div className="container-fluid">
               <a className="navbar-brand" href="#">
                  <img src="images/logo/ncr-logo.png" alt="logo" className="img-fluid" />
               </a>

               <div className="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul className="navbar-nav">
                     <NavLink to = {"/"}>
                        <li className="nav-item">                      
                           <a href="#" className="nav-link">
                              Home
                           </a>
                        </li>
                     </NavLink>
                     <NavLink to={"/about"}>
                        <li className="nav-item">
                           <a href="javascript:void(0);" className="nav-link">
                              About Us
                           </a>
                           {/* <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="about-us.html">About Us</a></li>
                              <li><a className="dropdown-item" href="our-chef.html">Our Chef</a></li>
                              <li><a className="dropdown-item" href="chef-single.html">Chef Single</a></li>
                              <li><a className="dropdown-item" href="gallery.html">Our Gallery</a></li>
                              <li><a className="dropdown-item" href="error-404.html">404 Error</a></li>
                              <li><a className="dropdown-item" href="my-profile.html">My Profile</a></li>
                              <li><a className="dropdown-item" href="sign-in.html">Sign In </a></li>
                              <li><a className="dropdown-item" href="sign-up.html">Sign Up</a></li>
                           </ul> */}
                        </li>
                     </NavLink>
                     <NavLink to={"/services"}>
                        <li className="nav-item">
                           <a className="nav-link" href="service.html">Services</a>
                        </li>
                     </NavLink>
                     
                     {/* <li className="nav-item dropdown">
                        <a href="javascript:void(0);" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                           Meals
                        </a>
                        <ul className="dropdown-menu">
                           <li><a className="dropdown-item" href="our-meal-list.html">Meals List </a></li>
                           <li><a className="dropdown-item" href="meal-single.html">Meal Single </a></li>
                           <li><a className="dropdown-item" href="customer-choice.html">Customer Choice</a></li>
                           <li><a className="dropdown-item" href="check-out.html">Checkout</a></li>
                        </ul>
                     </li> */}
                     <NavLink to={"/blog"}>
                     <li className="nav-item">
                        <a href="#" className="nav-link">
                           Blog
                        </a>
                     </li>
                     </NavLink>
                     
                     <NavLink to="/contact">
                     <li className="nav-item">
                        <a className="nav-link" href="contact-us.html">Contact Us</a>
                     </li>
                     </NavLink>
                     
                  </ul>
               </div>
            </div>
         </nav>
      </>
   )
}

export default Navbar
