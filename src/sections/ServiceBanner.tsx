function ServiceBanner() {

    return (
        <>
        <section className="w-100 clearfix serviceBanner" id="serviceBanner">
   <div className="container">
      <div className="serviceBannerInner">
         <h2 className="d-none">Service Banner</h2>
         <div className="row">
            <div className="col-md-6">
               <div className="serviceBannerItem">
                  <a href="javascript:void(0);">
                     <img src="images/services/image1.jpg" alt="banner" className="img-fluid w-100"/>
                  </a>
               </div>
            </div>
            <div className="col-md-6">
               <div className="serviceBannerItem">
                  <a href="javascript:void(0);">
                     <img src="images/services/image2.jpg" alt="banner" className="img-fluid w-100"/>
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
        </>
    );
}

export default ServiceBanner