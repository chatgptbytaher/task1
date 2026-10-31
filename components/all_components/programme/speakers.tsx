import { cn } from "@/lib/utils";

interface SpeakersProps {
  className?: string;
}

export default function Speakers({ className }: SpeakersProps) {
  return (
    <section className={cn("testimonial_section", className)} id="speakers" style={{ display: "none!important" }}>
      <div className="padding_global">
        <div className="container">
          <div className="section_header">
            <h2 className="text-center" data-title-anim="">
              Learn from the work.
            </h2>
          </div>
          <p>
            Concept profiles across company building, investment and operations. All profiles below are fictional placeholders, not confirmed speakers.
          </p>
          <div className="testimonial_cards">
            {" "}
            <div className="testimonial_card">
              <h3>
                Sofia Laurent
              </h3>
              <p>
                {"Founder & CEO, Northstar Labs"}
              </p>
              <p>
                Company building and product-market fit
              </p>
              <p>
                From Early Demand to a Business That Repeats
              </p>
            </div>
            {" "}
            <div className="testimonial_card">
              <h3>
                Erik van Dijk
              </h3>
              <p>
                Partner, Meridian Ventures
              </p>
              <p>
                Venture capital and company growth
              </p>
              <p>
                Capital That Matches the Plan
              </p>
            </div>
            {" "}
            <div className="testimonial_card">
              <h3>
                Marta Kowalska
              </h3>
              <p>
                COO, Fieldwork Systems
              </p>
              <p>
                Operations and organisational scale
              </p>
              <p>
                The Operating Model After Product-Market Fit
              </p>
            </div>
            {" "}
            <div className="testimonial_card">
              <h3>
                Jonas Meyer
              </h3>
              <p>
                Co-founder, CircuitNorth
              </p>
              <p>
                AI and emerging technology
              </p>
              <p>
                From Technical Breakthrough to Useful Product
              </p>
            </div>
            {" "}
            <div className="testimonial_card">
              <h3>
                Ines Carvalho
              </h3>
              <p>
                Founder, CommonCurrent
              </p>
              <p>
                Climate and deep tech
              </p>
              <p>
                Selling Complex Innovation
              </p>
            </div>
            {" "}
            <div className="testimonial_card">
              <h3>
                Amira Haddad
              </h3>
              <p>
                Chief Revenue Officer, LedgerSpring
              </p>
              <p>
                Fintech and go-to-market
              </p>
              <p>
                Trust Is Part of the Financial Product
              </p>
            </div>
            {" "}
            <div className="testimonial_card">
              <h3>
                Theo Martin
              </h3>
              <p>
                Head of People, Brightline Works
              </p>
              <p>
                Leadership and talent
              </p>
              <p>
                Build Managers Before More Layers
              </p>
            </div>
            {" "}
            <div className="testimonial_card">
              <h3>
                Elena Rossi
              </h3>
              <p>
                Expansion Director, OpenRoute
              </p>
              <p>
                Cross-border growth
              </p>
              <p>
                Entering a New Market with Evidence
              </p>
            </div>
            {" "}
          </div>
        </div>
      </div>
    </section>
  );
}
