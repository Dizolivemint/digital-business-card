import React from 'react';
import styled, { keyframes } from 'styled-components';
import Koji from 'koji-tools';

const Column = styled.div`
    width: ${props => props.colWidth};
    align-self: ${() => Koji.config.layout.alignAddress};
    display: flex;
    justify-content: ${() => Koji.config.layout.alignAddress};
`;

export default Column;