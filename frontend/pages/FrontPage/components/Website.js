import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Koji from 'koji-tools';

import Font from '../../../common/helpers/Font'
import ExtLink from '../../../common/components/ExtLink'
import Column from '../../../common/components/Column'

const CompanyName = styled.p`
    margin: .5rem auto;
    font-family: '${() => Font.getFontFamily(Koji.config.layout.companyFontFamily)}', sans-serif;
    font-size: calc(10px + ${() => Koji.config.layout.companyFontSize});
    text-align: center;  
`

const Logo = styled.img`
    height: 25vmin;
    pointer-events: none;
`;
        
class Website extends Component {
    render() {
        return (
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
        )
    }
}

export default Website;