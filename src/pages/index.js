import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
          alt="보라색 하늘, 산과 사막"
          src="../images/stephen-leonardi-NH-vr7Eivu0-unsplash.jpg"
        />
      </Layout>
    </main>
  );
};

export default IndexPage;
