import { cn } from "@/lib/utils";

interface FaqProps {
  className?: string;
}

export default function Faq({ className }: FaqProps) {
  return (
    <section className={cn("testimonial_section europa-faq-section", className)} id="faq">
      <div className="padding_global">
        <div className="container">
          <div className="section_header">
            <h2 className="text-center" data-title-anim="">
              Frequently asked questions
            </h2>
          </div>
          <div className="europa-faq-list">
            <details className="europa-faq-item">
              <summary>
                Can I attend more than one track?
              </summary>
              <div className="europa-faq-answer">
                <p>
                  The planned format allows movement between open sessions where schedule and capacity permit.
                </p>
              </div>
            </details>
            <details className="europa-faq-item">
              <summary>
                Are sessions suitable for early-stage startups?
              </summary>
              <div className="europa-faq-answer">
                <p>
                  Relevance depends on each session's focus and the company's current challenge.
                </p>
              </div>
            </details>
            <details className="europa-faq-item">
              <summary>
                Will materials be shared?
              </summary>
              <div className="europa-faq-answer">
                <p>
                  Materials may be provided where speakers and organisers approve them.
                </p>
              </div>
            </details>
            <details className="europa-faq-item">
              <summary>
                Can a startup apply to showcase?
              </summary>
              <div className="europa-faq-answer">
                <p>
                  The application process will be announced after criteria and dates are confirmed.
                </p>
              </div>
            </details>
            <details className="europa-faq-item">
              <summary>
                Are sessions recorded?
              </summary>
              <div className="europa-faq-answer">
                <p>
                  Recording plans are not confirmed.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
