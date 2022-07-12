import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import * as Styles from '../styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/sitemap/sitemap-0.xml">Sitemap</Link>
      </nav>
    </footer>
  );
}
