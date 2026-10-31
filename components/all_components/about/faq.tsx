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
                Who should attend?
              </summary>
              <div className="europa-faq-answer">
                <p>
                  Founders, investors, operators, product leaders and startup ecosystem professionals.
                </p>
              </div>
            </details>
            <details className="europa-faq-item">
              <summary>
                Is the venue confirmed?
              </summary>
              <div className="europa-faq-answer">
                <p>
                  No. Amsterdam is the concept city; the venue is to be confirmed.
                </p>
              </div>
            </details>
            <details className="europa-faq-item">
              <summary>
                Are speakers and partners confirmed?
              </summary>
              <div className="europa-faq-answer">
                <p>
                  No. Names and organisations are fictional concept material.
                </p>
              </div>
            </details>
            <details className="europa-faq-item">
              <summary>
                What should participants take away?
              </summary>
              <div className="europa-faq-answer">
                <p>
                  The intended outcomes are a sharper priority, a practical experiment, a broader view and useful connections; these are not guaranteed results.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
