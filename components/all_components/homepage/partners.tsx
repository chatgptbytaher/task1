import { cn } from "@/lib/utils";

interface PartnersProps {
  className?: string;
}

export default function Partners({ className }: PartnersProps) {
  return (
    <section className={cn("eu-section", className)} id="partners">
      {" "}
      <div className="eu-wrap">
        {" "}
        <header className="eu-partner-head">
          {" "}
          <p className="eu-kicker eu-reveal">
            {"Partners & Sponsors"}
          </p>
          {" "}
          <h2 className="eu-title eu-reveal">
            Support Europe’s next builders.
          </h2>
          {" "}
          <p className="eu-lead eu-reveal" style={{ margin: "0 auto" }}>
            {"Partnership opportunities connect startups with technology,\n            capital, customers, talent and specialist expertise."}
          </p>
          {" "}
        </header>
        {" "}
        <div className="eu-partner-grid">
          {" "}
          <div className="eu-partner-tile eu-reveal">
            {"Technology & Infrastructure"}
          </div>
          {" "}
          <div className="eu-partner-tile eu-reveal">
            {"Capital & Investment"}
          </div>
          {" "}
          <div className="eu-partner-tile eu-reveal">
            Startup Ecosystems
          </div>
          {" "}
          <div className="eu-partner-tile eu-reveal">
            {"Talent & Recruitment"}
          </div>
          {" "}
          <div className="eu-partner-tile eu-reveal">
            Track Partner
          </div>
          {" "}
          <div className="eu-partner-tile eu-reveal">
            Practical Workshop
          </div>
          {" "}
          <div className="eu-partner-tile eu-reveal">
            Startup Showcase
          </div>
          {" "}
          <div className="eu-partner-tile eu-reveal">
            Community Collaboration
          </div>
          {" "}
          <div className="eu-partner-tile eu-reveal">
            Market Access
          </div>
          {" "}
          <div className="eu-partner-tile eu-reveal">
            {"Research & Deep Tech"}
          </div>
          {" "}
          <div className="eu-partner-tile eu-reveal">
            {"Media & Knowledge"}
          </div>
          {" "}
          <div className="eu-partner-tile eu-reveal">
            Founder Support
          </div>
          {" "}
        </div>
        {" "}
        <div className="eu-partner-bottom eu-reveal">
          {" "}
          <h3>
            Let’s build something meaningful together.
          </h3>
          {" "}
          <p>
            {"Explore sponsorship, workshop, showcase and community partnership formats for Europe Startup Conference\n            2027."}
          </p>
          <a className="eu-dark-btn" href="#contact">
            {"Discuss Partnerships "}
            <span>
              →
            </span>
          </a>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </section>
  );
}
