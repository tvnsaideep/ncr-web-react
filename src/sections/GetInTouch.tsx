function GetInTouch() {
    return (
        <>
        <section className="w-100 clearfix getInTouch" id="getInTouch">
   <div className="container">
      <div className="getInTouchInner">
         <div className="getInTouchRow">
            <div className="getInTouchCol">
               <div className="getInTouchContent">
                  <div className="commonHeading headingLeft">
                     <h4>Get In <span>Touch</span></h4>

                     <p>For reservations, availability and any other queries, please feel free to contact us</p>
                  </div>
                  <div className="getInTouchMap">
                  <iframe src="https://www.google.com/maps/embed/v1/place?q=Namma+Chettinadu+Restaurant&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                  </div>
               </div>
            </div>

            <div className="getInTouchCol">
               <div className="getInTouchImg">
                  <div className="getInTouchImgInner">
                     <div className="getInTouchImg1">
                        <img src="src/assets/images/contact/image2.jpeg" alt="img" className="img-fluid"/>
                     </div>
                     <div className="getInTouchImg2">
                        <img src="src/assets/images/contact/image1.jpg" alt="img" className="img-fluid"/>
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



export default GetInTouch