import * as React from 'react';
import { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as styles from '../styles/hero.module.css';
import { StaticImage } from 'gatsby-plugin-image';

export default function Hero({ margin }) {
  useEffect(() => {}, []);
  return (
    <section class={styles.hero}>
      <StaticImage
        class={styles.heroImage}
        style={{ position: 'absolute' }}
        src={'../images/wedding.jpg'}
        alt="wedding hero image"
        placeholder="blurred"
      />
    </section>
  );
}
