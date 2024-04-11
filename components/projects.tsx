"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function Projects() {
  const { ref } = useSectionInView("Work", 0.5);

  return (
    <section ref={ref} id="work" className="scroll-mt-28 mb-28">
      <SectionHeading>Our Recent Work</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Link href="https://sunshinedrycleaners.ca" target="_blank" rel="noopener noreferrer">
              <Project {...project} />
            </Link>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
