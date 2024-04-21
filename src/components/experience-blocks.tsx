import React from 'react';

type AboutMe = {
    icon: string;
    title: string;
    text: string[];
};

type Experience = {
    position: string;
    period: string;
    company: string;
    companyLink: string;
};

type ExperienceEducation = {
    title: string;
    icon: string;
    experiences: Experience[];
};

const aboutSection: AboutMe[] = [
    {
        icon: '🌎',
        title: 'Languages',
        text: ['🇳🇱 Dutch fluent', '🇬🇧 English C1'],
    },
    {
        icon: '🧑🏻‍💻',
        title: 'Skills',
        text: ['TypeScript, Kotlin, Kubernetes, SQL, React', 'Git, Scrum, Docker, Kubernetes'],
    },
];

const experiences: ExperienceEducation[] = [
    {
        title: 'Education',
        icon: '🎓',
        experiences: [
            {
                position: 'Software Engineer',
                period: '2021-Present',
                company: 'HVA',
                companyLink: 'https://www.hva.nl/',
            },
            {
                position: 'Graduate Web Developer',
                period: '2017-2021',
                company: 'GLU',
                companyLink: 'https://www.glu.nl/opleiding/webdesign/',
            },
        ],
    },
    {
        title: 'Previous experience',
        icon: '💻',
        experiences: [
            {
                position: 'DevOps Engineer',
                period: '2024-Present',
                company: 'Albert Heijn',
                companyLink: 'https://www.ah.nl/',
            },
            {
                position: 'Software Engineer intern',
                period: '2023-2024',
                company: 'Albert Heijn',
                companyLink: 'https://www.ah.nl/',
            },
            {
                position: 'Web-developer intern',
                period: '2020-2021',
                company: 'Otys',
                companyLink: 'https://www.otys.nl/',
            },
        ],
    },
];

const ExperienceBlocks = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[832px] p-4 max-w-full mx-auto mb-12">
            {experiences.map((experience) => {
                return <article className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-xl space-y-2">
                    <div
                        className="flex h-12 w-12 bg-neutral-200 dark:bg-neutral-700 items-center justify-center text-2xl rounded-xl">
                        {experience.icon}
                    </div>
                    <h4 className="text-lg text-neutral-800 dark:text-neutral-200 font-bold">
                        {experience.title}
                    </h4>
                    <ul className="px-4 text-neutral-600 dark:text-neutral-400 text-sm list-disc list-outside space-y-2">
                        {experience.experiences.map((exp) => {
                            return <li key={exp.position}>
                                {exp.position}{' '}
                                <a
                                    href={exp.companyLink}
                                    target="_blank"
                                    className="text-primary-500 font-medium"
                                >
                                    @{exp.company}
                                </a>{' '}
                                <div>
                                    {exp.period}
                                </div>
                            </li>;
                        })}
                    </ul>
                </article>
            })}
            {aboutSection.map((about) => {
                return (
                    <article
                        key={about.icon}
                        className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-xl space-y-2"
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
    );
};

export default ExperienceBlocks;
