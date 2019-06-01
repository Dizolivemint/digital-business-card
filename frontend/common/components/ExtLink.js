import React from 'react';
import styled, { keyframes } from 'styled-components';
import Koji from 'koji-tools';

const ExtLink = styled.a`
    color: ${() => Koji.config.colors.linkColor};
    text-decoration: none;
    padding: 0 8px 8px 8px;
    display: flex;
    text-align: ${() => Koji.config.layout.alignAddress};
    flex-wrap: wrap;
    width: ${props => props.colWidth};
    margin: 0 0 .5em 0;
    margin: ${props => props.margin};
    justify-content: center;
`;

export default ExtLink