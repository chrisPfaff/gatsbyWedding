import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

export default function Main() {
  const data = useStaticQuery(graphql`
    query MySiteMetaData {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
        }
      }
    }
  `);
  console.log(data);
  return (
    <div>
      <h1>Hello</h1>
      <Link to="/about">About</Link>
    </div>
  );
}
