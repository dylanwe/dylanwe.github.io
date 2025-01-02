import { ExperienceEducation } from "@site/src/types/experience";
import React from "react";

type TimelineProps = {
  experiences: ExperienceEducation;
}

const Timeline = ({experiences}: TimelineProps) => {
  return <div>
    <div className="flex gap-x-4 items-center">
      <div
        className="flex h-12 w-12 bg-neutral-200 dark:bg-neutral-700 items-center justify-center text-2xl rounded-xl">
        {experiences.icon}
      </div>
      <h4 className="text-2xl text-neutral-800 dark:text-neutral-200 font-bold mb-0">
        {experiences.title}
      </h4>
    </div>
    <ol className="relative ms-6 pt-6 border-s border-neutral-300 dark:border-neutral-700 border-solid border-l-1 border-0 list-none">
      {experiences.experiences.map(experience => (
        <li className="mb-10">
          <div
            className="absolute w-3 h-3 bg-neutral-300 rounded-full mt-1.5 -start-1.5 border border-white dark:border-neutral-900 dark:bg-neutral-700"></div>
          <time
            className="mb-1 text-sm font-normal leading-none text-neutral-500 dark:text-neutral-400">{experience.period}</time>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2"><a href={experience.companyLink} target="_blank" className="text-cyan-600 hover:text-cyan-800">{experience.company}</a> ∙ {experience.position}</h3>
          {experience.description && <p className="mb-4 text-base font-normal text-neutral-500 dark:text-neutral-400 max-w-full text-wrap">{experience.description}</p>}
        </li>
      ))}
    </ol>

  </div>
}

export default Timeline;