import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Koji from 'koji-tools';

import { FaSearchLocation } from 'react-icons/fa';

import ExtLink from '../../../common/components/ExtLink'
import Column from '../../../common/components/Column'
        
class Address extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mapUrl: "https://www.google.com/maps"
        };
    }

    componentDidMount() {
        // Example backend route request for google map address 
        // Koji.request(Koji.routes.GetMap).then((e) => {
        //     this.setState({ mapUrl: e.response })
        //     console.log("Response: ", e.response)
        // });

        let mapUrl = `https://www.google.com/maps/place/${Koji.config.strings.companyAddress},${Koji.config.strings.companyCity},${Koji.config.strings.companyState}+${Koji.config.strings.companyZip}`
        mapUrl.replace(/ /g, "+")
        this.setState({ mapUrl: mapUrl})
    }
    
    render() {
        return (
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
        )
    }
}

export default Address;