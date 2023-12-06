"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Having obtained a diploma in{" "}
        <span className="font-medium">building and construction management</span>, I decided to pursue my
        passion for programming. I enrolled in several coding courses and delved into{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect, specifically the structured approach to addressing challenges. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My primary stack includes{" "}
        <span className="font-medium">
          React, Next.js and Headless WordPress
        </span>. 
        I am also familiar with TypeScript and Prisma. I always strive to learn new technologies. Currently, I am seeking{" "}
        <span className="font-medium">a permanent position</span> as a software
        developer.
      </p>


      
      <p>
        <span className="italic">When I'm not coding</span>, I contemplate the meaning of life and enjoy gazing out the window. {" "}
        <span className="font-medium">I also love acquiring new knowledge</span>. At the moment,
        I am studying{" "}
        <span className="font-medium">how to implement beneficial habits and the Kanban system</span>. Additionally,
        I have a strong inclination toward standardization to maximize productivity in all aspects.
      </p>

      <p>
        There is an understanding that it is impossible to learn and remember everything. The idea is to gain some awareness of how to use this or that tool, understand the development architecture, and gain a special skill to quickly solve problems in a standardized way. The point is to standardize and improve the efficiency of all processes.
      </p>
    </motion.section>
  );
}
