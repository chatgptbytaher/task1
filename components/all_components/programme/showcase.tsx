import { cn } from "@/lib/utils";

interface ShowcaseProps {
  className?: string;
}

export default function Showcase({ className }: ShowcaseProps) {
  return (
    <section className={cn("work_section", className)} id="showcase" style={{ display: "none!important" }}>
      <div className="padding_global">
        <div className="container">
          <div className="section_header is_work">
            <h2 className="work_section_title" data-title-anim="">
              IDEAS WORTH EXPLORING
            </h2>
            <div className="floating_text is-work" data-floating-badge="">
              NOTES FROM THE FIELD
            </div>
          </div>
          <div className="work_items_track">
            <div className="work_items_wrapper">
              <div className="work_collection_list_wrapper w-dyn-list" data-work-item="">
                <div className="w-dyn-items" role="list">
                  <div className="work_item w-dyn-item" role="listitem" style={{ backgroundColor: "#ab9bff" }}>
                    <div className="work_left_content">
                      <a aria-label="work link" className="work_link w-inline-block" href="#about">
                        <h3 className="heading_style_h4 work_title">
                          From Prototype to Paid Product
                        </h3>
                      </a>
                      <p className="work_description_text">
                        Start with user value, not technical novelty.
                      </p>
                      <a className="button_primary v2 w-inline-block" data-button-primary-v2="" href="#about">
                        <div className="button_line_mask_wrapper">
                          <div className="button_line_mask_v2" data-button-line-mask-v2="" style={{ background: "#ab9bff" }} />
                          <span className="button_line_mask_v2 _2" data-button-line-mask-v2="" style={{ background: "#ab9bff" }} />
                          <div className="button_line_mask_v2 _3" data-button-line-mask-v2="" style={{ background: "#ab9bff" }} />
                        </div>
                        <div className="button_line" data-button-line-v2="" />
                        <div className="button_text_wrapper">
                          <p className="button_text_v2" data-button-text-v2="">
                            Explore the Conference
                          </p>
                          <p className="button_text_v2 second_text" data-button-text-v2="">
                            Explore the Conference
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="work_right_content" style={{ backgroundColor: "#8673ee" }}>
                      <div className="work_image_visual">
                        <img alt="Startup founders working together in an office" className="image-cover" loading="lazy" src={"https://images.pexels.com/photos/8128192/pexels-photo-8128192.jpeg?cs=srgb&dl=pexels-ofspace-8128192.jpg&fm=jpg"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="work_collection_list_wrapper _2 w-dyn-list" data-work-item="">
                <div className="w-dyn-items" role="list">
                  <div className="work_item _2 w-dyn-item" role="listitem" style={{ backgroundColor: "#ff905f" }}>
                    <div className="work_left_content">
                      <a aria-label="work link" className="work_link w-inline-block" href="#about">
                        <h3 className="heading_style_h4 work_title">
                          Build a Repeatable Sales Motion
                        </h3>
                      </a>
                      <p className="work_description_text">
                        Find the customer and process behind consistent revenue.
                      </p>
                      <a className="button_primary v2 w-inline-block" data-button-primary-v2="" href="#about">
                        <div className="button_line_mask_wrapper">
                          <div className="button_line_mask_v2" data-button-line-mask-v2="" style={{ background: "#FF905F" }} />
                          <span className="button_line_mask_v2 _2" data-button-line-mask-v2="" style={{ background: "#FF905F" }} />
                          <div className="button_line_mask_v2 _3" data-button-line-mask-v2="" style={{ background: "#FF905F" }} />
                        </div>
                        <div className="button_line" data-button-line-v2="" />
                        <div className="button_text_wrapper">
                          <p className="button_text_v2" data-button-text-v2="">
                            Explore the Conference
                          </p>
                          <p className="button_text_v2 second_text" data-button-text-v2="">
                            Explore the Conference
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="work_right_content" style={{ backgroundColor: "#ff7d44" }}>
                      <div className="work_image_visual">
                        <img alt="Startup colleagues collaborating on a new project" className="image-cover" loading="lazy" src={"https://images.pexels.com/photos/6140702/pexels-photo-6140702.jpeg?cs=srgb&dl=pexels-william-fortunato-6140702.jpg&fm=jpg"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="work_collection_list_wrapper _3 w-dyn-list" data-work-item="">
                <div className="w-dyn-items" role="list">
                  <div className="work_item _3 w-dyn-item" role="listitem" style={{ backgroundColor: "#ff767a" }}>
                    <div className="work_left_content">
                      <a aria-label="work link" className="work_link w-inline-block" href="#about">
                        <h3 className="heading_style_h4 work_title">
                          Entering a New Market with Evidence
                        </h3>
                      </a>
                      <p className="work_description_text">
                        Test demand before committing to a new geography.
                      </p>
                      <a className="button_primary v2 w-inline-block" data-button-primary-v2="" href="#about">
                        <div className="button_line_mask_wrapper">
                          <div className="button_line_mask_v2" data-button-line-mask-v2="" style={{ background: "#FF767A" }} />
                          <span className="button_line_mask_v2 _2" data-button-line-mask-v2="" style={{ background: "#FF767A" }} />
                          <div className="button_line_mask_v2 _3" data-button-line-mask-v2="" style={{ background: "#FF767A" }} />
                        </div>
                        <div className="button_line" data-button-line-v2="" />
                        <div className="button_text_wrapper">
                          <p className="button_text_v2" data-button-text-v2="">
                            Explore the Conference
                          </p>
                          <p className="button_text_v2 second_text" data-button-text-v2="">
                            Explore the Conference
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="work_right_content" style={{ backgroundColor: "#ff5b60" }}>
                      <div className="work_image_visual">
                        <img alt="Founders collaborating in a modern workspace" className="image-cover" loading="lazy" src={"https://images.pexels.com/photos/3865817/pexels-photo-3865817.jpeg?cs=srgb&dl=pexels-olly-3865817.jpg&fm=jpg"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="work_collection_list_wrapper _4 w-dyn-list" data-work-item="">
                <div className="w-dyn-items" role="list">
                  <div className="work_item _4 w-dyn-item" role="listitem" style={{ backgroundColor: "#b8c56f" }}>
                    <div className="work_left_content">
                      <a aria-label="work link" className="work_link w-inline-block" href="#about">
                        <h3 className="heading_style_h4 work_title">
                          Progress is built together
                        </h3>
                      </a>
                      <p className="work_description_text">
                        Compare ideas with people who understand the work behind growth.
                      </p>
                      <a className="button_primary v2 w-inline-block" data-button-primary-v2="" href="#about">
                        <div className="button_line_mask_wrapper">
                          <div className="button_line_mask_v2" data-button-line-mask-v2="" style={{ background: "#B8C56F" }} />
                          <span className="button_line_mask_v2 _2" data-button-line-mask-v2="" style={{ background: "#B8C56F" }} />
                          <div className="button_line_mask_v2 _3" data-button-line-mask-v2="" style={{ background: "#B8C56F" }} />
                        </div>
                        <div className="button_line" data-button-line-v2="" />
                        <div className="button_text_wrapper">
                          <p className="button_text_v2" data-button-text-v2="">
                            Explore the Conference
                          </p>
                          <p className="button_text_v2 second_text" data-button-text-v2="">
                            Explore the Conference
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="work_right_content" style={{ backgroundColor: "#9fae4b" }}>
                      <div className="work_image_visual">
                        <img alt="Speaker presenting at a technology event" className="image-cover" loading="lazy" src={"https://images.pexels.com/photos/28683722/pexels-photo-28683722.jpeg?cs=srgb&dl=pexels-viridianaor-28683722.jpg&fm=jpg"} />
                      </div>
                    </div>
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
