import React from 'react';
import styled, { keyframes } from 'styled-components';
import Koji from 'koji-tools';

import { TiArrowBackOutline } from "react-icons/ti";

import Flip from 'common/components/Flip'

// Configure the flip side of the card however you want.
// One idea is to add a scheduling assistant

const Container = styled.div`
    background-color: ${() => Koji.config.colors.backgroundColor};
    ${() => Koji.config.layout.useGradient && `
        background: linear-gradient(${Koji.config.layout.angleGradient}deg, ${Koji.config.colors.gradientColor01} 0%, ${Koji.config.colors.gradientColor02} 35%, ${Koji.config.colors.gradientColor03} 100%)`};
    
    ${() => Koji.config.layout.useBackgroundImage && `
        background-image: url(${Koji.config.images.background})`};
    display: flex;
    min-height: 100vh;
    font-size: calc(10px + ${() => Koji.config.layout.defaultFontSize});
    color: ${() => Koji.config.colors.textColor};
    text-align: ${() => Koji.config.layout.alignAddress};
`;

class BackPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <Container>
                <Flip to="/">
                        <TiArrowBackOutline size="24"/>
                </Flip>
            </Container>
        )
    }
}

export default BackPage;
