
import { themes as prismThemes } from 'prism-react-renderer'
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
import { APIOptions } from 'docusaurus-plugin-openapi-docs/src/types';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Quantum API Dev Portal',
  favicon: '/img/favicon.ico',
  url: 'https://konneqt.github.io',

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
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "Swagger-Petstore-OpenAPI-3-0",
        docsPluginId: "classic",
        config: {
          "Swagger-Petstore-OpenAPI-3-0": {
            specPath: "apis/Swagger-Petstore-OpenAPI-3-0.yaml",
            outputDir: "docs/Swagger-Petstore-OpenAPI-3-0",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            template: "api.mustache",
            downloadUrl: "/apis/Swagger-Petstore-OpenAPI-3-0.yaml",
            hideSendButton: false,
            showSchemas: true,
          },
        },
      },
    ],
  ],
  
}

export default config
