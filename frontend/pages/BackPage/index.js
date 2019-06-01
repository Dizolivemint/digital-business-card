import React from 'react';
import styled, { keyframes } from 'styled-components';
import Koji from 'koji-tools';

import { TiArrowBackOutline } from "react-icons/ti";

import Container from 'common/components/Container'
import Flip from 'common/components/Flip'

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
