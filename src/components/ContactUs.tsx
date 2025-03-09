
import ContactUsBanner from "../sections/ContactUsBanner";
import GetInTouch from "../sections/GetInTouch";
import GetInTouchInfo from "../sections/GetInTouchInfo";
import TrustedBy from "../sections/TrustedBy";

function ContactUs() {

    return (
        <>
         <main className="innerPage">

            <ContactUsBanner/>

            <GetInTouch></GetInTouch>

            <GetInTouchInfo></GetInTouchInfo>

            <TrustedBy></TrustedBy>
            
         </main>
<script src="js/jquery-3.6.4.min.js"></script>
<script src="js/bootstrap.bundle.min.js"></script>
<script src="js/wow.min.js"></script>
<script src="js/anime.min.js"></script>
<script src="js/grt-youtube-popup.js"></script>
<script src="js/owl.carousel.min.js"></script>
<script src="js/contact_form.js"></script>
<script src="js/custom.js"></script>
        </>
    );
}

export default ContactUs