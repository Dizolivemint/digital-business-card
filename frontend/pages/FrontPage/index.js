import React from 'react';
import styled, { keyframes } from 'styled-components';
import Koji from 'koji-tools';
import { TiArrowBackOutline } from "react-icons/ti";
import { Helmet } from 'react-helmet';

import Flip from '../../common/components/Flip'
import Container from '../../common/components/Container'
import Column from '../../common/components/Column'

import Website from './components/Website'
import Company from './components/Company'
import Address from './components/Address'
import Phone from './components/Phone'
import Email from './components/Email'
import Social from './components/Social'

const H1Name = styled.h1`
    font-size: calc(10px + 4vmin);
    letter-spacing: ${() => Koji.config.layout.nameLetterSpacing};
    text-indent: ${() => Koji.config.layout.nameLetterSpacing};
    width: 100%;
    margin: auto;
    ${() => Koji.config.layout.alignAddress != 'center' && `
        margin: auto 1rem auto 1rem`};
    text-align: ${() => Koji.config.layout.alignAddress};
`;

const H2Title = styled.p`
    font-size: calc(10px + 1vmin);
    letter-spacing: ${() => Koji.config.layout.titleLetterSpacing};
    text-indent: ${() => Koji.config.layout.titleLetterSpacing};
    margin: 0 1rem 1.5rem;
    ${() => Koji.config.layout.alignAddress === 'right' && `
        transform: translateX(${Koji.config.layout.titleLetterSpacing})`};
    ${() => Koji.config.layout.alignAddress != 'right' && `
        margin-right: 1rem`};
    ${() => Koji.config.layout.alignAddress === 'left' && `
        text-indent: 0`};   
    width: 100%;
`;

const Content = styled.div`
    padding-bottom: 8px;
`;

const CompanyLinks = styled.div`
    width: 100%;
    margin: 1rem 0.5rem 0 0.5rem;
    display: flex;
    justify-content: center
    ${() => Koji.config.layout.alignAddress === 'right' && `
        justify-content: flex-end`};
    ${() => Koji.config.layout.alignAddress === 'left' && `
        justify-content: left`};
    flex-wrap: wrap;
    `;

class FrontPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Force an update of the dom on prop changes
        // This is just for development situations so
        // that we can test prop changes in real-time.
        Koji.on('change', () => {
            this.forceUpdate();
        })

    }

    // Control the margins and column widths with margin and colWidth
    render() {
        return (
            <Container>
                <Helmet defaultTitle={Koji.config.strings.name}>
                    <link href={Koji.config.layout.fontFamily} rel="stylesheet" />
                    <link href={Koji.config.layout.companyFontFamily} rel="stylesheet" />
                    <link rel="icon" href={Koji.config.metadata.icon} sizes="32x32" />
                </Helmet>
                {(Koji.config.layout.hasBack) && 
                    <Flip to="/back">
                            <TiArrowBackOutline size="24"/>
                    </Flip>
                }
                <Website/>            
                <Company>
                    <Column colWidth="100%">

                        <H1Name>{Koji.config.strings.name}</H1Name>

                    </Column>
                    <Column colWidth="100%">

                        <H2Title>
                            {Koji.config.strings.title}
                        </H2Title>  

                    </Column>
                    <CompanyLinks>
                        <Address/>
                        <Phone/>
                        <Email/>                        
                    </CompanyLinks>
                    <Social/>
                </Company>
            </Container>
        );
    }
}

export default FrontPage;
