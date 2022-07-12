import * as React from 'react';
import { Seo } from './seo.js';
import Header from '../components/header.js';
import Footer from '../components/footer';

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
      <main>{children}</main>
      <Footer />
    </>
  );
}
