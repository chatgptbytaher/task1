import { cn } from "@/lib/utils";

interface FaqProps {
  className?: string;
}

export default function Faq({ className }: FaqProps) {
  return (
    <section className={cn("testimonial_section europa-faq-section", className)} id="faq">
      {" "}
      <div className="padding_global">
        {" "}
        <div className="container">
          {" "}
          <div className="section_header">
            {" "}
            <h2 className="text-center" data-title-anim="">
              Frequently asked questions
            </h2>
            {" "}
          </div>
          {" "}
          <div className="europa-faq-list">
            {" "}
            <details className="europa-faq-item">
              {" "}
              <summary>
                Who should attend?
              </summary>
              {" "}
              <div className="europa-faq-answer">
                {" "}
                <p>
                  Founders, investors, operators, product leaders and startup ecosystem professionals.
                </p>
                {" "}
              </div>
              {" "}
            </details>
            {" "}
            <details className="europa-faq-item">
              {" "}
              <summary>
                Is the event only for early-stage startups?
              </summary>
              {" "}
              <div className="europa-faq-answer">
                {" "}
                <p>
                  No. The planned content covers formation, early traction and scaling challenges.
                </p>
                {" "}
              </div>
              {" "}
            </details>
            {" "}
            <details className="europa-faq-item">
              {" "}
              <summary>
                Is the venue confirmed?
              </summary>
              {" "}
              <div className="europa-faq-answer">
                {" "}
                <p>
                  No. Amsterdam is the concept city; the venue is to be confirmed.
                </p>
                {" "}
              </div>
              {" "}
            </details>
            {" "}
            <details className="europa-faq-item">
              {" "}
              <summary>
                Are speakers and partners confirmed?
              </summary>
              {" "}
              <div className="europa-faq-answer">
                {" "}
                <p>
                  No. Names and organisations are fictional concept material.
                </p>
                {" "}
              </div>
              {" "}
            </details>
            {" "}
            <details className="europa-faq-item">
              {" "}
              <summary>
                Will sessions be recorded?
              </summary>
              {" "}
              <div className="europa-faq-answer">
                {" "}
                <p>
                  Recording plans are not confirmed. Publish a clear policy before registration.
                </p>
                {" "}
              </div>
              {" "}
            </details>
            {" "}
            <details className="europa-faq-item">
              {" "}
              <summary>
                Can my startup join the showcase?
              </summary>
              {" "}
              <div className="europa-faq-answer">
                {" "}
                <p>
                  The application process will be announced after criteria and capacity are confirmed.
                </p>
                {" "}
              </div>
              {" "}
            </details>
            {" "}
            <details className="europa-faq-item">
              {" "}
              <summary>
                What language will sessions use?
              </summary>
              {" "}
              <div className="europa-faq-answer">
                {" "}
                <p>
                  English is planned; confirm before publication.
                </p>
                {" "}
              </div>
              {" "}
            </details>
            {" "}
            <details className="europa-faq-item">
              {" "}
              <summary>
                What is the refund policy?
              </summary>
              {" "}
              <div className="europa-faq-answer">
                {" "}
                <p>
                  Terms have not been set. Publish the final policy before accepting payment.
                </p>
                {" "}
              </div>
              {" "}
            </details>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </section>
  );
}
