import { cn } from "@/lib/utils";
import InlineStyle from "@/components/all_components/inline-style";
import a_156c9a0b8f525a94_i from "@/assets/icons/156c9a0b8f525a94.svg";
import a_1b8a219152e62f65_v from "@/assets/videos/1b8a219152e62f65.webm";
import a_48603b67e4aaaaf9_v from "@/assets/videos/48603b67e4aaaaf9.mp4";
import a_5d89c6811e1132ce_v from "@/assets/videos/5d89c6811e1132ce.mp4";
import a_5e34e1cacd9ca1b0_v from "@/assets/videos/5e34e1cacd9ca1b0.webm";
import a_60c203306dec628f_v from "@/assets/videos/60c203306dec628f.mp4";
import a_89b67e2e7abab38c_v from "@/assets/videos/89b67e2e7abab38c.webm";
import b25755e0c7b88e96_v from "@/assets/videos/b25755e0c7b88e96.webm";
import ec5632ca8f58ba89_v from "@/assets/videos/ec5632ca8f58ba89.mp4";
import eefa4254106f01ca_i from "@/assets/icons/eefa4254106f01ca.svg";

interface TracksProps {
  className?: string;
}

export default function Tracks({ className }: TracksProps) {
  return (
    <section className={cn("service_section", className)} id="tracks" style={{ display: "none!important" }}>
      <div className="padding_global">
        <div className="container">
          <div className="section_header is_service">
            <h2 className="service_section_title" data-title-anim="">
              SIX PATHS TO MEANINGFUL GROWTH
            </h2>
            <div className="floating_text is_service" data-floating-badge="">
              THE WORK BEHIND GROWTH
            </div>
          </div>
          <div className="service_item">
            <div className="service_item_inner">
              <div className="service_item_content">
                <h3 className="service_item_title" data-title-anim="">
                  {"AI & EMERGING TECHNOLOGY"}
                </h3>
                <div className="service_item_tags_area">
                  <p className="service_item_tags_subtitle">
                    Focus areas:
                  </p>
                  <div className="service_item_tags_wrapper">
                    <div className="service_item_tag">
                      <p className="service_item_tag_text">
                        AI products
                      </p>
                    </div>
                    <div className="service_item_tag">
                      <p className="service_item_tag_text">
                        Automation
                      </p>
                    </div>
                    <div className="service_item_tag">
                      <p className="service_item_tag_text">
                        Data infrastructure
                      </p>
                    </div>
                    <div className="service_item_tag">
                      <p className="service_item_tag_text">
                        Responsible deployment
                      </p>
                    </div>
                    <div className="service_item_tag">
                      <p className="service_item_tag_text">
                        Product-market fit
                      </p>
                    </div>
                    <div className="service_item_tag">
                      <p className="service_item_tag_text">
                        Enterprise adoption
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service_item_video_wrap">
                <div className="service_item_video w-background-video w-background-video-atom" data-autoplay="true" data-loop="true" data-poster-url={"https://images.pexels.com/photos/35335992/pexels-photo-35335992.jpeg?cs=srgb&dl=pexels-this-and-no-internet-25-288559-35335992.jpg&fm=jpg"} data-video-urls={`${a_48603b67e4aaaaf9_v},${a_89b67e2e7abab38c_v}`} data-wf-ignore="true">
                  <video autoPlay data-object-fit="cover" data-wf-ignore="true" id="7e1f1754-24b2-b323-76e0-fef38d752545-video" loop muted playsInline style={{ backgroundImage: "url(\"https://images.pexels.com/photos/35335992/pexels-photo-35335992.jpeg?cs=srgb&dl=pexels-this-and-no-internet-25-288559-35335992.jpg&fm=jpg\")" }}>
                    <source data-wf-ignore="true" src={a_48603b67e4aaaaf9_v} />
                    <source data-wf-ignore="true" src={a_89b67e2e7abab38c_v} />
                  </video>
                  <noscript>
                    <InlineStyle file="speakers/11" />
                    <img alt="" data-wf-bgvideo-fallback-img="true" src={"https://images.pexels.com/photos/35335992/pexels-photo-35335992.jpeg?cs=srgb&dl=pexels-this-and-no-internet-25-288559-35335992.jpg&fm=jpg"} />
                  </noscript>
                  <div aria-live="polite">
                    <button aria-controls="7e1f1754-24b2-b323-76e0-fef38d752545-video" className="w-backgroundvideo-backgroundvideoplaypausebutton video_control_button w-background-video--control" data-w-bg-video-control="true" type="button">
                      <span className="video_state">
                        <img alt="Pause video" loading="lazy" src={eefa4254106f01ca_i} />
                      </span>
                      <span className="video_state" hidden>
                        <img alt="Play video" loading="lazy" src={a_156c9a0b8f525a94_i} />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service_item">
            <div className="service_item_inner">
              <div className="service_item_content">
                <h3 className="service_item_title" data-title-anim="">
                  {"FINTECH & FINANCIAL INFRASTRUCTURE"}
                </h3>
                <div className="service_item_tags_area">
                  <p className="service_item_tags_subtitle">
                    Focus areas:
                  </p>
                  <div className="service_item_tags_wrapper">
                    <div className="service_item_tag">
                      <p className="service_item_tag_text">
                        Payments
                      </p>
                    </div>
                    <div className="service_item_tag">
                      <p className="service_item_tag_text">
                        Embedded finance
                      </p>
                    </div>
                    <div className="service_item_tag">
                      <p className="service_item_tag_text">
                        Financial operations
                      </p>
                    </div>
                    <div className="service_item_tag">
                      <p className="service_item_tag_text">
                        Open banking
                      </p>
                    </div>
                    <div className="service_item_tag">
                      <p className="service_item_tag_text">
                        Fraud prevention
                      </p>
                    </div>
                    <div className="service_item_tag">
                      <p className="service_item_tag_text">
                        Compliance readiness
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service_item_video_wrap">
                <div className="service_item_video w-background-video w-background-video-atom" data-autoplay="true" data-loop="true" data-poster-url={"https://images.pexels.com/photos/34774349/pexels-photo-34774349.jpeg?cs=srgb&dl=pexels-bertellifotografia-34774349.jpg&fm=jpg"} data-video-urls={`${a_60c203306dec628f_v},${b25755e0c7b88e96_v}`} data-wf-ignore="true">
                  <video autoPlay data-object-fit="cover" data-wf-ignore="true" id="7e1f1754-24b2-b323-76e0-fef38d752562-video" loop muted playsInline style={{ backgroundImage: "url(\"https://images.pexels.com/photos/34774349/pexels-photo-34774349.jpeg?cs=srgb&dl=pexels-bertellifotografia-34774349.jpg&fm=jpg\")" }}>
                    <source data-wf-ignore="true" src={a_60c203306dec628f_v} />
                    <source data-wf-ignore="true" src={b25755e0c7b88e96_v} />
                  </video>
                  <noscript>
                    <InlineStyle file="speakers/12" />
                    <img alt="" data-wf-bgvideo-fallback-img="true" src={"https://images.pexels.com/photos/34774349/pexels-photo-34774349.jpeg?cs=srgb&dl=pexels-bertellifotografia-34774349.jpg&fm=jpg"} />
                  </noscript>
                  <div aria-live="polite">
                    <button aria-controls="7e1f1754-24b2-b323-76e0-fef38d752562-video" className="w-backgroundvideo-backgroundvideoplaypausebutton video_control_button w-background-video--control" data-w-bg-video-control="true" type="button">
                      <span className="video_state">
                        <img alt="Pause video" loading="lazy" src={eefa4254106f01ca_i} />
                      </span>
                      <span className="video_state" hidden>
                        <img alt="Play video" loading="lazy" src={a_156c9a0b8f525a94_i} />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service_item">
            <div className="service_item_inner">
              <div className="service_item_content">
                <h3 className="service_item_title" data-title-anim="">
                  {"CLIMATE & DEEP TECH"}
                </h3>
                <div className="service_item_tags_area">
                  <p className="service_item_tags_subtitle">
                    Focus areas:
                  </p>
                  <div className="service_item_tags_wrapper">
                    <div className="service_item_tag">
                      <p className="service_item_tag_text">
                        Climate solutions
                      </p>
                    </div>
                    <div className="service_item_tag">
                      <p className="service_item_tag_text">
                        Industrial technology
                      </p>
                    </div>
                    <div className="service_item_tag">
                      <p className="service_item_tag_text">
                        Energy
                      </p>
                    </div>
                    <div className="service_item_tag">
                      <p className="service_item_tag_text">
                        Research commercialisation
                      </p>
                    </div>
                    <div className="service_item_tag">
                      <p className="service_item_tag_text">
                        Deployment partners
                      </p>
                    </div>
                    <div className="service_item_tag">
                      <p className="service_item_tag_text">
                        Financing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service_item_video_wrap">
                <div className="service_item_video w-background-video w-background-video-atom" data-autoplay="true" data-loop="true" data-poster-url={"https://images.pexels.com/photos/28683722/pexels-photo-28683722.jpeg?cs=srgb&dl=pexels-viridianaor-28683722.jpg&fm=jpg"} data-video-urls={`${ec5632ca8f58ba89_v},${a_5e34e1cacd9ca1b0_v}`} data-wf-ignore="true">
                  <video autoPlay data-object-fit="cover" data-wf-ignore="true" id="7e1f1754-24b2-b323-76e0-fef38d75257f-video" loop muted playsInline style={{ backgroundImage: "url(\"https://images.pexels.com/photos/28683722/pexels-photo-28683722.jpeg?cs=srgb&dl=pexels-viridianaor-28683722.jpg&fm=jpg\")" }}>
                    <source data-wf-ignore="true" src={ec5632ca8f58ba89_v} />
                    <source data-wf-ignore="true" src={a_5e34e1cacd9ca1b0_v} />
                  </video>
                  <noscript>
                    <InlineStyle file="speakers/13" />
                    <img alt="" data-wf-bgvideo-fallback-img="true" src={"https://images.pexels.com/photos/28683722/pexels-photo-28683722.jpeg?cs=srgb&dl=pexels-viridianaor-28683722.jpg&fm=jpg"} />
                  </noscript>
                  <div aria-live="polite">
                    <button aria-controls="7e1f1754-24b2-b323-76e0-fef38d75257f-video" className="w-backgroundvideo-backgroundvideoplaypausebutton video_control_button w-background-video--control" data-w-bg-video-control="true" type="button">
                      <span className="video_state">
                        <img alt="Pause video" loading="lazy" src={eefa4254106f01ca_i} />
                      </span>
                      <span className="video_state" hidden>
                        <img alt="Play video" loading="lazy" src={a_156c9a0b8f525a94_i} />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service_item">
            <div className="service_item_inner">
              <div className="service_item_content">
                <h3 className="service_item_title" data-title-anim="">
                  {"GO-TO-MARKET & REVENUE"}
                </h3>
                <div className="service_item_tags_area">
                  <p className="service_item_tags_subtitle">
                    Focus areas:
                  </p>
                  <div className="service_item_tags_wrapper">
                    <div className="service_item_tag">
                      <p className="service_item_tag_text">
                        Positioning
                      </p>
                    </div>
                    <div className="service_item_tag">
                      <p className="service_item_tag_text">
                        Founder-led sales
                      </p>
                    </div>
                    <div className="service_item_tag">
                      <p className="service_item_tag_text">
                        Pipeline quality
                      </p>
                    </div>
                    <div className="service_item_tag">
                      <p className="service_item_tag_text">
                        Pricing
                      </p>
                    </div>
                    <div className="service_item_tag">
                      <p className="service_item_tag_text">
                        Retention
                      </p>
                    </div>
                    <div className="service_item_tag">
                      <p className="service_item_tag_text">
                        Expansion revenue
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service_item_video_wrap">
                <div className="service_item_video w-background-video w-background-video-atom" data-autoplay="true" data-loop="true" data-poster-url={"https://images.pexels.com/photos/38111334/pexels-photo-38111334.jpeg?cs=srgb&dl=pexels-wiseboy-wissebo-76504735-38111334.jpg&fm=jpg"} data-video-urls={`${a_5d89c6811e1132ce_v},${a_1b8a219152e62f65_v}`} data-wf-ignore="true">
                  <video autoPlay data-object-fit="cover" data-wf-ignore="true" id="7e1f1754-24b2-b323-76e0-fef38d7525a1-video" loop muted playsInline style={{ backgroundImage: "url(\"https://images.pexels.com/photos/38111334/pexels-photo-38111334.jpeg?cs=srgb&dl=pexels-wiseboy-wissebo-76504735-38111334.jpg&fm=jpg\")" }}>
                    <source data-wf-ignore="true" src={a_5d89c6811e1132ce_v} />
                    <source data-wf-ignore="true" src={a_1b8a219152e62f65_v} />
                  </video>
                  <noscript>
                    <InlineStyle file="speakers/14" />
                    <img alt="" data-wf-bgvideo-fallback-img="true" src={"https://images.pexels.com/photos/38111334/pexels-photo-38111334.jpeg?cs=srgb&dl=pexels-wiseboy-wissebo-76504735-38111334.jpg&fm=jpg"} />
                  </noscript>
                  <div aria-live="polite">
                    <button aria-controls="7e1f1754-24b2-b323-76e0-fef38d7525a1-video" className="w-backgroundvideo-backgroundvideoplaypausebutton video_control_button w-background-video--control" data-w-bg-video-control="true" type="button">
                      <span className="video_state">
                        <img alt="Pause video" loading="lazy" src={eefa4254106f01ca_i} />
                      </span>
                      <span className="video_state" hidden>
                        <img alt="Play video" loading="lazy" src={a_156c9a0b8f525a94_i} />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
