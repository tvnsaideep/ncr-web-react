import PageNotFound from "../sections/PageNotFound";
import Preloader from "./Preloader";

function Error404() {
    return (
        <>
         <main className="innerPage">
      <Preloader/>

      <PageNotFound></PageNotFound>

   </main>
   <script src="js/jquery-3.6.4.min.js"></script>
   <script src="js/bootstrap.bundle.min.js"></script>
   <script src="js/wow.min.js"></script>
   <script src="js/fancybox.min.js"></script>
   <script src="js/anime.min.js"></script>
   <script src="js/grt-youtube-popup.js"></script>
   <script src="js/owl.carousel.min.js"></script>
   <script src="js/custom.js"></script>

   <script>
  {/* document.addEventListener('DOMContentLoaded', function() {
    // Function to add 'active' className to SVG element
    function addActiveclassName() {
        var svgElement = document.getElementById('error-404-svg');
        if (svgElement) {
            svgElement.classNameList.add('active');
        }
    }

    // Check if the page is being refreshed
    if (performance.navigation.type === 1) {
        // Page is refreshed, add 'active' className
        addActiveclassName();
    } else {
        // Page is not refreshed, add 'active' className on initial load or redirect
        addActiveclassName();
    }
}); */}
      </script>
        </>
    );
}

export default Error404