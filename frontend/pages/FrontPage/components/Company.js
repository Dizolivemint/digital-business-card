import React from 'react';
import styled, { keyframes } from 'styled-components';
import Koji from 'koji-tools';

import Column from 'common/components/Column'

const Company = styled(Column)`
    padding: 0 8px 8px 8px;
    display: flex;
    text-align: ${() => Koji.config.layout.alignAddress};
    flex-wrap: wrap;
    font-size: calc(10px + ${() => Koji.config.layout.addressFontSize});
    @media (min-width: 1280px) {
        width: 50%
    }
`;

export default Company