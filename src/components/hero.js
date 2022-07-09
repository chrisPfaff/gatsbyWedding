import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as styles from '../styles/hero.module.css';

export default function Hero() {
  const data = useStaticQuery(graphql`
    query getSiteBackgroundImage {
      site {
        siteMetadata {
          backgroundImage
        }
      }
    }
  `);
  const bgImage = data.site.siteMetadata.backgroundImage;
  return (
    <>
      <div
        className={styles.hero}
        style={{
          backgroundImage: `url(${bgImage})`,
          height: 300,
          width: `100%`,
        }}
      ></div>
    </>
  );
}
