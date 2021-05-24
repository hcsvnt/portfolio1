import * as React from "react";
import {Helmet} from "react-helmet";
import Layout from '../components/layout';
import Header from "../components/header";
import Introduction from '../components/intro'
import Resume from "../components/resume";
import Footer from "../components/footer";
import Projects from "../components/projects";

const IndexPage = () => {
  return (
    <div>
       <Helmet>
        <meta charSet="utf-8" />
        <title>Hallala - Front-end Web Developer</title>
        <meta name="author" content="Mateusz Hallala"/>
        <meta name="description" content="An online portfolio of Front-end Web Developer Mateusz (aka Matt) Hallala.
        Discover latest projects."/>
        <link rel="canonical" href="https://www.hallala.xyz/" />
      </Helmet>
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