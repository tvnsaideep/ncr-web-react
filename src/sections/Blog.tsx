function Blog() {
 return (
    <>
    <section className="w-100 clearfix ourBlog" id="ourBlog">
   <div className="container">
      <div className="ourBlogInner">
         <div className="commonHeading headingCenter">
            <h4>Our <span>Blog</span></h4>
            <p className="mb-0">The ready-to-eat food counters feature the best quality of local & international
               cuisines, made within our very own state-of-the-art central kitchen.</p>
         </div>
         <div className="row">
            <div className="col-md-12 col-lg-4">
               <div className="ourBlogItem">
                  <div className="ourBlogBanner">
                     <a href="#">
                        <img src="images/blog/blogPost1.jpg" alt="our-blog" className="img-fluid"/>
                     </a>
                     <div className="ourBlogNav">
                        <ul className="nav">
                           <li className="nav-item">
                              <a className="nav-link" href="javascript:void(0);">
                                 <img src="images/icon/user.png" alt="user" className="img-fluid"/>
                                 <span>By Team Accenture</span>
                              </a>
                           </li>
                           {/* <li className="nav-item">
                              <a className="nav-link" href="javascript:void(0);">
                                 <img src="images/icon/message.png" alt="user" className="img-fluid"/>
                                 <span>02</span>
                              </a>
                           </li> */}
                        </ul>
                     </div>
                     <div className="ourBlogDate">
                        <h5>02</h5>
                        <p className="mb-0">Mar</p>
                     </div>
                  </div>
                  <div className="ourBlogTxt">
                     <h4><a href="#">A Successful Corporate Celebration at Namma Chettinad Restaurant</a></h4>
                     {/* <a href="#" className="ourBlogLink">
                        <span>More Details</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10"
                           fill="none">
                           <path
                              d="M8.35954 9.73094C8.17977 9.55157 8.09348 9.33483 8.10067 9.08072C8.10786 8.82661 8.20164 8.60987 8.38202 8.43049L10.9213 5.89686H0.898878C0.644197 5.89686 0.430565 5.81076 0.25798 5.63856C0.0853964 5.46637 -0.00059614 5.25351 3.11029e-06 5C3.11029e-06 4.74589 0.0862952 4.53273 0.258879 4.36054C0.431463 4.18834 0.644796 4.10254 0.898878 4.10314H10.9213L8.35954 1.54708C8.17977 1.36771 8.08988 1.15456 8.08988 0.907623C8.08988 0.660687 8.17977 0.447832 8.35954 0.269058C8.53932 0.0896858 8.75295 0 9.00044 0C9.24793 0 9.46126 0.0896858 9.64044 0.269058L13.7528 4.3722C13.8427 4.46188 13.9065 4.55904 13.9443 4.66368C13.982 4.76831 14.0006 4.88042 14 5C14 5.11958 13.9811 5.23169 13.9434 5.33632C13.9056 5.44096 13.8421 5.53812 13.7528 5.6278L9.61797 9.75336C9.45317 9.91779 9.24733 10 9.00044 10C8.75355 10 8.53992 9.91031 8.35954 9.73094Z"
                              fill="#999999" />
                        </svg>
                     </a> */}
                  </div>
               </div>
            </div>
            <div className="col-md-12 col-lg-4">
               <div className="ourBlogItem">
                  <div className="ourBlogBanner">
                     <a href="#">
                        <img src="images/blog/blogPost2.jpeg" alt="our-blog" className="img-fluid"/>
                     </a>
                     <div className="ourBlogNav">
                        <ul className="nav">
                           <li className="nav-item">
                              <a className="nav-link" href="javascript:void(0);">
                                 <img src="images/icon/user.png" alt="user" className="img-fluid"/>
                                 <span>By NCR</span>
                              </a>
                           </li>
                           {/* <li className="nav-item">
                              <a className="nav-link" href="javascript:void(0);">
                                 <img src="images/icon/message.png" alt="user" className="img-fluid"/>
                                 <span>02</span>
                              </a>
                           </li> */}
                        </ul>
                     </div>
                     <div className="ourBlogDate">
                        <h5>09</h5>
                        <p className="mb-0">Mar</p>
                     </div>
                  </div>
                  <div className="ourBlogTxt">
                     <h4><a href="#">The best and authentic chettinad dishes</a>
                     </h4>
                     {/* <a href="#" className="ourBlogLink">
                        <span>More Details</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10"
                           fill="none">
                           <path
                              d="M8.35954 9.73094C8.17977 9.55157 8.09348 9.33483 8.10067 9.08072C8.10786 8.82661 8.20164 8.60987 8.38202 8.43049L10.9213 5.89686H0.898878C0.644197 5.89686 0.430565 5.81076 0.25798 5.63856C0.0853964 5.46637 -0.00059614 5.25351 3.11029e-06 5C3.11029e-06 4.74589 0.0862952 4.53273 0.258879 4.36054C0.431463 4.18834 0.644796 4.10254 0.898878 4.10314H10.9213L8.35954 1.54708C8.17977 1.36771 8.08988 1.15456 8.08988 0.907623C8.08988 0.660687 8.17977 0.447832 8.35954 0.269058C8.53932 0.0896858 8.75295 0 9.00044 0C9.24793 0 9.46126 0.0896858 9.64044 0.269058L13.7528 4.3722C13.8427 4.46188 13.9065 4.55904 13.9443 4.66368C13.982 4.76831 14.0006 4.88042 14 5C14 5.11958 13.9811 5.23169 13.9434 5.33632C13.9056 5.44096 13.8421 5.53812 13.7528 5.6278L9.61797 9.75336C9.45317 9.91779 9.24733 10 9.00044 10C8.75355 10 8.53992 9.91031 8.35954 9.73094Z"
                              fill="#999999" />
                        </svg>
                     </a> */}
                  </div>
               </div>
            </div>
            <div className="col-md-12 col-lg-4">
               <div className="ourBlogItem">
                  <div className="ourBlogBanner">
                     <a href="#">
                        <img src="images/blog/blogPost3.jpg" alt="our-blog" className="img-fluid"/>
                     </a>
                     <div className="ourBlogNav">
                        <ul className="nav">
                           <li className="nav-item">
                              <a className="nav-link" href="javascript:void(0);">
                                 <img src="images/icon/user.png" alt="user" className="img-fluid"/>
                                 <span>By NCR</span>
                              </a>
                           </li>
                           {/* <li className="nav-item">
                              <a className="nav-link" href="javascript:void(0);">
                                 <img src="images/icon/message.png" alt="user" className="img-fluid"/>
                                 <span>02</span>
                              </a>
                           </li> */}
                        </ul>
                     </div>
                     <div className="ourBlogDate">
                        <h5>09</h5>
                        <p className="mb-0">Mar</p>
                     </div>
                  </div>
                  <div className="ourBlogTxt">
                     <h4><a href="#">Discover the Perfect Ambiance at Namma Chettinad Restaurant.</a></h4>
                     {/* <a href="#" className="ourBlogLink">
                        <span>More Details</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10"
                           fill="none">
                           <path
                              d="M8.35954 9.73094C8.17977 9.55157 8.09348 9.33483 8.10067 9.08072C8.10786 8.82661 8.20164 8.60987 8.38202 8.43049L10.9213 5.89686H0.898878C0.644197 5.89686 0.430565 5.81076 0.25798 5.63856C0.0853964 5.46637 -0.00059614 5.25351 3.11029e-06 5C3.11029e-06 4.74589 0.0862952 4.53273 0.258879 4.36054C0.431463 4.18834 0.644796 4.10254 0.898878 4.10314H10.9213L8.35954 1.54708C8.17977 1.36771 8.08988 1.15456 8.08988 0.907623C8.08988 0.660687 8.17977 0.447832 8.35954 0.269058C8.53932 0.0896858 8.75295 0 9.00044 0C9.24793 0 9.46126 0.0896858 9.64044 0.269058L13.7528 4.3722C13.8427 4.46188 13.9065 4.55904 13.9443 4.66368C13.982 4.76831 14.0006 4.88042 14 5C14 5.11958 13.9811 5.23169 13.9434 5.33632C13.9056 5.44096 13.8421 5.53812 13.7528 5.6278L9.61797 9.75336C9.45317 9.91779 9.24733 10 9.00044 10C8.75355 10 8.53992 9.91031 8.35954 9.73094Z"
                              fill="#999999" />
                        </svg>
                     </a> */}
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

export default Blog