import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { styles } from "../../../utils";

const pageLinks = [
  {
    id: 0,
    path: "/",
    name: "home",
  },
  {
    id: 1,
    path: "/about",
    name: "about",
  },
  {
    id: 2,
    path: "/menu",
    name: "menu",
  },
  {
    id: 3,
    path: "/contact",
    name: "contact",
  },
];

const Links = ({ isNavOpen }) => {
  const [links] = useState(pageLinks);
  return (
    <LinkWrapper open={isNavOpen}>
      {links.map(item => {
        return (
          <li key={item.id}>
            <Link to={item.path} className="nav-link">
              {item.name}
            </Link>
          </li>
        );
      })}
    </LinkWrapper>
  );
};

const LinkWrapper = styled.ul`
  height: ${({ open }) => (open ? "152px" : "0px")};
  overflow: hidden;
  ${styles.transDefault};

  li {
    list-style-type: none;
  }

  .nav-link {
    color: ${styles.colors.mainGrey};
    cursor: pointer;
    display: block;
    font-weight: 700;
    padding: 0.5rem 1rem;
    text-decoration: none;
    text-transform: capitalize;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  @media (min-width: 768px) {
    display: flex;
    height: auto;
    margin: 0 auto;
    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem;
    }
  }
`;

export default Links;
