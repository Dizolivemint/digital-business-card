import React from 'react';
import styled, { keyframes } from 'styled-components';
import Koji from 'koji-tools';
import { FaSearchLocation, FaPhone } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";

import Social from "./components/Social";

const Container = styled.div`
    background-color: ${() => Koji.config.colors.backgroundColor};
    ${() => Koji.config.layout.useGradient && `
        background: linear-gradient(${Koji.config.layout.angleGradient}deg, ${Koji.config.colors.gradientColor01} 0%, ${Koji.config.colors.gradientColor02} 35%, ${Koji.config.colors.gradientColor03} 100%)`};
    
    ${() => Koji.config.layout.useBackgroundImage && `
        background-image: url(${Koji.config.images.background})`};
        
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    font-size: calc(10px + 2vmin);
    color: ${() => Koji.config.colors.textColor};
    text-align: ${() => Koji.config.layout.alignAddress};
    justify-content: center;
    @media (max-width: 1280px) {
        flex-direction: column;
    }
`;

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
    margin-top: 0
`;

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Content = styled.div`
  padding-bottom: 8px;
`;

const Link = styled.a`
    color: ${() => Koji.config.colors.linkColor};
    text-decoration: none;
    padding: 0 8px 8px 8px;
    display: flex;
    text-align: ${() => Koji.config.layout.alignAddress};
    flex-wrap: wrap;
    width: ${props => props.colWidth};
    margin: 0 0 1em 0;
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

const Icon = styled(Column)`

`;

const Title = styled(Column)`
    
`;

const Company = styled(Column)`
    padding: 0 8px 8px 8px;
    display: flex;
    text-align: ${() => Koji.config.layout.alignAddress};
    flex-wrap: wrap;
    @media (min-width: 1280px) {
        width: 50%
    }
`;

const Address = styled(Link)``;

const Phone = styled(Link)``;

const Email = styled(Link)``;

// Provides caching so functions that return the same result aren't executed multiple times
function memoize(func) {
  let cache = new Map();
  const memoized = function (...args) {
    let key = args[0];
    if (cache.has(key)) {
      return cache.get(key);
    }
    let result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
  return memoized;
}

// Create the Google Maps address
function getMapUri() {
  let mapUri = `https://www.google.com/maps/place/${Koji.config.strings.companyAddress},${Koji.config.strings.companyCity},${Koji.config.strings.companyState}+${Koji.config.strings.companyZip}`
  return mapUri.replace(/ /g, "+");
}

// Create the Google Maps address once, even if called multiple times
let memoizedUri = memoize(getMapUri);

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            response: '',
            icons: Koji.config.layout.icons,
            mapUri: "https://www.google.com/maps"
        };
    }

    componentDidMount() {
        Koji.request(Koji.routes.SampleRoute).then((e) => this.setState({ response: e.response }));

        // Force an update of the dom on prop changes
        // This is just for development situations so
        // that we can test prop changes in real-time.
        Koji.on('change', () => {
            this.forceUpdate();
        })

        this.setState({mapUri: getMapUri()});
    }

    render() {
        return (
            <Container>
                <Link
                href={Koji.config.strings.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                >

                    <Logo src={Koji.config.images.logo} />
                    
                </Link>              
                <Company>
                    <Title colWidth="100%">

                        <H1Name>{Koji.config.strings.name}</H1Name>

                    </Title>
                    <Title colWidth="100%">

                        <H2Title>{Koji.config.strings.title}</H2Title>  

                    </Title>
                    <Address 
                    href={this.state.mapUri}
                    target="_blank"
                    rel="noopener noreferrer"
                    >    
                        <Icon colWidth="2em">

                            {(this.state.icons) &&
                                <FaSearchLocation />
                            }

                        </Icon>
                        <Column colWidth="auto">

                                {Koji.config.strings.companyAddress}
                                <br/>
                                {Koji.config.strings.companyCity},&nbsp;
                                {Koji.config.strings.companyState}&nbsp;
                                {Koji.config.strings.companyZip}


                        </Column>
                    </Address>

                    <Phone 
                    href={"tel:" + Koji.config.strings.companyPhone}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <Icon colWidth="2em">

                            {(this.state.icons) &&
                                <FaPhone />
                            }

                        </Icon>
                        <Column colWidth="auto">

                                {Koji.config.strings.companyPhone}

                        </Column>
                    </Phone>
                    <Email 
                    href={"mailto:" + Koji.config.strings.email}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <Icon colWidth="2em">

                            {(this.state.icons) &&
                                <IoIosMail />
                            }

                        </Icon>
                        <Column colWidth="auto">

                                {Koji.config.strings.email}

                        </Column>
                    </Email>
                </Company>
                <Social/>
            </Container>
        );
    }
}

export default HomePage;
