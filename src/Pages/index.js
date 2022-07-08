import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout.js';
import '../styles/global.css';

export default function Main() {
  return (
    <Layout>
      <h1>Hello</h1>
      <Link to="/about">About</Link>
    </Layout>
  );
}
