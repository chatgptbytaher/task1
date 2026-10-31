import { cn } from "@/lib/utils";

interface ClosingCtaProps {
  className?: string;
}

export default function ClosingCta({ className }: ClosingCtaProps) {
  return (
    <section className={cn("eu-closing", className)} id="closing-cta">
      {" "}
      <div className="eu-wrap">
        {" "}
        <div className="eu-closing-panel">
          {" "}
          <div className="eu-closing-copy">
            {" "}
            <p className="eu-closing-eyebrow eu-reveal">
              Europe Startup Conference 2027
            </p>
            {" "}
            <h2 className="eu-reveal">
              Make your next move count.
            </h2>
            {" "}
            <p className="eu-reveal">
              Bring the hard question. Leave with clearer options and useful connections.
            </p>
            {" "}
            <div className="eu-closing-actions eu-reveal">
              <a className="eu-orange-btn" href="#passes">
                {"Get Your Pass\n                "}
                <span>
                  →
                </span>
              </a>
              <a className="eu-outline-btn" href="programme.html">
                {"View Programme "}
                <span>
                  →
                </span>
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div aria-hidden="true" className="eu-closing-art" />
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </section>
  );
}
