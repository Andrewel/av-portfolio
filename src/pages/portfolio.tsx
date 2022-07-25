import React from 'react';
import { Layout, Seo } from '../components/common';
import { Contact, Intro, Projects, Skills } from '../components/landing';
import ThemeProvider from '../providers/ThemeProvider';

const PortfolioPage = () => (
  <ThemeProvider>
    <Layout>
      <Seo />
      <Intro />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  </ThemeProvider>
);

export default PortfolioPage;
