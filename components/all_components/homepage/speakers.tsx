import { cn } from "@/lib/utils";

interface SpeakersProps {
  className?: string;
}

export default function Speakers({ className }: SpeakersProps) {
  return (
    <section className={cn("eu-section eu-speakers-horizontal", className)} id="speakers" aria-label="Conference speakers">
      {" "}
      <div className="eu-speakers-topline">
        <span className="eu-speakers-kicker">
          <i />
          {" SPEAKERS"}
        </span>
        {" "}
        <div className="eu-speakers-controls">
          <button type="button" className="eu-speaker-arrow eu-speaker-prev" aria-label="Previous speakers">
            ←
          </button>
          <button type="button" className="eu-speaker-arrow eu-speaker-next" aria-label="Next speakers">
            →
          </button>
        </div>
        {" "}
      </div>
      {" "}
      <div className="eu-speakers-heading">
        {" "}
        <h2>
          {"Our "}
          <span>
            Speakers
          </span>
        </h2>
        {" "}
        <p>
          Meet the founders, investors and operators shaping
          <br className="eu-desktop-break" />
          {" the next generation of\n          startups."}
        </p>
        {" "}
      </div>
      {" "}
      <div className="eu-speakers-viewport">
        {" "}
        <div className="eu-speakers-track">
          {" "}
          <article className="eu-speaker-slide">
            {" "}
            <div className="eu-speaker-photo">
              <img src={"https://images.unsplash.com/photo-1614805380833-62f701bb74ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"} alt="Concept portrait for Sofia Laurent" loading="lazy" />
              <span className="eu-speaker-number">
                01
              </span>
            </div>
            {" "}
            <div className="eu-speaker-meta">
              {" "}
              <h3>
                Sofia Laurent
              </h3>
              {" "}
              <p>
                {"Founder & CEO, Northstar Labs"}
              </p>
              <span className="eu-speaker-specialty">
                {"Company building & product-market\n                fit"}
              </span>
              {" "}
            </div>
            {" "}
          </article>
          {" "}
          <article className="eu-speaker-slide">
            {" "}
            <div className="eu-speaker-photo">
              <img src={"https://images.unsplash.com/photo-1677543167033-af3c688aa4df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"} alt="Concept portrait for Erik van Dijk" loading="lazy" />
              <span className="eu-speaker-number">
                02
              </span>
            </div>
            {" "}
            <div className="eu-speaker-meta">
              {" "}
              <h3>
                Erik van Dijk
              </h3>
              {" "}
              <p>
                Partner, Meridian Ventures
              </p>
              <span className="eu-speaker-specialty">
                {"Venture capital & company\n                growth"}
              </span>
              {" "}
            </div>
            {" "}
          </article>
          {" "}
          <article className="eu-speaker-slide">
            {" "}
            <div className="eu-speaker-photo">
              <img src={"https://images.unsplash.com/photo-1738511980236-c670a95a3970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"} alt="Concept portrait for Marta Kowalska" loading="lazy" />
              <span className="eu-speaker-number">
                03
              </span>
            </div>
            {" "}
            <div className="eu-speaker-meta">
              {" "}
              <h3>
                Marta Kowalska
              </h3>
              {" "}
              <p>
                COO, Fieldwork Systems
              </p>
              <span className="eu-speaker-specialty">
                {"Operations & organisational scale"}
              </span>
              {" "}
            </div>
            {" "}
          </article>
          {" "}
          <article className="eu-speaker-slide">
            {" "}
            <div className="eu-speaker-photo">
              <img src={"https://images.unsplash.com/photo-1641214880602-3c9cd45eadf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"} alt="Concept portrait for Jonas Meyer" loading="lazy" />
              <span className="eu-speaker-number">
                04
              </span>
            </div>
            {" "}
            <div className="eu-speaker-meta">
              {" "}
              <h3>
                Jonas Meyer
              </h3>
              {" "}
              <p>
                Co-founder, CircuitNorth
              </p>
              <span className="eu-speaker-specialty">
                {"AI & emerging technology"}
              </span>
              {" "}
            </div>
            {" "}
          </article>
          {" "}
          <article className="eu-speaker-slide">
            {" "}
            <div className="eu-speaker-photo">
              <img src={"https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"} alt="Concept portrait for Ines Carvalho" loading="lazy" />
              <span className="eu-speaker-number">
                05
              </span>
            </div>
            {" "}
            <div className="eu-speaker-meta">
              {" "}
              <h3>
                Ines Carvalho
              </h3>
              {" "}
              <p>
                Founder, CommonCurrent
              </p>
              <span className="eu-speaker-specialty">
                {"Climate & deep tech"}
              </span>
              {" "}
            </div>
            {" "}
          </article>
          {" "}
          <article className="eu-speaker-slide">
            {" "}
            <div className="eu-speaker-photo">
              <img src={"\nhttps://images.unsplash.com/photo-1533919484729-be3fa3fa0325?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"} alt="Concept portrait for Amira Haddad" loading="lazy" />
              <span className="eu-speaker-number">
                06
              </span>
            </div>
            {" "}
            <div className="eu-speaker-meta">
              {" "}
              <h3>
                Amira Haddad
              </h3>
              {" "}
              <p>
                Chief Revenue Officer, LedgerSpring
              </p>
              <span className="eu-speaker-specialty">
                {"Fintech & go-to-market"}
              </span>
              {" "}
            </div>
            {" "}
          </article>
          {" "}
          <article className="eu-speaker-slide">
            {" "}
            <div className="eu-speaker-photo">
              <img src={"\nhttps://images.unsplash.com/photo-1648474484044-bb82df2f5a1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"} alt="Concept portrait for Theo Martin" loading="lazy" />
              <span className="eu-speaker-number">
                07
              </span>
            </div>
            {" "}
            <div className="eu-speaker-meta">
              {" "}
              <h3>
                Theo Martin
              </h3>
              {" "}
              <p>
                Head of People, Brightline Works
              </p>
              <span className="eu-speaker-specialty">
                {"Leadership & talent"}
              </span>
              {" "}
            </div>
            {" "}
          </article>
          {" "}
          <article className="eu-speaker-slide">
            {" "}
            <div className="eu-speaker-photo">
              <img src={"https://images.unsplash.com/photo-1634595477722-7bc68dd410fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"} alt="Concept portrait for Elena Rossi" loading="lazy" />
              <span className="eu-speaker-number">
                08
              </span>
            </div>
            {" "}
            <div className="eu-speaker-meta">
              {" "}
              <h3>
                Elena Rossi
              </h3>
              {" "}
              <p>
                Expansion Director, OpenRoute
              </p>
              <span className="eu-speaker-specialty">
                Cross-border growth
              </span>
              {" "}
            </div>
            {" "}
          </article>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="eu-speakers-footer">
        {" "}
        <div className="eu-speakers-progress">
          <span />
        </div>
        <a className="eu-speakers-all" href="speakers.html">
          {"VIEW ALL\n          SPEAKERS "}
          <span>
            ↗
          </span>
        </a>
        {" "}
      </div>
      {" "}
      <p className="eu-speakers-disclaimer">
        {"All names, roles, organisations and biographies are fictional concept profiles,\n        not confirmed speakers."}
      </p>
      {" "}
    </section>
  );
}
