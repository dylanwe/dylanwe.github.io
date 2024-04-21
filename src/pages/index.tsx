import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Intro from '@site/src/components/intro';
import IntroImage from '@site/src/components/intro-image';
import ExperienceBlocks from '@site/src/components/experience-blocks';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Portfolio`}
      description="Description will go into a meta tag in <head />">
            <Intro />
            <IntroImage />
            <ExperienceBlocks />
    </Layout>
  );
}
