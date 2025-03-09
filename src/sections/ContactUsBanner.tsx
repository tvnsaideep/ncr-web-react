function ContactUsBanner() {
    return (
        <>
        <section className="w-100 clearfix innerPageBanner" id="innerPageBanner">
         <div className="container">
            <div className="innerPageBannerInner">
               <div className="innerPageBannerImgLeft">
                  <img src="src/assets/images/contact/banner/bannerLeft.jpeg" alt="banner-img" className="img-fluid"/>
               </div>
               <div className="innerPageBannerContent">
                  <h1>Contact <span>Us</span></h1>
                  <ul className="breadcrumb">
                     <li className="breadcrumb-item"><a href="#">Home</a></li>
                     <li className="breadcrumb-item active">Contact <span>Us</span></li>
                  </ul>
               </div>
               <div className="innerPageBannerImgRight">
                  <img src="src/assets/images/contact/banner/bannerRight.jpeg" alt="banner-img" className="img-fluid"/>
               </div>
            </div>
         </div>
      </section>
        </>
    );
}

export default ContactUsBanner