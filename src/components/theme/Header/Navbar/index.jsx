import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from '../../../../providers/ThemeProvider';
import { Container } from '../../../../components/common';
import NavbarLinks from '../NavbarLinks';
import { Brand, Wrapper } from './styles';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/" theme={theme}>
        John Doe
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
