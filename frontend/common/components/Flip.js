import React from 'react';
import styled, { keyframes } from 'styled-components';
import Koji from 'koji-tools';
import { Link } from 'react-router-dom';

const Flip = styled(Link)`
    position: fixed;
    top: 2vmin;
    right: 6vmin;
    width: 2vmin;
    height: 6vmin;
    color: ${() => Koji.config.colors.linkColor};
`;

export default Flip;