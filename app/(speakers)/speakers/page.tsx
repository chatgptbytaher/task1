import SiteScripts from "@/components/all_components/site-scripts";
import Preloader from "@/components/all_components/homepage/preloader";
import MainNav from "@/components/all_components/homepage/main-nav";
import Home from "@/components/all_components/homepage/home";
import About from "@/components/all_components/homepage/about";
import ConferenceFlow from "@/components/all_components/homepage/conference-flow";
import Showcase from "@/components/all_components/homepage/showcase";
import BrandsSection from "@/components/all_components/homepage/brands-section";
import Tracks from "@/components/all_components/homepage/tracks";
import Divider from "@/components/all_components/homepage/divider";
import Feature from "@/components/all_components/homepage/feature";
import SpeakerPreview from "@/components/all_components/homepage/speaker-preview";
import Passes from "@/components/all_components/homepage/passes";
import Speakers from "@/components/all_components/homepage/speakers";
import Testimonials from "@/components/all_components/homepage/testimonials";
import Partners from "@/components/all_components/homepage/partners";
import Programme from "@/components/all_components/homepage/programme";
import Faq from "@/components/all_components/homepage/faq";
import Contact from "@/components/all_components/homepage/contact";
import ClosingCta from "@/components/all_components/homepage/closing-cta";
import Divider2 from "@/components/all_components/homepage/divider-2";
import Footer from "@/components/all_components/homepage/footer";

const SCRIPTS = [
  "/js/index/01.js",
  "/js/speakers/01.js",
  "/js/speakers/02.js",
  "/js/speakers/03.js",
  "/js/speakers/04.js",
  "/js/speakers/07.js",
  "/js/speakers/08.js",
  "/js/speakers/09.js",
  "/js/speakers/10.js",
  "/js/speakers/05.js",
  "/js/speakers/06.js",
  "/js/speakers/11.js",
  "/js/speakers/12-europa-universal-button-hover-script.js",
  "/js/speakers/13-europa-single-open-faq.js",
  "/js/speakers/14-europa-approved-motion.js",
  "/js/speakers/15-eu-speakers-horizontal-motion.js"
];

export default function Page() {
  return (
    <>
      <div className="page_wrapper">
        <Preloader />
        <MainNav />
        <Home />
        <SpeakerPreview />
        <Testimonials />
        <Speakers />
        <Passes />
        <Partners />
        <Faq />
        <Contact />
        <Divider2 />
        <Footer />
      </div>
      <SiteScripts scripts={SCRIPTS} />
    </>
  );
}
