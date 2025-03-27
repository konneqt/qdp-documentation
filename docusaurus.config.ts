
import { themes as prismThemes } from 'prism-react-renderer'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Quantum API Dev Portal',
  tagline: 'A Powerful Chaos Engineering Platform for Kubernetes',
  favicon: '/img/favicon.ico',
  url: 'https://konneqt.io',

  baseUrl: '/qdp-documentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'konneqt', 
  projectName: 'qdp-documentation', 
  deploymentBranch: 'main',

  onBrokenLinks: 'warn',
  trailingSlash: true,

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      zh: {
        label: '简体中文',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-T31S4LR9LL',
        },
        docs: {
          sidebarPath: './sidebars.ts',
          docItemComponent: '@theme/ApiItem',
          // Please change this to your repo.
          editLocalizedFiles: true,
        },
        theme: {
          customCss: './src/styles/custom.css',
        },
      }),
    ],
  ],

  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    image: '/img/chaos-mesh-social-preview.png',
    navbar: {
      hideOnScroll: true,
      title: 'Quantum API Dev Portal',
      logo: {
        alt: 'Quantum Dev Portal',
        src: 'img/logos/just_q_blue.png',
        srcDark: 'img/logos/just_q_blue.png',
      },
      items: [
        {
          label: 'Documentation',
          to: '/docs/intro',
        },
        {
          href: 'https://github.com/konneqt/quantum-dev-portal',
          label: 'GitHub',
          position: 'right',
        },
      ], 
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} https://konneqt.io`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: {
        plain: prismThemes.vsDark.plain,
        styles: [
          ...prismThemes.vsDark.styles,
          {
            types: ['function', 'keyword'],
            style: {
              color: '#6379f2',
            },
          },
        ],
      },
      additionalLanguages: ['bash'],
    },
  },
  themes:['docusaurus-theme-openapi-docs'],

  plugins: [
    
  ],
}

export default config
