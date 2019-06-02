import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Koji from 'koji-tools';

import { FaPhone } from 'react-icons/fa';

import ExtLink from 'common/components/ExtLink'
import Column from 'common/components/Column'
        
class Phone extends Component {
    render() {
        return (
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
        )
    }
}

export default Phone;