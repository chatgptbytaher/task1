import { cn } from "@/lib/utils";
import testimonial_avatar_1_i from "@/assets/images/testimonial-avatar-1.jpg";
import testimonial_avatar_2_i from "@/assets/images/testimonial-avatar-2.jpg";
import testimonial_avatar_3_i from "@/assets/images/testimonial-avatar-3.jpg";
import testimonial_avatar_4_i from "@/assets/images/testimonial-avatar-4.jpg";
import testimonial_avatar_5_i from "@/assets/images/testimonial-avatar-5.jpg";
import testimonial_avatar_6_i from "@/assets/images/testimonial-avatar-6.jpg";

interface TestimonialsProps {
  className?: string;
}

export default function Testimonials({ className }: TestimonialsProps) {
  return (
    <section className={cn("eu-section", className)} id="testimonials">
      <div className="eu-wrap">
        <header className="eu-testimonial-head">
          <p className="eu-kicker eu-reveal">
            Testimonials
          </p>
          <h2 className="eu-title eu-reveal">
            {"We love what we do, and "}
            <em>
              they love the results.
            </em>
          </h2>
        </header>
        <div className="eu-testimonial-grid">
          <article className="eu-quote-card eu-reveal">
            <div aria-label="Illustrative rating" className="eu-stars">
              ★★★★★
            </div>
            <p className="eu-quote">
              “An insightful and well-organised event. I left with clearer ideas and new connections across Europe’s startup ecosystem.”
            </p>
            <div className="eu-quote-person">
              <img alt="Illustrative profile portrait" loading="lazy" src={testimonial_avatar_1_i} />
              <div>
                <strong>
                  Sofia Laurent
                </strong>
                <span>
                  {"Founder & CEO, Northstar Labs"}
                </span>
              </div>
            </div>
          </article>
          <article className="eu-quote-card eu-reveal">
            <div aria-label="Illustrative rating" className="eu-stars">
              ★★★★★
            </div>
            <p className="eu-quote">
              “A strong mix of founders, investors and operators. The sessions were practical and relevant.”
            </p>
            <div className="eu-quote-person">
              <img alt="Illustrative profile portrait" loading="lazy" src={testimonial_avatar_2_i} />
              <div>
                <strong>
                  Erik van Dijk
                </strong>
                <span>
                  Partner, Meridian Ventures
                </span>
              </div>
            </div>
          </article>
          <article className="eu-quote-card eu-reveal">
            <div aria-label="Illustrative rating" className="eu-stars">
              ★★★★★
            </div>
            <p className="eu-quote">
              “A valuable event for anyone building or scaling in Europe. The content was focused and useful.”
            </p>
            <div className="eu-quote-person">
              <img alt="Illustrative profile portrait" loading="lazy" src={testimonial_avatar_3_i} />
              <div>
                <strong>
                  Marta Kowalska
                </strong>
                <span>
                  COO, Fieldwork Systems
                </span>
              </div>
            </div>
          </article>
          <article className="eu-quote-card eu-reveal">
            <div aria-label="Illustrative rating" className="eu-stars">
              ★★★★★
            </div>
            <p className="eu-quote">
              “The agenda covered the topics that matter right now. I found new perspectives on product and growth.”
            </p>
            <div className="eu-quote-person">
              <img alt="Illustrative profile portrait" loading="lazy" src={testimonial_avatar_4_i} />
              <div>
                <strong>
                  Jonas Meyer
                </strong>
                <span>
                  Co-founder, CircuitNorth
                </span>
              </div>
            </div>
          </article>
          <article className="eu-quote-card eu-reveal">
            <div aria-label="Illustrative rating" className="eu-stars">
              ★★★★★
            </div>
            <p className="eu-quote">
              “A well-curated programme with room for honest conversations and practical questions.”
            </p>
            <div className="eu-quote-person">
              <img alt="Illustrative profile portrait" loading="lazy" src={testimonial_avatar_5_i} />
              <div>
                <strong>
                  Ines Carvalho
                </strong>
                <span>
                  Founder, CommonCurrent
                </span>
              </div>
            </div>
          </article>
          <article className="eu-quote-card eu-reveal">
            <div aria-label="Illustrative rating" className="eu-stars">
              ★★★★★
            </div>
            <p className="eu-quote">
              “A useful mix of strategic thinking and real-world operating experience.”
            </p>
            <div className="eu-quote-person">
              <img alt="Illustrative profile portrait" loading="lazy" src={testimonial_avatar_6_i} />
              <div>
                <strong>
                  Amira Haddad
                </strong>
                <span>
                  Chief Revenue Officer, LedgerSpring
                </span>
              </div>
            </div>
          </article>
        </div>
        <p className="eu-disclaimer eu-reveal">
          Illustrative concept profiles and sample copy — not verified attendee testimonials or confirmed participants.
        </p>
      </div>
    </section>
  );
}
