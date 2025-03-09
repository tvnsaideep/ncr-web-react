import SearchBar from "../search/search";
import Blog from "../sections/Blog";
import DeliveryFood from "../sections/DeliveryFood";
import HowItWorks from "../sections/HowItWorks";
import MealPlan from "../sections/MealPlan";
import SpecialDish from "../sections/SpecialDish";
import SpecialTiffins from "../sections/SpecialTiffins";
import TrustedBy from "../sections/TrustedBy";

function Home(){
    return (
        <>
      
        <SearchBar></SearchBar>

        <SpecialDish></SpecialDish>

        <SpecialTiffins></SpecialTiffins>

        <MealPlan></MealPlan>

        <DeliveryFood></DeliveryFood>

        <HowItWorks></HowItWorks>

        {/* <AboutChef></AboutChef> */}

        {/* <ClientSays></ClientSays> */}

        <Blog></Blog>

        <TrustedBy></TrustedBy>
        </>
    );
}

export default Home