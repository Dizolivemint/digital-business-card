import React from 'react';
import styled, { keyframes } from 'styled-components';
import Koji from 'koji-tools';
import { FaSearchLocation, FaPhone } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import { TiArrowBackOutline } from "react-icons/ti";

import Social from "./components/Social";
import Font from 'common/helpers/Font'
import Flip from 'common/components/Flip'
import Container from 'common/components/Container'
import ExtLink from 'common/components/ExtLink'

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

const Column = styled.div`
    width: ${props => props.colWidth};
    align-self: ${() => Koji.config.layout.alignAddress};
    display: flex;
    justify-content: ${() => Koji.config.layout.alignAddress};
`;

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

class FrontPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            response: '',
            mapUrl: "https://www.google.com/maps"
        };
    }

    componentDidMount() {
        // Backend route request for google map address (slower than frontend, no difference in performance)
        Koji.request(Koji.routes.GetMap).then((e) => {
            this.setState({ mapUrl: e.response })
            console.log("Response: ", e.response)
        });

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
                    <ExtLink 
                    href={this.state.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Map to address"
                    role="application"
                    >    
                        <Column colWidth="2em">

                            <FaSearchLocation />

                        </Column>
                        <Column colWidth="auto">

                                {Koji.config.strings.companyAddress}
                                <br/>
                                {Koji.config.strings.companyCity},&nbsp;
                                {Koji.config.strings.companyState}&nbsp;
                                {Koji.config.strings.companyZip}


                        </Column>
                    </ExtLink>

                    <ExtLink 
                    href={"tel:" + Koji.config.strings.companyPhone}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Phone number"
                    >
                        <Column colWidth="2em">

                            <FaPhone />

                        </Column>
                        <Column colWidth="auto">

                                {Koji.config.strings.companyPhone}

                        </Column>
                    </ExtLink>
                    <ExtLink 
                    href={"mailto:" + Koji.config.strings.email}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={Koji.config.strings.email}
                    >
                        <Column colWidth="2em">

                            <IoIosMail />

                        </Column>
                        <Column colWidth="auto">

                                {Koji.config.strings.email}

                        </Column>
                    </ExtLink>
                    <Social/>
                </Company>
            </Container>
        );
    }
}

export default FrontPage;
