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
                Is this the final programme?
              </summary>
              <div className="europa-faq-answer">
                <p>
                  No. Sessions, speakers, rooms and times must be confirmed.
                </p>
              </div>
            </details>
            <details className="europa-faq-item">
              <summary>
                Can I switch between tracks?
              </summary>
              <div className="europa-faq-answer">
                <p>
                  The planned format allows choices among open sessions, subject to schedule and capacity.
                </p>
              </div>
            </details>
            <details className="europa-faq-item">
              <summary>
                Are workshops included in every pass?
              </summary>
              <div className="europa-faq-answer">
                <p>
                  Access depends on final pass terms and room capacity.
                </p>
              </div>
            </details>
            <details className="europa-faq-item">
              <summary>
                Will the schedule change?
              </summary>
              <div className="europa-faq-answer">
                <p>
                  It may. Publish the latest confirmed schedule and update policy.
                </p>
              </div>
            </details>
            <details className="europa-faq-item">
              <summary>
                Where is the venue?
              </summary>
              <div className="europa-faq-answer">
                <p>
                  Amsterdam is the concept city; the venue is to be confirmed.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
