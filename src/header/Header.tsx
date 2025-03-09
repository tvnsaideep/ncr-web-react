import Navbar from "./Navbar";

function Header() {
    return (
<>
<header className="w-100 clearfix header" id="header">
   <div className="container">
      <div className="headerInner">
         <Navbar />
         <div className="rightMenu">
            {/* <div className="search">
               <a href="javascript:void(0);">
                  <img src="src/assets/images/icon/search.png" alt="search" className="img-fluid"/>
               </a>
            </div>
            <div className="cart">
               <a href="check-out.html">
                  <img src="src/assets/images/icon/cart.png" alt="cart" className="img-fluid"/>
                  <span>4</span>
               </a>
            </div>
            <div className="loginBtn">
                <a href="sign-in.html" className="btn btnPrimary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                     <path
                        d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16"
                        stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                     <path d="M7 12H21L18 9M18 15L21 12" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                        strokeLinejoin="round" />
                  </svg>
                  <span>Sign In</span>
               </a>
            </div> */}
            <div className="menuToggle">
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapsibleNavbar">
                  <span id="nav-icon2">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                  </span>
               </button>

            </div>
         </div>
      </div>
   </div>
</header>
</>
    );
}

export default Header