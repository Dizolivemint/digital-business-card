// Add new Social links to .koji/customization/social.json
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Koji from 'koji-tools';

// Add new Social icons here from https://react-icons.netlify.com/#/icons/fa
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaPinterestP, FaSoundcloud, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialLink = styled.a`
    color: ${() => Koji.config.colors.socialColor};
    display: inline-block;
    padding: 14px 16px;
`

const Container = styled.div`
    margin: 1em 0;
    font-size: calc(14px + ${() => Koji.config.layout.addressFontSize});
`


class Social extends Component {
  render() {
    return (
      <Container>

        {(Koji.config.social.facebook) &&
          <SocialLink 
          href={Koji.config.social.facebook}
          aria-label="Facebook profile"
          >
            <FaFacebookF />
          </SocialLink>
        }

        {(Koji.config.social.github) &&
          <SocialLink 
          href={Koji.config.social.github}
          aria-label="GitHub profile"
          >
            <FaGithub />
          </SocialLink>
        }

        {(Koji.config.social.instagram) &&
          <SocialLink 
          href={Koji.config.social.instagram}
          aria-label="Instagram profile"
          >
            <FaInstagram />
          </SocialLink>
        }

        {(Koji.config.social.linkedin) &&
          <SocialLink 
          href={Koji.config.social.linkedin}
          aria-label="LinkedIn profile"
          >
            <FaLinkedinIn />
          </SocialLink>
        }

        {(Koji.config.social.pinterest) &&
          <SocialLink 
          href={Koji.config.social.pinterest}
          aria-label="Pinterest profile"
          >
            <FaPinterestP />
          </SocialLink>
        }

        {(Koji.config.social.soundcloud) &&
          <SocialLink 
          href={Koji.config.social.soundcloud}
          aria-label="SoundCloud profile">
            <FaSoundcloud />
          </SocialLink>
        }

        {(Koji.config.social.twitter) &&
          <SocialLink 
          href={Koji.config.social.twitter}
          aria-label="Twitter profile">
            <FaTwitter />
          </SocialLink>
        }

        {(Koji.config.social.youtube) &&
          <SocialLink 
          href={Koji.config.social.youtube}
          aria-label="YouTube profile"
          >
            <FaYoutube />
          </SocialLink>
        }

      </Container>
    )
  }
}

export default Social;