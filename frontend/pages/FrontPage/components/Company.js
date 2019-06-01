import React from 'react';
import styled, { keyframes } from 'styled-components';
import Koji from 'koji-tools';
import { FaSearchLocation } from 'react-icons/fa';

const Container = styled(Column)`
    padding: 0 8px 8px 8px;
    display: flex;
    text-align: ${() => Koji.config.layout.alignAddress};
    flex-wrap: wrap;
    @media (min-width: 1280px) {
        width: 50%
    }
`;