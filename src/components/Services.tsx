import Banner from "../sections/banner";
import ServiceBanner from "../sections/ServiceBanner";
import ServiceCategory from "../sections/serviceCategory";
import TrustedBy from "../sections/TrustedBy";

function Services() {
    return (
        <>
        <main className="innerPage">

        {/* <Preloader></Preloader> */}

        <Banner/>

        <ServiceCategory></ServiceCategory>

        <ServiceBanner></ServiceBanner>

        {/* <ServicePricingTable></ServicePricingTable> */}

        {/* <TrustedBy/> */}

        </main>
        <script src="js/jquery-3.6.4.min.js"></script>
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/wow.min.js"></script>
        <script src="js/anime.min.js"></script>
        <script src="js/grt-youtube-popup.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/custom.js"></script>
        </>
    );
}

export default Services