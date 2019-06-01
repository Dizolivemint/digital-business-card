import React from 'react';
import styled, { keyframes } from 'styled-components';
import Koji from 'koji-tools';

const Container = styled.div`
    background-color: ${() => Koji.config.colors.backgroundColor};
    ${() => Koji.config.layout.useGradient && `
        background: linear-gradient(${Koji.config.layout.angleGradient}deg, ${Koji.config.colors.gradientColor01} 0%, ${Koji.config.colors.gradientColor02} 35%, ${Koji.config.colors.gradientColor03} 100%)`};
    
    ${() => Koji.config.layout.useBackgroundImage && `
        background: ${Koji.config.colors.backgroundColor} url(${Koji.config.images.background}) no-repeat fixed center`};
        
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    font-size: calc(10px + ${() => Koji.config.layout.defaultFontSize});
    color: ${() => Koji.config.colors.textColor};
    text-align: ${() => Koji.config.layout.alignAddress};
    justify-content: center;
    @media (max-width: 1280px) {
        flex-direction: column;
    }
`;

export default Container;