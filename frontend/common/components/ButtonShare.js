import React, { Component } from 'react';
import styled from 'styled-components';
import Koji from 'koji-tools';

// Import share icon https://react-icons.netlify.com/#/icons/fa
import { FaShareAlt } from 'react-icons/fa';

function share() {
    if (navigator.share != undefined) {
      navigator.share({
            title: Koji.config.metadata.name,
            text: Koji.config.metadata.description,
            url: window.location.href
        }).then(() => {
        console.log('Thanks for sharing!')
        })
        .catch(err => {
        console.log(`Couldn't share because of`, err.message)
        })
    } else {
        console.log('web share not supported')
    }
}

const ShareLink = styled.div`
    color: ${() => Koji.config.colors.socialColor};
    display: inline-block;
    padding: 14px 16px;
    cursor: pointer;
`

class ButtonShare extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shareSupport: false
        };
    }

    componentDidMount() {
        if (navigator.share != undefined) {
            this.setState({shareSupport: true})
        }
    }   

    render() {
        if (this.state.shareSupport === true) {
            return (
                <ShareLink onClick={share}>
                    <FaShareAlt />
                </ShareLink>
            )
        } else {
            return null
        }
    }
}
          
export default ButtonShare;