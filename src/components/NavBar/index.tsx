import React, { useEffect, useState } from "react";

import FlexMovieLogo from "../../assets/images/flexmovie.png";
import ProfileImage from "../../assets/images/profile.png";

import { Container, Brand, ProfileImg } from "./styles";

interface NavBar {
  className?: string;
}

const NavBar: React.FC<NavBar> = ({ className }) => {
  const [show, setShow] = useState(false);

  function handleShow(): void {
    if (window.scrollY > 100) {
      setShow(true);
    } else setShow(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleShow);

    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return (
    <Container className={`${show && className}`}>
      <Brand src={FlexMovieLogo} alt="FlexMovie Logo" />
      <ProfileImg src={ProfileImage} alt="Profile Image" />
    </Container>
  );
};

export default NavBar;
