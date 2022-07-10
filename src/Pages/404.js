import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout.js';
import * as styles from '../styles/layout.module.css';

export default function FourZeroFour() {
  return (
    <Layout>
      <section className="content text-align four">
        <StaticImage
          src={'../images/404.svg'}
          alt="404 image"
          placeholder="blurred"
          width={300}
          height={300}
        />
        <Link className="four-link" to="/" style={{ display: 'block' }}>
          &larr; Home
        </Link>
      </section>
    </Layout>
  );
}
