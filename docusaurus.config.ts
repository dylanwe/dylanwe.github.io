import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tailwindPlugin from "./plugins/tailwind-config.cjs";

const config: Config = {
  title: 'Dylan Weijgertze',
  favicon: 'img/favicon.ico',
  plugins: [tailwindPlugin],

  // Set the production url of your site here
  url: 'https://dylanwe.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dylanwe', // Usually your GitHub org/user name.
  projectName: 'dylanwe.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/dylanwe/dylanwe.github.io',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.png',
    navbar: {
      title: 'Dylan Weijgertze',
      logo: {
        alt: 'Dylan Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'Projects',
        },
        {
          href: 'https://www.linkedin.com/in/dylan-weijgertze/',
          label: 'LinkedIn',
          position: 'right',
        },
        {
          href: 'https://github.com/dylanwe/dylanwe.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Dylan Weijgertze. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
