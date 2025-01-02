import React from 'react';
import { ABOUT_SECTION, EXPERIENCES } from "@site/src/constants/experience";
import Timeline from "@site/src/components/timeline";

const ExperienceBlocks = () => {
    return (
      <section className="max-w-[832px] p-4 mx-auto gap-12 space-y-4 mb-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-full mx-auto">
          {ABOUT_SECTION.map((about) => {
            return (
              <article
                key={about.icon}
                className="bg-neutral-100 bg-opacity-60 dark:bg-neutral-800 backdrop-blur-lg p-4 rounded-xl space-y-2"
              >
                <div
                  className="flex h-12 w-12 bg-neutral-200 dark:bg-neutral-700 items-center justify-center text-2xl rounded-xl">
                  {about.icon}
                </div>
                <h4 className="text-lg text-neutral-800 dark:text-neutral-200 font-bold">
                  {about.title}
                </h4>
                <ul className="text-neutral-600 dark:text-neutral-400 text-sm list-disc list-inside pl-0 space-y-2">
                  {about.text.map((text) => {
                    return <li key={text}>{text}</li>;
                  })}
                </ul>
              </article>
            );
          })}
        </section>
        {EXPERIENCES.map((experience) => {
          return <section className="flex gap-y-4 bg-neutral-100 bg-opacity-60 dark:bg-neutral-800 backdrop-blur-lg rounded-xl p-4">
            <Timeline experiences={experience}/>
          </section>
        })}
      </section>
    );
};

export default ExperienceBlocks;
