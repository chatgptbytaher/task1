import { cn } from "@/lib/utils";

interface ContactProps {
  className?: string;
}

export default function Contact({ className }: ContactProps) {
  return (
    <section className={cn("eu-section", className)} id="contact">
      <div className="eu-wrap eu-contact-layout">
        <div className="eu-contact-info">
          <p className="eu-kicker eu-reveal">
            Contact
          </p>
          <h2 className="eu-contact-title eu-reveal">
            Let’s talk
          </h2>
          <p className="eu-contact-intro eu-reveal">
            Have a question, partnership idea, or just want to say hello? We’d love to hear from you.
          </p>
          <div className="eu-contact-methods">
            <article className="eu-contact-method eu-reveal">
              <div className="eu-contact-orb" />
              <small>
                Partnership enquiries
              </small>
              <h3>
                Want to partner with Europa?
              </h3>
              <p>
                Explore partnership opportunities and create meaningful connections with Europe’s startup ecosystem.
              </p>
              <a className="eu-text-link" href="#partners">
                {"Explore partnership opportunities "}
                <span>
                  →
                </span>
              </a>
            </article>
            <article className="eu-contact-method eu-reveal">
              <div className="eu-contact-orb" />
              <small>
                Attendee support
              </small>
              <h3>
                Need help with the event?
              </h3>
              <p>
                Find answers to common questions about passes, venue, travel and the programme.
              </p>
              <a className="eu-text-link" href="#faq">
                {"Read the FAQs "}
                <span>
                  →
                </span>
              </a>
            </article>
          </div>
        </div>
        <div className="eu-form-card eu-reveal">
          <p className="eu-kicker">
            Send us a message
          </p>
          <h2>
            Get in touch
          </h2>
          <p>
            Tell us a little about your enquiry and the team can follow up when the event contact process is active.
          </p>
          <form action="mailto:hello@europa.example" className="eu-contact-form" encType="text/plain" method="post">
            <div className="eu-form-grid">
              <div className="eu-field">
                <label htmlFor="eu-first">
                  First name
                </label>
                <input autoComplete="given-name" id="eu-first" name="First name" placeholder="Your first name" required />
              </div>
              <div className="eu-field">
                <label htmlFor="eu-last">
                  Last name
                </label>
                <input autoComplete="family-name" id="eu-last" name="Last name" placeholder="Your last name" required />
              </div>
              <div className="eu-field full">
                <label htmlFor="eu-email">
                  Work email
                </label>
                <input autoComplete="email" id="eu-email" name="Work email" placeholder="you@company.com" required type="email" />
              </div>
              <div className="eu-field">
                <label htmlFor="eu-company">
                  Company
                </label>
                <input autoComplete="organization" id="eu-company" name="Company" placeholder="Your company" />
              </div>
              <div className="eu-field">
                <label htmlFor="eu-interest">
                  I’m interested in
                </label>
                <select id="eu-interest" name="Interest">
                  <option>
                    Attend
                  </option>
                  <option>
                    Speak
                  </option>
                  <option>
                    Showcase
                  </option>
                  <option>
                    Partner
                  </option>
                  <option>
                    Other
                  </option>
                </select>
              </div>
              <div className="eu-field full">
                <label htmlFor="eu-message">
                  Message
                </label>
                <textarea id="eu-message" name="Message" placeholder="Tell us more about your enquiry..." required />
              </div>
            </div>
            <button className="eu-submit" type="submit">
              Send message   →
            </button>
            <p className="eu-disclaimer">
              This concept form opens your email app. Connect a real form service before launch.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
