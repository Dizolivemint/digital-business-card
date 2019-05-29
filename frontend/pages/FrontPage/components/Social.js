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
// Add new Social links here and to .koji/customization/social.json
const facebook = "https://facebook.com/"
const github = "https://github.com/"
const instagram = "https://www.instagram.com/"
const linkedin = "https://www.linkedin.com/in/"
const pinterest = "https://www.pinterest.com/"
const soundcloud = "https://soundcloud.com/"
const twitter = "https://twitter.com/"
const youtube = "https://www.youtube.com/channel/"

class Social extends Component {
  render() {
    return (
      <Container>

        {(Koji.config.social.facebook) &&
          <SocialLink href={facebook + Koji.config.social.facebook}>
            <FaFacebookF />
          </SocialLink>
        }

        {(Koji.config.social.github) &&
          <SocialLink href={github + Koji.config.social.github}>
            <FaGithub />
          </SocialLink>
        }

        {(Koji.config.social.instagram) &&
          <SocialLink href={instagram + Koji.config.social.instagram}>
            <FaInstagram />
          </SocialLink>
        }

        {(Koji.config.social.linkedin) &&
          <SocialLink href={linkedin + Koji.config.social.linkedin}>
            <FaLinkedinIn />
          </SocialLink>
        }

        {(Koji.config.social.pinterest) &&
          <SocialLink href={pinterest + Koji.config.social.pinterest}>
            <FaPinterestP />
          </SocialLink>
        }

        {(Koji.config.social.soundcloud) &&
          <SocialLink href={soundcloud + Koji.config.social.soundcloud}>
            <FaSoundcloud />
          </SocialLink>
        }

        {(Koji.config.social.twitter) &&
          <SocialLink href={twitter + Koji.config.social.twitter}>
            <FaTwitter />
          </SocialLink>
        }

        {(Koji.config.social.youtube) &&
          <SocialLink href={youtube + Koji.config.social.youtube}>
            <FaYoutube />
          </SocialLink>
        }

      </Container>
    )
  }
}

export default Social;