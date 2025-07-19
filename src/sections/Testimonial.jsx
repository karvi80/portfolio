import React from "react";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../../constants";
import GlowCard from "../components/glowCard";

const Testimonial = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me"
          sub="⭐️ Co-Worker Feedback Highlights"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map(({ name, imgPath, mentions, contact, review }) => (
            <GlowCard key={name} card={{ review }}>
              <a
                href={`mailto:${contact}`}
                className="flex items-center gap-3 cursor-pointer hover:underline"
              >
                <div className="w-[40px] h-[40px] rounded-full overflow-hidden bg-white-50">
                  <img src={imgPath || "/images/no-image.png"} alt={name} />
                </div>

                <div>
                  <p className="font-bold">{name}</p>
                  <a className="text-white-50">{mentions}</a>
                </div>
              </a>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
