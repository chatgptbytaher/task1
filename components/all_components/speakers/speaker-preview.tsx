import { cn } from "@/lib/utils";

interface SpeakerPreviewProps {
  className?: string;
}

export default function SpeakerPreview({ className }: SpeakerPreviewProps) {
  return (
    <section className={cn("leader_section", className)} data-w-id="a472c650-0519-8b3b-d46a-39ea94787fc7" id="speaker-preview">
      <div className="leader_section_content" data-w-id="a472c650-0519-8b3b-d46a-39ea94787fc8">
        <div className="leader_section_badge">
          Concept speaker profiles
        </div>
        <h3 className="leader_section_title">
          {"Learn from "}
          <span className="text_gradiant">
            the work
          </span>
        </h3>
        <a className="button_primary w-inline-block" data-button-primary="" data-w-id="38728d2c-eb7f-cf2b-61d3-59d872520a83" data-wf--button-primary--variant="base" href="#about" target="">
          <div className="button_line_mask_wrapper">
            <div className="button_line_mask" data-button-line-mask="" />
            <div className="button_line_mask _2" data-button-line-mask="" />
            <div className="button_line_mask _3" data-button-line-mask="" />
          </div>
          <div className="button_line" data-button-line="" />
          <div className="button_text_wrapper">
            <p className="button_text" data-button-text="">
              Explore the Conference
            </p>
            <p className="button_text second_text" data-button-text="">
              Explore the Conference
            </p>
          </div>
        </a>
      </div>
      <div className="leader_circle_wrapper">
        <div className="leader_circle_item" data-w-id="75b34b45-6590-ddbb-86b0-0a178e8c2c17">
          <img alt="Technology conference speaker on stage" className="leader_circle_image" loading="lazy" src={"https://images.pexels.com/photos/34774349/pexels-photo-34774349.jpeg?cs=srgb&dl=pexels-bertellifotografia-34774349.jpg&fm=jpg"} />
        </div>
        <div className="leader_circle_item _2">
          <img alt="Startup conference audience listening to a panel" className="leader_circle_image" loading="lazy" src={"https://images.pexels.com/photos/29284284/pexels-photo-29284284.jpeg?cs=srgb&dl=pexels-bertellifotografia-29284284.jpg&fm=jpg"} />
        </div>
        <div className="leader_circle_item _3">
          <img alt="Startup founders working together in an office" className="leader_circle_image" loading="lazy" src={"https://images.pexels.com/photos/8128192/pexels-photo-8128192.jpeg?cs=srgb&dl=pexels-ofspace-8128192.jpg&fm=jpg"} />
        </div>
        <div className="leader_circle_item _4">
          <img alt={"\"OH MY!\" text logo in white inside a speech bubble on a pink background."} className="leader_circle_image" loading="lazy" src={"https://images.pexels.com/photos/39008598/pexels-photo-39008598.jpeg?cs=srgb&dl=pexels-caleboquendo-39008598.jpg&fm=jpg"} />
        </div>
        <div className="leader_circle_item _5">
          <img alt="Speaker addressing an audience at a business conference" className="leader_circle_image" loading="lazy" src={"https://images.pexels.com/photos/35335992/pexels-photo-35335992.jpeg?cs=srgb&dl=pexels-this-and-no-internet-25-288559-35335992.jpg&fm=jpg"} />
        </div>
        <div className="leader_circle_item _6">
          <img alt="Diverse audience at a technology conference" className="leader_circle_image" loading="lazy" src={"https://images.pexels.com/photos/38111334/pexels-photo-38111334.jpeg?cs=srgb&dl=pexels-wiseboy-wissebo-76504735-38111334.jpg&fm=jpg"} />
        </div>
        <div className="leader_circle_item _7">
          <img alt="Startup colleagues collaborating on a new project" className="leader_circle_image" loading="lazy" src={"https://images.pexels.com/photos/6140702/pexels-photo-6140702.jpeg?cs=srgb&dl=pexels-william-fortunato-6140702.jpg&fm=jpg"} />
        </div>
        <div className="leader_circle_item _8">
          <img alt="Founders collaborating in a modern workspace" className="leader_circle_image" loading="lazy" src={"https://images.pexels.com/photos/3865817/pexels-photo-3865817.jpeg?cs=srgb&dl=pexels-olly-3865817.jpg&fm=jpg"} />
        </div>
        <div className="leader_circle_item _9">
          <img alt="Speaker presenting at a technology event" className="leader_circle_image" loading="lazy" src={"https://images.pexels.com/photos/28683722/pexels-photo-28683722.jpeg?cs=srgb&dl=pexels-viridianaor-28683722.jpg&fm=jpg"} />
        </div>
        <div className="leader_circle_item _10">
          <img alt="Conference participants connecting and sharing ideas" className="leader_circle_image" loading="lazy" src={"https://images.pexels.com/photos/39008598/pexels-photo-39008598.jpeg?cs=srgb&dl=pexels-caleboquendo-39008598.jpg&fm=jpg"} />
        </div>
      </div>
    </section>
  );
}
