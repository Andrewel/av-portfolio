import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { Header } from '../../../components/theme';
import { Button, Container } from '../../../components/common';
import dev from '../../../assets/illustrations/dev.svg';
import { Details, IntroWrapper, Thumbnail, Wrapper } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>I’m John and I’m a JAMStack engineer!</h4>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a JAMStack engineer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
