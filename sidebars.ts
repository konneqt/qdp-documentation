import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  ApiSidebar: [
    'intro',
   'cli',
    {
      type: 'category',
      label: 'Templates',
      items: [{ type: 'doc', id: 'templates/index', label: 'Introduction' },{ type: 'doc', id: 'templates/dyte/index', label: '📘 Dyte' },
        { type: 'doc', id: 'templates/chaos-mesh/index', label: '🌀 Chaos Mesh' },
        { type: 'doc', id: 'templates/homarr/index', label: '📝 Homarr' },],
    },
  ],
};

export default sidebars;
