import React from 'react';
import { Link } from 'rebass';
import { Tooltip } from 'react-tippy';
import styled from 'styled-components';
import FontAwesomeIcon from 'react-fontawesome';

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${(props) =>
    props.theme.colors[props.color] || props.theme.colors.primary};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primaryLight};
  }
`;

const SocialLink = ({ fontAwesomeIcon, name, url, color }) => (
  <Tooltip title={name} position="bottom" trigger="mouseenter">
    <IconLink
      href={name === 'Contact me' ? `mailto:${url}` : url}
      target="_blank"
      color={color}
      rel="noreferrer"
      aria-label={name}
    >
      <FontAwesomeIcon name={fontAwesomeIcon} />
    </IconLink>
  </Tooltip>
);

export default SocialLink;
