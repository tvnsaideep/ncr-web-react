function SendMessage() {
  return (
    <>
    <section className="w-100 clearfix sendMessage" id="sendMessage">
   <div className="container">
      <div className="sendMessageInner">
         <div className="row">
            <div className="col-md-6">
               <div className="sendMessageContentBox">
                  <div className="commonHeading">
                     <h4>Send Me a Message <br/> <span>Anytime!</span></h4>
                     <p>Serving North-Indian, South-Indian and desi-Chinese cuisines, choose from Vegetarian and Non-Vegetarian meal options. dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor.</p>
                  </div>
               </div>
            </div>
            <div className="col-md-6">
               <div className="sendMessageFrom">
                  <form className="sendMessageFromBox">
                     <div className="formGroup">
                        <input type="text" className="form-control require" id="name" placeholder="Enter Name" name="full_name" />
                     </div>
                     <div className="formGroup">
                        <input type="email" className="form-control require" id="email" placeholder="Enter Email" name="email" />
                     </div>
                     <div className="formGroup">
                        <input type="number" className="form-control require" id="number" placeholder="Enter Phone Number" name="contact_no" />
                     </div>
                     <div className="formGroup">
                        <textarea className="form-control require" id="message" placeholder="Message" name="message" ></textarea>
                     </div>
                     <div className="response"></div>
                     <div className="formGroup">
                        <button type="button" className="btn btnPrimary submitForm"> Submit</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
    </>
  );
}

export default SendMessage