import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Links from "./Links";
import Icons from "./Icons";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <NavWrapper>
      <Header handleNavbar={() => setIsNavOpen(prev => !prev)} />
      <Links isNavOpen={isNavOpen} />
      <Icons />
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  @media (min-width: 768px) {
    align-items: center;
    display: flex;
  }
`;

export default Navbar;
