function TrustedBy() {

    return (
        <>
        <section className="w-100 clearfix trustedUsers" id="trustedUsers">
   <div className="container">
      <h2 className="d-none">Trusted Users</h2>
      <div className="trustedUsersInner">
         {/* <div className="commonHeading headingCenter">
            <p className="mb-0">Trusted by 1L+ users</p>
         </div> */}
         <div className="owl-carousel owl-theme trustedUsersCarousel">
            <div className="item">
               <div className="trustedUsersItem">
                  <a href="javascript:void(0);"><img src="images/partner1.png" alt="trusted-users"
                        className="img-fluid"/></a>
               </div>
            </div>
            <div className="item">
               <div className="trustedUsersItem">
                  <a href="javascript:void(0);"><img src="images/partner2.png" alt="trusted-users"
                        className="img-fluid"/></a>
               </div>
            </div>
            <div className="item">
               <div className="trustedUsersItem">
                  <a href="javascript:void(0);"><img src="images/partner3.png" alt="trusted-users"
                        className="img-fluid"/></a>
               </div>
            </div>
            <div className="item">
               <div className="trustedUsersItem">
                  <a href="javascript:void(0);"><img src="images/partner4.png" alt="trusted-users"
                        className="img-fluid"/></a>
               </div>
            </div>
            <div className="item">
               <div className="trustedUsersItem">
                  <a href="javascript:void(0);"><img src="images/partner5.png" alt="trusted-users"
                        className="img-fluid"/></a>
               </div>
            </div>
         </div>

      </div>
   </div>
</section>
        </>
    );
}

export default TrustedBy