import React from 'react';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer } from '../components/Card';
import Triangle from '../components/Triangle';
import { useProjectsQuery } from '../queries/useProjectsQuery';
import { Project } from '../components/Project';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['80vh', '80vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="background"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      invertX
      invertY
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const Projects = () => {
  const projects = useProjectsQuery();

  return (
    <Section.Container id="projects" Background={Background}>
      <Section.Header name="Projects" icon="💻" label="notebook" />

      <CardContainer minWidth="350px">
        {projects.map((p, i) => (
          <Fade bottom delay={i * 200} key={p.id}>
            <Project {...p} />
          </Fade>
        ))}
      </CardContainer>
    </Section.Container>
  );
};

export default Projects;
