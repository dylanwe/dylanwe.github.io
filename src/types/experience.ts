import { ReactNode } from "react";

export type AboutMe = {
  icon: string;
  title: string;
  text: string[];
};

export type Experience = {
  position: string;
  period: string;
  company: string;
  companyLink: string;
  description: ReactNode;
};

export type ExperienceEducation = {
  title: string;
  icon: string;
  experiences: Experience[];
};
