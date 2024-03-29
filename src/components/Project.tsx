import React from 'react';
import SocialLink from '../components/SocialLink';
import Hide from '../components/Hide';
import { Box, Flex, Image, Text } from 'rebass/styled-components';
import styled from 'styled-components';
import { Project as ProjectType } from '../types';
import { Card } from './Card';
import ImageSubtitle from './ImageSubtitle';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

type Props = ProjectType;

const CARD_HEIGHT = '200px';

const MEDIA_QUERY_SMALL = '@media (max-width: 300px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${(props) => props.theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
    height: calc(${CARD_HEIGHT} / 2);
  }
`;

const ProjectImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`;

const ProjectTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(-${CARD_HEIGHT} - 3.5px);

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

export const Project = ({
  name,
  description,
  des,
  homepage,
  repository,
  type,
  publishedDate,
  logo,
}: Props) => (
  <Card p={0}>
    <Flex style={{ height: CARD_HEIGHT }}>
      <TextContainer>
        <span>
          <Title my={2} pb={1}>
            {name}
          </Title>
        </span>
        <Text width={[1]} style={{ overflow: 'auto' }}>
          {description}
        </Text>
        <Text width={[1]} style={{ overflow: 'auto' }}>
          {des?.raw ? renderRichText(des) : ''}
        </Text>
      </TextContainer>

      <ImageContainer>
        <ProjectImage {...logo} />
        <ProjectTag>
          <Flex
            style={{
              float: 'right',
            }}
          >
            {repository && (
              <Box mx={1} fontSize={5}>
                <SocialLink
                  name="Check repository"
                  fontAwesomeIcon="github"
                  url={repository}
                />
              </Box>
            )}
            {homepage && (
              <Box mx={1} fontSize={5}>
                <SocialLink
                  name="See project"
                  fontAwesomeIcon="globe"
                  url={homepage}
                />
              </Box>
            )}
          </Flex>
          <ImageSubtitle bg="primary" color="white" y="bottom" x="right" round>
            {type}
          </ImageSubtitle>
          <Hide query={MEDIA_QUERY_SMALL}>
            <ImageSubtitle bg="backgroundDark">{publishedDate}</ImageSubtitle>
          </Hide>
        </ProjectTag>
      </ImageContainer>
    </Flex>
  </Card>
);
