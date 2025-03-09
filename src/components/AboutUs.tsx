import AboutUsBanner from "../sections/AboutUsBanner";
import AboutUsInfo from "../sections/AboutUsInfo";
import HowItWorks from "../sections/HowItWorks";
import TrustedBy from "../sections/TrustedBy";

function AboutUs() {
    return (
        <>
   <main className="innerPage">

      {/* <Preloader></Preloader> */}
   
      <AboutUsBanner></AboutUsBanner>
      
      <AboutUsInfo></AboutUsInfo>

      <HowItWorks></HowItWorks>

      {/* {<!--Video Start-->} */}
      <section className="aboutUsVideo" id="aboutUsVideo">
         <div className="container">
            <h2 className="d-none">About Us</h2>
            <div className="aboutUsVideoInner">
               <div className="aboutUsVideoContainer">
                  <video id="aboutUsBgVideo" className="aboutUsBgVideo" autoPlay loop muted>
                     <source src="video/video.mp4" type="video/mp4"/>
                  </video>
                  <button id="playPauseButton" className="playPauseButton"><i className="fa-solid fa-pause"></i></button>
               </div>

               <div className="aboutUsVideoContent">
                  <p>a place where tradition meets flavor. Nestled in the heart of Thoraipakkam, Chennai, we specialize in authentic Chettinad cuisine,
                      bringing you the bold spices and rich aromas that define the region's culinary heritage.</p>
               </div>
            </div>
         </div>
      </section>
      {/* <!--Video End--> */}

    
      {/* <AuAwards></AuAwards> */}

      <TrustedBy></TrustedBy>

   </main>
   <script src="js/jquery-3.6.4.min.js"></script>
   <script src="js/bootstrap.bundle.min.js"></script>
   <script src="js/wow.min.js"></script>
   <script src="js/anime.min.js"></script>
   <script src="js/grt-youtube-popup.js"></script>
   <script src="js/owl.carousel.min.js"></script>
   <script src="js/custom.js"></script>

   {/* <script>
      $(".youtube-link").grtyoutube({
         autoPlay: true,
         theme: "dark",
      });
   </script>

   <script>
      const video = document.getElementById('aboutUsBgVideo');
      const playPauseButton = document.getElementById('playPauseButton');

      playPauseButton.addEventListener('click', () => {
         if (video.paused) {
            video.play();
            playPauseButton.innerHTML = '<i className="fa-solid fa-pause"></i>';
         } else {
            video.pause();
            playPauseButton.innerHTML = '<i className="fa-solid fa-play"></i>';
         }
      });
   </script> */}
    </>
    );
}

export default AboutUs