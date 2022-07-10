import * as React from 'react';
import { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as styles from '../styles/hero.module.css';

export default function Hero({ margin }) {
  useEffect(() => {}, []);
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
          width: `100%`,
        }}
      ></div>
    </>
  );
}
