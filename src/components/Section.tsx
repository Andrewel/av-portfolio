import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Section } from 'react-scroll-section';
import { Heading } from 'rebass';
import Slide from 'react-reveal/Slide';
import LinkAnimated from './LinkAnimated';
import { SECTION } from '../utils/constants';

const SectionContainer = styled.div`
  min-height: 100vh;
  min-width: 320px;
  max-width: 100vw;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 3em 1em;
  scroll-behavior: smooth;

  @media (max-width: 400px) {
    padding: 2em 1em;
  }
`;

type ContainerProps = {
  id?: SECTION;
  children: ReactNode;
  Background?: () => JSX.Element;
};

const DefaultBackground = () => <div />;

const Container = ({
  id,
  children,
  Background = DefaultBackground,
}: ContainerProps) => (
  <Section id={id} style={{ position: 'relative' }}>
    <Background />
    <SectionContainer>{children}</SectionContainer>
  </Section>
);

type HeaderProps = {
  name: string;
  icon?: string;
  label?: string;
};

const Header = ({ name, icon = '', label = '' }: HeaderProps) => (
  <Slide left>
    <Heading color="secondaryDark" mb={4}>
      <LinkAnimated selected>
        {name}
        {icon && (
          <span role="img" aria-label={label} style={{ marginLeft: '10px' }}>
            {icon}
          </span>
        )}
      </LinkAnimated>
    </Heading>
  </Slide>
);

export default {
  Container,
  Header,
};
