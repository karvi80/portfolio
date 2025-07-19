import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {
  const sectionRef = useRef(null);

  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Left side */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <a
              target="_blank"
              href="https://eutel.vercel.app/"
              className="image-wrapper"
            >
              <img src="/images/Eutel-home.JPG" alt="eutel" />
            </a>

            <div className="text-content">
              <h2 className="text-white">
                Eutel is a Hotel search engine by area, that allows you to
                browse hotels and rooms, then make your reservation with payment
                option then receive confirmation by email, print or save it as
                pdf
              </h2>
              <p className="text-white-50 md:text-xl">
                An app build Next.js, typescript, tailwindcss & shadcn,
                usedr-friendly experience.
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <a
                target="_blank"
                href="https://storage-manager-2yywax3mx-ryans-projects-44626ce3.vercel.app/sign-in"
                className="image-wrapper "
              >
                <img src="./images/storeIt.jpeg" alt="store-it" />
              </a>
              <h2>storage management and file sharing platform</h2>
              <p>next.js 15, typescript, Appwrite, tailwind, shadcn</p>
            </div>

            <div className="project" ref={project3Ref}>
              <a
                href="https://job-finder-five-lake.vercel.app/"
                target="_blank"
                className="image-wrapper "
              >
                <img src="./images/JobFinder.JPG" alt="JobFinder" />
              </a>
              <h2>
                job and salary search by field and area, link to apply, create
                your resume and download it in pdf
              </h2>
              <p>next.js 15, typescript, Appwrite, tailwind.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
