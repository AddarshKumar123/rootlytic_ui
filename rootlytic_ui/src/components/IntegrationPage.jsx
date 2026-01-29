// IntegrationPage.js
import React, { useState } from 'react';
import "../css/Service.css"

const IntegrationPage = () => {
  const [lang, setLang] = useState('springboot');

  const docs = {
    springboot: {
      title: 'Spring Boot Integration',
      install: 'Add this dependency to your pom.xml:',
      code: `<dependency>\n  <groupId>com.loglens</groupId>\n  <artifactId>loglens-spring-boot-starter</artifactId>\n  <version>1.0.0</version>\n</dependency>`,
      config: 'Add your API Key to application.properties:\nloglens.api-key=YOUR_SECRET_KEY'
    },
    react: {
      title: 'React Integration',
      install: 'npm install @loglens/react-sdk',
      code: `import { LogLensProvider } from "@loglens/react-sdk";\n\nReactDOM.render(\n  <LogLensProvider apiKey="YOUR_KEY">\n    <App />\n  </LogLensProvider>,\n  document.getElementById("root")\n);`
    }
  };

  return (
    <div className="dashboard-wrapper">
      <aside className="sidebar">
        <h3>SDKs</h3>
        <div className={`nav-item ${lang === 'springboot' ? 'active' : ''}`} onClick={() => setLang('springboot')}>Spring Boot</div>
        <div className={`nav-item ${lang === 'react' ? 'active' : ''}`} onClick={() => setLang('react')}>React JS</div>
        <div className="nav-item">Node.js</div>
      </aside>

      <main className="detail-pane">
        <h1>Link your Application</h1>
        <p>Follow these steps to start streaming logs to Gemini AI.</p>
        
        <div className="doc-section">
          <h3>1. Installation</h3>
          <pre><code>{docs[lang].install}</code></pre>
        </div>

        <div className="doc-section">
          <h3>2. Implementation</h3>
          <pre><code>{docs[lang].code}</code></pre>
        </div>
      </main>
    </div>
  );
};

export default IntegrationPage;