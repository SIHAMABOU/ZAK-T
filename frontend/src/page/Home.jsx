import Slider from "../components/Slider";
import Services from "../components/Services";
import Section1 from "../components/Section1";
import Media from "../components/Media";
import Choose_Us from "../components/Choose_Us";
import Popular from "../components/Most_Popular";
import Contact from "../components/Contact";
function Home() {
    return (
        <>
            <Slider />
            <Section1 />

            <Services />

            <Media />

            <Choose_Us />
            <Popular />

            <Contact />
        </>
    );
}

export default Home;
