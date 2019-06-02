import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Koji from 'koji-tools';

import { IoIosMail } from "react-icons/io";

import ExtLink from 'common/components/ExtLink'
import Column from 'common/components/Column'
        
class Email extends Component {
    render() {
        return (
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
        )
    }
}

export default Email;