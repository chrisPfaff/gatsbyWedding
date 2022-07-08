import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import * as headerStyles from '../styles/header.module.css';

export default function Header() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  const isSticky = (e) => {
    const scrollTop = window.scrollY;
    scrollTop > 5 ? setSticky(true) : setSticky(false);
  };

  const data = useStaticQuery(graphql`
    query getSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};
  console.log(sticky);
  return (
    <header
      className={[
        headerStyles.header,
        sticky ? headerStyles.stickyHeader : '',
      ].join(' ')}
    >
      <Link to="/">{meta.title}</Link>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
