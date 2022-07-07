import React from 'react';
import Headroom from 'react-headroom';
import { Box, Link as RebassLink, Flex, Image } from 'rebass/styled-components';
import styled from 'styled-components';
import Link from './Link';
// import { useHelmetQuery } from '../queries/useHelmetQuery';
import { SECTION } from '../utils/constants';
import { getSectionHref } from '../utils/helpers';
import Logo from './Logo/Reactvector.svg';

const ImageLogo = styled(Image)`
  transition: all 0.85s ease-in-out 0s;

  &:hover {
    transform: rotate(360deg);
  }
`;

const Header = () => {
  // const { profile } = useHelmetQuery();

  return (
    <StyledHeadroom>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        paddingX={3}
        paddingY={2}
      >
        <RebassLink href={`#${getSectionHref(SECTION.home)}`} variant="empty">
          <Flex justifyContent="center">
            <ImageLogo
              src={Logo}
              width="50px"
              alt="Portfolio Logo"
              // onClick={home.onClick}
              style={{
                cursor: 'pointer',
              }}
            />
          </Flex>
        </RebassLink>
        <Flex mr={[0, 3, 5]}>
          {(Object.keys(SECTION) as Array<keyof typeof SECTION>)
            .filter((id) => id !== 'home')
            .map((id) => (
              <Box key={id} ml={[2, 3]} color="background" fontSize={[2, 3]}>
                <Link href={`#${id}`} tabIndex={0}>
                  {SECTION[id]}
                </Link>
              </Box>
            ))}
        </Flex>
      </Flex>
    </StyledHeadroom>
  );
};

const StyledHeadroom = styled(Headroom)`
  .headroom--pinned {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  position: absolute;
  width: 100%;
`;

export default Header;
