import { cn } from "@/lib/utils";
import InlineStyle from "@/components/all_components/inline-style";
import a_156c9a0b8f525a94_i from "@/assets/icons/156c9a0b8f525a94.svg";
import a_464396c0c01ca1ea_v from "@/assets/videos/464396c0c01ca1ea.webm";
import c4b9c27156fc069c_v from "@/assets/videos/c4b9c27156fc069c.mp4";
import eefa4254106f01ca_i from "@/assets/icons/eefa4254106f01ca.svg";

interface FeatureProps {
  className?: string;
}

export default function Feature({ className }: FeatureProps) {
  return (
    <section className={cn("showreel_section", className)} id="feature">
      {" "}
      <div className="showreel_track" data-w-id="a5de33aa-3176-3c88-011d-0b88b5649ab8">
        {" "}
        <div className="showreel_sticky">
          {" "}
          <div className="showreel_wrapper">
            {" "}
            <div className="showreel_video_mask">
              {" "}
              <div className="showreel_video_wrapper">
                {" "}
                <div className="showreel_video w-background-video w-background-video-atom" data-autoplay="false" data-loop="true" data-poster-url="https://images.pexels.com/photos/32731350/pexels-photo-32731350.jpeg" data-video-urls={`${c4b9c27156fc069c_v},${a_464396c0c01ca1ea_v}`} data-wf-ignore="true">
                  <video data-object-fit="cover" data-wf-ignore="true" id="f55b5a23-5601-e934-537b-c43b67a892af-video" loop muted playsInline style={{ backgroundImage: "url(\"https://images.pexels.com/photos/32731350/pexels-photo-32731350.jpeg\")" }}>
                    {" "}
                    <source data-wf-ignore="true" src={c4b9c27156fc069c_v} />
                    {" "}
                    <source data-wf-ignore="true" src={a_464396c0c01ca1ea_v} />
                    {" "}
                  </video>
                  <noscript>
                    {" "}
                    <InlineStyle file="index/16" />
                    <img alt="" data-wf-bgvideo-fallback-img="true" src="https://images.pexels.com/photos/32731350/pexels-photo-32731350.jpeg" />
                    {" "}
                  </noscript>
                  {" "}
                  <div aria-live="polite">
                    <button aria-controls="f55b5a23-5601-e934-537b-c43b67a892af-video" className="w-backgroundvideo-backgroundvideoplaypausebutton showreel_video_button w-background-video--control" data-w-bg-video-control="true" type="button">
                      <span className="showreel_video_icon_wrapper">
                        <img alt="Pause video" loading="lazy" src={eefa4254106f01ca_i} />
                      </span>
                      <span className="showreel_video_icon_wrapper" hidden>
                        <img alt="Play video" loading="lazy" src={a_156c9a0b8f525a94_i} />
                      </span>
                    </button>
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <h3 className="showreel_text _1">
              Play
            </h3>
            {" "}
            <h3 className="showreel_text _2">
              Reel
            </h3>
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
