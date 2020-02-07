import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import logo from "../../../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";

const Header = ({ handleNavbar }) => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <FaAlignRight className="toggle-icon" onClick={() => handleNavbar()} />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 1rem;
  .toggle-icon {
    color: var(--mainYellow);
    cursor: pointer;
    font-size: 1.75rem;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`;

export default Header;
