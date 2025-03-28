import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import path from 'path';
import fs from 'fs';

function findSidebar(directory: string): any[] {
  try {
    if (!fs.existsSync(directory)) {
      console.warn(`Directory ${directory} does not exist.`);
      return [];
    }

    const findInSubfolders = (dir: string): any[] => {
      let sidebars: any[] = [];
      const items = fs.readdirSync(dir, { withFileTypes: true });
      for (const item of items) {
        const itemPath = path.join(dir, item.name);
        if (item.isDirectory()) {
          const sidebarPath = path.join(itemPath, 'sidebar.ts');
          if (fs.existsSync(sidebarPath)) {
            const category = {
              type: 'category',
              label: "Swagger-Petstore",
              items: require(sidebarPath), 
            };
            sidebars.push(category);
          }
          sidebars = sidebars.concat(findInSubfolders(itemPath));
        }
      }
      return sidebars;
    };

    return findInSubfolders(directory);
  } catch (error) {
    console.error('Error finding sidebar:', error);
    return [];
  }
}

const baseDirectory = path.resolve(__dirname, './docs');

const kcSideBar = findSidebar(baseDirectory);

const sidebars: SidebarsConfig = {
  ApiSidebar: [
    "intro",
    "cli",
    {
      type: "category",
      label: "Templates",
      items: [
        { type: "doc", id: "templates/index", label: "Introduction" },
        { type: "doc", id: "templates/dyte/index", label: "📘 Dyte" },
        {
          type: "doc",
          id: "templates/chaos-mesh/index",
          label: "🌀 Chaos Mesh",
        },
        { type: "doc", id: "templates/homarr/index", label: "📝 Homarr" },
      ],
    },
    {
      type: 'category',
      label: 'QDP - Example',
      link: {
        type: 'generated-index',
        title: 'QDP-Example',
        description: 'This is an OpenAPI example to demonstrate the QDP user experience. Here, you can visualise how your API will be documented on the platform, explore endpoints and test the interactive interface.',
        slug: '/docs/',
      },
      items: kcSideBar, 
    },
  ],
};

export default sidebars;
