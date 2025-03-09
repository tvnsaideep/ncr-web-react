function AboutUsBanner() {
    return (
        <>
        <section className="w-100 clearfix innerPageBanner" id="innerPageBanner">
         <div className="container">
            <div className="innerPageBannerInner">
               <div className="innerPageBannerImgLeft">
                  <img src="src\assets\images\dishes\aboutUs\letftImage.jpeg" alt="banner-img" className="img-fluid"/>
               </div>
               <div className="innerPageBannerContent">
                  <h1>About <span>Us</span></h1>
                  <ul className="breadcrumb">
                     <li className="breadcrumb-item"><a href="#">Home</a></li>
                     <li className="breadcrumb-item active">About Us</li>
                  </ul>
               </div>
               <div className="innerPageBannerImgRight">
                  <img src="src\assets\images\dishes\aboutUs\rightImage.jpeg" alt="banner-img" className="img-fluid"/>
               </div>
            </div>
         </div>
      </section>
        </>
    );
}

export default AboutUsBanner