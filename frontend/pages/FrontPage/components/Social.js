// Add new Social links to .koji/customization/social.json

import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Koji from 'koji-tools';

// Add new Social icons here from https://react-icons.netlify.com/#/icons/fa
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaPinterestP, FaSoundcloud, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialLink = styled.a`
    color: ${() => Koji.config.colors.socialColor};
    padding: 0 .25em;
`

const Container = styled.div`
    width: 100%;
    margin: 1em 0;
`


class Social extends Component {
  render() {
    return (
      <Container>

        {(Koji.config.social.facebook) &&
          <SocialLink href={Koji.config.social.facebook}>
            <FaFacebookF />
          </SocialLink>
        }

        {(Koji.config.social.github) &&
          <SocialLink href={Koji.config.social.github}>
            <FaGithub />
          </SocialLink>
        }

        {(Koji.config.social.instagram) &&
          <SocialLink href={Koji.config.social.instagram}>
            <FaInstagram />
          </SocialLink>
        }

        {(Koji.config.social.linkedin) &&
          <SocialLink href={Koji.config.social.linkedin}>
            <FaLinkedinIn />
          </SocialLink>
        }

        {(Koji.config.social.pinterest) &&
          <SocialLink href={Koji.config.social.pinterest}>
            <FaPinterestP />
          </SocialLink>
        }

        {(Koji.config.social.soundcloud) &&
          <SocialLink href={Koji.config.social.soundcloud}>
            <FaSoundcloud />
          </SocialLink>
        }

        {(Koji.config.social.twitter) &&
          <SocialLink href={Koji.config.social.twitter}>
            <FaTwitter />
          </SocialLink>
        }

        {(Koji.config.social.youtube) &&
          <SocialLink href={Koji.config.social.youtube}>
            <FaYoutube />
          </SocialLink>
        }

      </Container>
    )
  }
}

export default Social;