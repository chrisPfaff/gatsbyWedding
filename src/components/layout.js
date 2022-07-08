import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Seo } from './seo.js';
import { content } from '../styles/layout.module.css';
import Header from '../components/header.js';

export default function Layout({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) {
  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <Header />
      <main className={content}>{children}</main>
    </>
  );
}
