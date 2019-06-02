import React from 'react';
import styled, { keyframes } from 'styled-components';
import Koji from 'koji-tools';
import { TiArrowBackOutline } from "react-icons/ti";

import Font from 'common/helpers/Font'
import Flip from 'common/components/Flip'
import Container from 'common/components/Container'
import Column from 'common/components/Column'
import ExtLink from 'common/components/ExtLink'

import Company from './components/Company'
import Address from './components/Address'
import Phone from './components/Phone'
import Email from './components/Email'
import Social from './components/Social'

const CompanyName = styled.p`
    margin: 0;
    font-family: '${() => Font.getFontFamily(Koji.config.layout.companyFontFamily)}', sans-serif;
    font-size: calc(10px + ${() => Koji.config.layout.companyFontSize});
    text-align: center;
    
`
const H1Name = styled.h1`
    font-size: calc(10px + 4vmin);
    letter-spacing: ${() => Koji.config.layout.nameLetterSpacing};
    text-indent: ${() => Koji.config.layout.nameLetterSpacing};
    width: 100%;
    margin: auto;
    text-align: ${() => Koji.config.layout.alignAddress};
`;

const H2Title = styled.p`
    font-size: calc(10px + 1vmin);
    letter-spacing: ${() => Koji.config.layout.titleLetterSpacing};
    text-indent: ${() => Koji.config.layout.titleLetterSpacing};
    margin: ${props => props.margin};
`;

const Content = styled.div`
  padding-bottom: 8px;
`;


const Logo = styled.img`
    height: 25vmin;
    pointer-events: none;
`;

class FrontPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            response: '',
            mapUrl: "https://www.google.com/maps"
        };
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
                {(Koji.config.layout.hasBack) && 
                    <Flip to="/back">
                            <TiArrowBackOutline size="24"/>
                    </Flip>
                }
                <ExtLink
                margin="1em"
                href={Koji.config.strings.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link to website"
                >

                    <Logo 
                    src={Koji.config.images.logo} 
                    alt="Logo image"
                    />
                    <Column colWidth="100%">
                        <CompanyName>
                            {Koji.config.strings.companyName}
                        </CompanyName>
                    </Column>
                </ExtLink>              
                <Company>
                    <Column colWidth="100%">

                        <H1Name>{Koji.config.strings.name}</H1Name>

                    </Column>
                    <Column colWidth="100%">

                        <H2Title
                        margin="0 0 1.5em"
                        >
                            {Koji.config.strings.title}
                        </H2Title>  

                    </Column>
                    <Address/>
                    <Phone/>
                    <Email/>
                    <Social/>
                </Company>
            </Container>
        );
    }
}

export default FrontPage;
