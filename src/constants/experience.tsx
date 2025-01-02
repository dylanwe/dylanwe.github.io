import { AboutMe, ExperienceEducation } from 'src/types/experience';

export const ABOUT_SECTION: AboutMe[] = [
  {
    icon: '🌎',
    title: 'Languages',
    text: ['🇳🇱 Dutch fluent', '🇬🇧 English C1'],
  },
  {
    icon: '🧑🏻‍💻',
    title: 'Skills',
    text: ['Python, TypeScript, Kotlin, SQL, React', 'Git, Scrum, Docker, Kubernetes'],
  },
];

export const EXPERIENCES: ExperienceEducation[] = [
  {
    title: 'Work experience',
    icon: '💻',
    experiences: [
      {
        position: 'DevOps Engineer - GenAI Enablement',
        period: 'Sep 2024 - Present',
        company: 'Albert Heijn',
        companyLink: 'https://www.ah.nl/',
        description: (
          <>
            <p>
              Working on the GenAI Enablement team, we are responsible for the generative AI infrastructure.
              I focused our internal GPT wrapper and deployment / extension of a low-code AI orchestration platform.
            </p>
          </>
        )
      },
      {
        position: 'DevOps Engineer - Labs',
        period: 'Feb 2024 - Sep 2024',
        company: 'Albert Heijn',
        companyLink: 'https://www.ah.nl/',
        description: (
          <>
            <p>
              Worked as a mentor for interns. I guided them with new projects and helped them when they had any issues.
              In the summer vacation I worked in a team to create an internal communication tool.
              The tool was used to help our communication team to better cater to the needs of their target audience.
            </p>
          </>
        )
      },
      {
        position: 'Software Engineer intern',
        period: 'Sep 2023 - Feb 2024',
        company: 'Albert Heijn',
        companyLink: 'https://www.ah.nl/',
        description: (
          <>
            <p>
              Worked on two projects at the labs department.
            </p>

            <p>
              The first project was a tool to help shoppers compare the products on nutrition values.
              Users could give food preferences like vegan or more protein and the tool would show the best products.
              I worked on the backend and the frontend of the tool, I especially enjoyed working on the recommendation
              algorithm.
            </p>
            <p>
              The second project was an internal tool where we generated extra metadata with AI to help the product search engine.
            </p>
          </>
        )
      },
      {
        position: 'Web-developer intern',
        period: 'Feb 2020 - Feb 2021',
        company: 'Otys',
        companyLink: 'https://www.otys.nl/',
        description: (
          <>
            Collaborated with colleagues to create websites to connect Recruiters with candidates.
            Made an internal project to automate a part of the SEO optimization process.
            Collaborated with a designer to help design the new dashboard
          </>
        )
      },
    ],
  },
  {
    title: 'Education',
    icon: '🎓',
    experiences: [
      {
        position: 'Software Engineer',
        period: '2021 - Present',
        company: 'HvA',
        companyLink: 'https://www.hva.nl/',
        description: (
          <>
            <p>
              Learned to architect and develop software.
              I learned about software design, software architecture, software testing, and software development.

              I followed an extra course of Mobile Development where we learned to develop mobile applications with Kotlin.
              For my minor I followed an embedded systems course where we learned to develop software for embedded systems.
            </p>
          </>
        )
      },
      {
        position: 'Graduate Web Developer',
        period: '2017 - 2021',
        company: 'GLU',
        companyLink: 'https://www.glu.nl/opleiding/webdesign/',
        description: (
          <>
            <p>
              Learned the basics of Web development with HTML, CSS, JavaScript, MySQL and PHP.
              Besides development I also learned about web design applications with modern tools like Figma and Adobe XD.
            </p>
          </>
        )
      },
    ],
  },
];
