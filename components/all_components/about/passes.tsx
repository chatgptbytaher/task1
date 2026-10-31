import { cn } from "@/lib/utils";
import testimonial_avatar_1_i from "@/assets/images/testimonial-avatar-1.jpg";
import testimonial_avatar_2_i from "@/assets/images/testimonial-avatar-2.jpg";
import testimonial_avatar_3_i from "@/assets/images/testimonial-avatar-3.jpg";
import testimonial_avatar_6_i from "@/assets/images/testimonial-avatar-6.jpg";

interface PassesProps {
  className?: string;
}

export default function Passes({ className }: PassesProps) {
  return (
    <section className={cn("eu-section", className)} id="passes">
      <div className="eu-wrap">
        <p className="eu-kicker eu-reveal">
          Your two days
        </p>
        <h2 className="eu-title eu-reveal">
          Choose your pass.
        </h2>
        <p className="eu-lead eu-reveal">
          Two days of ideas, practical sessions and useful connections.
        </p>
        <div className="eu-pricing-grid">
          <article className="eu-price-card eu-reveal">
            <div className="eu-price-copy">
              <h3 className="eu-price-name">
                Community Pass
              </h3>
              <p className="eu-price-value">
                €249
              </p>
              <p className="eu-price-audience">
                For startup team members and ecosystem professionals.
              </p>
              <ul className="eu-price-features">
                <li>
                  Both days
                </li>
                <li>
                  Main stage
                </li>
                <li>
                  Open tracks
                </li>
                <li>
                  Showcase
                </li>
                <li>
                  Networking
                </li>
              </ul>
              <a className="eu-price-action" href="#contact">
                Choose Community
                <span>
                  →
                </span>
              </a>
            </div>
            <img alt="Illustrative profile portrait" className="eu-price-photo" loading="lazy" src={testimonial_avatar_1_i} />
          </article>
          <article className="eu-price-card eu-reveal">
            <div className="eu-price-copy">
              <h3 className="eu-price-name">
                Founder Pass
              </h3>
              <p className="eu-price-value">
                €399
              </p>
              <p className="eu-price-audience">
                For founders and startup leadership teams.
              </p>
              <ul className="eu-price-features">
                <li>
                  Community access
                </li>
                <li>
                  Founder roundtable
                </li>
                <li>
                  Peer discussion
                </li>
                <li>
                  Workshop booking where available
                </li>
              </ul>
              <a className="eu-price-action" href="#contact">
                Choose Founder
                <span>
                  →
                </span>
              </a>
            </div>
            <img alt="Illustrative profile portrait" className="eu-price-photo" loading="lazy" src={testimonial_avatar_2_i} />
          </article>
          <article className="eu-price-card eu-reveal">
            <div className="eu-price-copy">
              <h3 className="eu-price-name">
                Operator Pass
              </h3>
              <p className="eu-price-value">
                €449
              </p>
              <p className="eu-price-audience">
                For product, revenue, finance, people and operations leaders.
              </p>
              <ul className="eu-price-features">
                <li>
                  Community access
                </li>
                <li>
                  Operator sessions
                </li>
                <li>
                  Workshop booking where available
                </li>
                <li>
                  Programme notes if provided
                </li>
              </ul>
              <a className="eu-price-action" href="#contact">
                Choose Operator
                <span>
                  →
                </span>
              </a>
            </div>
            <img alt="Illustrative profile portrait" className="eu-price-photo" loading="lazy" src={testimonial_avatar_3_i} />
          </article>
          <article className="eu-price-card eu-reveal">
            <div className="eu-price-copy">
              <h3 className="eu-price-name">
                Investor Pass
              </h3>
              <p className="eu-price-value">
                €649
              </p>
              <p className="eu-price-audience">
                For venture investors and approved capital partners.
              </p>
              <ul className="eu-price-features">
                <li>
                  Conference access
                </li>
                <li>
                  Showcase
                </li>
                <li>
                  Investor networking if confirmed
                </li>
                <li>
                  Optional introductions subject to availability
                </li>
              </ul>
              <a className="eu-price-action" href="#contact">
                Register Interest
                <span>
                  →
                </span>
              </a>
            </div>
            <img alt="Illustrative profile portrait" className="eu-price-photo" loading="lazy" src={testimonial_avatar_6_i} />
          </article>
        </div>
        <p className="eu-price-note eu-reveal">
          Prices are illustrative planning figures only. Payment is not active and no booking is required at this stage. Confirm taxes, inclusions, refund terms and ticketing before launch.
        </p>
      </div>
    </section>
  );
}
