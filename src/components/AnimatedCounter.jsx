import React from "react";
import CountUp from "react-countup";
import { counterItems } from "../../constants";

const Counter = ({ countStart, counterEnd, suffix }) => {
  return (
    <div>
      <CountUp
        start={countStart}
        end={counterEnd}
        duration={2}
        suffix={suffix}
      />
    </div>
  );
};

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="w-full mb-8">
        <h3 className="text-3xl p-2 text-white-50">Abour me</h3>
        <p className="text-white-50 text-lg">
          After spending several years in the retail industry, I decided to
          pursue a long-time passion I've had since I was a kid — programming.
          About two years ago, while working full-time, I began teaching myself
          web development during my evenings and days off. It wasn’t easy
          juggling both, but my love for creating and problem-solving kept me
          going. Today, I’m proud to say I can build complete, responsive web
          pages from scratch, and I’m constantly pushing myself to learn more
          and grow as a developer. <br />
          <span className="flex gap-2">
            My github profile:{" "}
            <a
              href="https://github.com/karvi80"
              target="_blank"
              className="cursor-pointer hover:scale-120"
            >
              <img
                src="/images/github.svg"
                alt="github"
                className="w-[30px] h-[30px]"
              />
            </a>
          </span>
        </p>
      </div>
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div className="bg-zinc-900 rtounded-lg p-10 flex flex-col justify-center">
            <div
              key={item.label}
              className="counter-number text-white text-5xl font-bold mb-2"
            >
              <Counter
                countStart="0"
                counterEnd={item.value}
                suffix={item.suffix}
              />
            </div>

            <div className=" text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
