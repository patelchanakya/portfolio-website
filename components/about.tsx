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
      <SectionHeading>design / web / seo / social</SectionHeading>
      <p className="mb-3">
        At <span className="font-medium">Tru Designs</span>, we specialize in delivering <span className="font-medium">unmatched online experiences</span> to your customers through innovative <span className="italic">design</span>, <span className="font-medium">web development</span>, <span className="underline">search engine optimization</span>, and <span className="font-medium">social media marketing</span>. Our dedicated team is committed to <span className="italic">bringing your vision to life</span> and boosting your visibility in the digital world.
      </p>

      <p>
        Trust us to <span className="italic">captivate and engage your audience</span>, driving traffic to your website and <span className="font-medium">increasing conversions</span> with our expert <span className="font-medium">branding</span>, <span className="font-medium">web design</span>, and <span className="font-medium">digital marketing solutions</span>. We are here to create new business opportunities and help you succeed, ensuring your business stands out in the competitive digital landscape.
      </p>
    </motion.section>
  );
}
