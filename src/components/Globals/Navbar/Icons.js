import React, { useState } from "react";
import styled from "styled-components";
import { styles } from "../../../utils";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const iconList = [
  {
    id: 1,
    icon: <FaFacebook className="icon facebook-icon" />,
    path: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: <FaTwitter className="icon twitter-icon" />,
    path: "https://www.twitter.com",
  },
  {
    id: 3,
    icon: <FaInstagram className="icon instagram-icon" />,
    path: "https://www.instagram.com",
  },
];

const Icons = () => {
  const [icons] = useState(iconList);
  return (
    <IconWrapper>
      {icons.map(icon => (
        <a
          key={icon.id}
          href={icon.path}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon.icon}
        </a>
      ))}
    </IconWrapper>
  );
};

const IconWrapper = styled.div`
  display: none;
  .icon {
    cursor: pointer;
    font-size: 1.3rem;
    ${styles.transDefault};
    &:hover {
      color: ${styles.colors.mainYellow};
    }
    &.facebook-icon {
      color: #3b579d;
    }
    &.twitter-icon {
      color: #3ab7f0;
    }
    &.instagram-icon {
      color: #da5f53;
    }
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    width: 10rem;
  }
`;

export default Icons;
