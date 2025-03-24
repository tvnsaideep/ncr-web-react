function Banner() {
    return (
        <>
        <section className="w-100 clearfix innerPageBanner" id="innerPageBanner">
         <div className="container">
            <div className="innerPageBannerInner">
               <div className="innerPageBannerImgLeft">
                  <img src="images/services/banner/bannerLeft.jpeg" alt="banner-img" className="img-fluid"/>
               </div>
               <div className="innerPageBannerContent">
                  <h1>Our <span>Service</span></h1>
                  <ul className="breadcrumb">
                     <li className="breadcrumb-item"><a href="#">Home</a></li>
                     <li className="breadcrumb-item active">Our <span>Service</span></li>
                  </ul>
               </div>
               <div className="innerPageBannerImgRight">
                  <img src="images/services/banner/bannerRight.jpeg" alt="banner-img" className="img-fluid"/>
               </div>
            </div>
         </div>
      </section>
        </>
    );
}

export default Banner