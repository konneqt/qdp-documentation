import { IconAdjustments, IconFileInfinity, IconPlugConnected, TablerIcon } from '@tabler/icons-react'
import React from 'react'

interface Feature {
  icon: TablerIcon
  title: string
  content: string
}

const featureList: Feature[] = [
  {
    icon: IconPlugConnected,
    title: 'OpenAPI Integration',
    content:
      ' Our Dev Portal uses docusaurus-plugin-openapi-docs, which is highly compatible with the OpenAPI 3.x and Swagger 2.0 specifications. This allows you to easily integrate your API with the portal, transforming your OpenAPI definitions into clear and precise documentation without manual effort. ',
  },
  {
    icon: IconFileInfinity,
    title: 'Quick Documentation',
    content:
      "Our platform provides a fast, efficient way to generate API documentation directly from your OpenAPI definition files. This delivers continuously updated documentation without interruptions or manual updates.  What's more, with clear and well-organised navigation, users can quickly find the information they need, making the experience even more efficient.",
  },
  {
    icon: IconAdjustments,
    title: 'Customizable Interface',
    content:
      "Beyond functionality, our solution features a visually appealing, user-friendly interface built with Docusaurus, giving your Dev Portal a professional, responsive look. It offers seamless navigation, customizable themes, and an optimized user experience, ensuring clarity and efficiency. The result is a platform that serves developers' needs while remaining intuitive for API consumers.",
  },
]

function FeatureComponent({ icon: Icon, title, content }: Feature) {
  return (
    <div className="feature-card">
      <div className="feature-header">
        <div className="feature-icon">
          <Icon size={40} />
        </div>
        <h3 className="feature-title">{title}</h3>
      </div>
      <p className="feature-content">{content}</p>
      </div>
  )
}

export default function HomepageFeatures() {
  return (
    <>
      <h1 className="feature-mainText">
        Document your&nbsp; <span className="feature-subtitle">API's&nbsp;</span> 
        <span>simply and efficiently</span>
      </h1>

      <div className="feature-container">
        {featureList.map((feature, idx) => (
          <FeatureComponent key={idx} {...feature} />
        ))}
      </div>
    </>
  )
}
