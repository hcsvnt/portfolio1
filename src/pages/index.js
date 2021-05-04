import * as React from "react";
import Layout from '../components/layout';
import Header from "../components/header";
import Introduction from '../components/intro'
import Resume from "../components/resume";
import Footer from "../components/footer";
import Projects from "../components/projects"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Header />
        <Introduction />
        <Projects />
        <Resume />
        <Footer />
      </Layout>
    </div>
  )
}

export default IndexPage;
