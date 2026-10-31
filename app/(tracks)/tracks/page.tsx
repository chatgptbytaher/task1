import SiteScripts from "@/components/all_components/site-scripts";
import Preloader from "@/components/all_components/tracks/preloader";
import MainNav from "@/components/all_components/tracks/main-nav";
import Home from "@/components/all_components/tracks/home";
import About from "@/components/all_components/tracks/about";
import ConferenceFlow from "@/components/all_components/tracks/conference-flow";
import Showcase from "@/components/all_components/tracks/showcase";
import BrandsSection from "@/components/all_components/tracks/brands-section";
import Tracks from "@/components/all_components/tracks/tracks";
import Divider from "@/components/all_components/tracks/divider";
import Feature from "@/components/all_components/tracks/feature";
import SpeakerPreview from "@/components/all_components/tracks/speaker-preview";
import Passes from "@/components/all_components/tracks/passes";
import Speakers from "@/components/all_components/tracks/speakers";
import Testimonials from "@/components/all_components/tracks/testimonials";
import Partners from "@/components/all_components/tracks/partners";
import Programme from "@/components/all_components/tracks/programme";
import Faq from "@/components/all_components/tracks/faq";
import Contact from "@/components/all_components/tracks/contact";
import ClosingCta from "@/components/all_components/tracks/closing-cta";
import Divider2 from "@/components/all_components/tracks/divider-2";
import Footer from "@/components/all_components/tracks/footer";

const SCRIPTS = [
  "/js/index/01.js",
  "/js/tracks/01.js",
  "/js/tracks/02.js",
  "/js/tracks/03.js",
  "/js/tracks/04.js",
  "/js/tracks/07.js",
  "/js/tracks/08.js",
  "/js/tracks/09.js",
  "/js/tracks/10.js",
  "/js/tracks/05.js",
  "/js/tracks/06.js",
  "/js/tracks/11.js",
  "/js/tracks/12-europa-universal-button-hover-script.js",
  "/js/tracks/13-europa-single-open-faq.js",
  "/js/tracks/14-europa-approved-motion.js"
];

export default function Page() {
  return (
    <>
      <div className="page_wrapper">
        <Preloader />
        <MainNav />
        <Home />
        <About />
        <ConferenceFlow />
        <Showcase />
        <BrandsSection />
        <Tracks />
        <Divider />
        <Feature />
        <SpeakerPreview />
        <Passes />
        <Speakers />
        <Testimonials />
        <Partners />
        <Programme />
        <Faq />
        <Contact />
        <ClosingCta />
        <Divider2 />
        <Footer />
      </div>
      <SiteScripts scripts={SCRIPTS} />
    </>
  );
}
