import { cn } from "@/lib/utils";

interface ProgrammeProps {
  className?: string;
}

export default function Programme({ className }: ProgrammeProps) {
  return (
    <section className={cn("step_section", className)} id="programme">
      <div className="padding_global">
        <div className="container">
          <div className="section_header is_step">
            <h2 className="heading_style_h4 step_section_title" data-title-anim="">
              Two days. Practical work.
            </h2>
            <p className="step_section_info">
              Amsterdam, Netherlands · 16–17 September 2027 · Venue to be confirmed
            </p>
          </div>
          {" "}
          <div aria-label="Programme day" className="programme-tabs" role="tablist" style={{ display: "flex", gap: "12px", margin: "24px 0" }}>
            <button aria-controls="day1-panel" aria-selected="true" className="button_primary" id="day1-tab" role="tab" tabIndex={0} type="button">
              Day 1 — Build the Core
            </button>
            <button aria-controls="day2-panel" aria-selected="false" className="button_primary" id="day2-tab" role="tab" tabIndex={-1} type="button">
              Day 2 — Scale with Intent
            </button>
          </div>
          {" "}
          <div aria-labelledby="day1-tab" id="day1-panel" role="tabpanel">
            <div className="steps_wrapper">
              <div className="step_item">
                <div className="step_item_inner">
                  <p className="step_count">
                    09:00–09:30
                  </p>
                  <h3 className="step_title">
                    {"Registration & Coffee"}
                  </h3>
                  <p className="step_info">
                    Arrive, review the programme and meet other founders.
                  </p>
                </div>
              </div>
              <div className="step_item">
                <div className="step_item_inner">
                  <p className="step_count">
                    09:30–09:45
                  </p>
                  <h3 className="step_title">
                    Welcome: Building Across Europe
                  </h3>
                  <p className="step_info">
                    Set the context for practical growth and cross-border opportunity.
                  </p>
                </div>
              </div>
              <div className="step_item">
                <div className="step_item_inner">
                  <p className="step_count">
                    09:45–10:25
                  </p>
                  <h3 className="step_title">
                    What Comes After Early Traction?
                  </h3>
                  <p className="step_info">
                    Explore the shift from proving demand to repeatable systems.
                  </p>
                </div>
              </div>
              <div className="step_item">
                <div className="step_item_inner">
                  <p className="step_count">
                    10:30–11:10
                  </p>
                  <h3 className="step_title">
                    From Prototype to Paid Product
                  </h3>
                  <p className="step_info">
                    Connect technical capability to a real user problem and viable model.
                  </p>
                </div>
              </div>
              <div className="step_item">
                <div className="step_item_inner">
                  <p className="step_count">
                    11:35–12:15
                  </p>
                  <h3 className="step_title">
                    Build a Repeatable Sales Motion
                  </h3>
                  <p className="step_info">
                    Clarify the customer, message and process behind consistent revenue.
                  </p>
                </div>
              </div>
              <div className="step_item">
                <div className="step_item_inner">
                  <p className="step_count">
                    12:20–13:00
                  </p>
                  <h3 className="step_title">
                    The Metrics Behind the Plan
                  </h3>
                  <p className="step_info">
                    Connect runway, unit economics and funding decisions.
                  </p>
                </div>
              </div>
              <div className="step_item">
                <div className="step_item_inner">
                  <p className="step_count">
                    14:00–14:40
                  </p>
                  <h3 className="step_title">
                    Build Trust into the Product
                  </h3>
                  <p className="step_info">
                    Explore distribution, reliability and customer confidence.
                  </p>
                </div>
              </div>
              <div className="step_item">
                <div className="step_item_inner">
                  <p className="step_count">
                    14:45–15:25
                  </p>
                  <h3 className="step_title">
                    From Pilot to Adoption
                  </h3>
                  <p className="step_info">
                    Understand deployment, buyer needs and long sales cycles.
                  </p>
                </div>
              </div>
              <div className="step_item">
                <div className="step_item_inner">
                  <p className="step_count">
                    15:50–18:00
                  </p>
                  <h3 className="step_title">
                    {"Case Lab, Roundtables & Networking"}
                  </h3>
                  <p className="step_info">
                    Work through a scaling challenge, identify trade-offs and continue useful conversations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {" "}
          <div aria-labelledby="day2-tab" hidden id="day2-panel" role="tabpanel">
            <div className="steps_wrapper">
              <div className="step_item">
                <div className="step_item_inner">
                  <p className="step_count">
                    09:00–09:40
                  </p>
                  <h3 className="step_title">
                    {"Coffee, Showcase & Day-Two Briefing"}
                  </h3>
                  <p className="step_info">
                    Reconnect with founders and focus on the systems needed for the next stage.
                  </p>
                </div>
              </div>
              <div className="step_item">
                <div className="step_item_inner">
                  <p className="step_count">
                    09:40–10:20
                  </p>
                  <h3 className="step_title">
                    Grow Without Growing Confusion
                  </h3>
                  <p className="step_info">
                    Explore decision rights, planning rhythms and accountability.
                  </p>
                </div>
              </div>
              <div className="step_item">
                <div className="step_item_inner">
                  <p className="step_count">
                    10:25–11:05
                  </p>
                  <h3 className="step_title">
                    Choose the Market Before the Map
                  </h3>
                  <p className="step_info">
                    Test demand, localisation and market-entry readiness.
                  </p>
                </div>
              </div>
              <div className="step_item">
                <div className="step_item_inner">
                  <p className="step_count">
                    11:30–12:10
                  </p>
                  <h3 className="step_title">
                    Raise Now, Raise Later or Build with Less?
                  </h3>
                  <p className="step_info">
                    Compare funding paths using milestones and operating evidence.
                  </p>
                </div>
              </div>
              <div className="step_item">
                <div className="step_item_inner">
                  <p className="step_count">
                    12:15–12:55
                  </p>
                  <h3 className="step_title">
                    Build the First Leadership Layer
                  </h3>
                  <p className="step_info">
                    Discuss management habits, hiring priorities and team clarity.
                  </p>
                </div>
              </div>
              <div className="step_item">
                <div className="step_item_inner">
                  <p className="step_count">
                    13:55–14:35
                  </p>
                  <h3 className="step_title">
                    Design a 90-Day Growth Experiment
                  </h3>
                  <p className="step_info">
                    Define a hypothesis, owner, measure and decision point.
                  </p>
                </div>
              </div>
              <div className="step_item">
                <div className="step_item_inner">
                  <p className="step_count">
                    14:40–15:20
                  </p>
                  <h3 className="step_title">
                    Selling into Complex Markets
                  </h3>
                  <p className="step_info">
                    Explore buyer readiness, implementation and trust.
                  </p>
                </div>
              </div>
              <div className="step_item">
                <div className="step_item_inner">
                  <p className="step_count">
                    15:45–18:00
                  </p>
                  <h3 className="step_title">
                    {"Case Exchange, Next-Stage Plan & Closing"}
                  </h3>
                  <p className="step_info">
                    Turn the conference into one priority, one owner and one measure.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {" "}
          <p>
            Schedule is proposed concept content. Sessions, speakers, rooms and times must be confirmed before publication.
          </p>
          <a className="button_primary w-inline-block" href="index.html#passes">
            <div className="button_text_wrapper">
              <p className="button_text">
                Get Your Pass
              </p>
              <p className="button_text second_text">
                Get Your Pass
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
