import React from 'react';
import styled from 'styled-components';
import discordLogo from './img/discord.png';
import twitterLogo from './img/twitter.png';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  height: 100px;
  position: relative;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  position: absolute;
  bottom: 0;
`;

const SocialMediaIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const DiscordLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const TwitterLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMediaContainer>
        <DiscordLink href="https://discord.gg/xKucj9gdD9" target="_blank" rel="noopener noreferrer">
          <SocialMediaIcon src={discordLogo} alt="Discord" />
        </DiscordLink>
        <TwitterLink href="https://twitter.com/StarLabZero" target="_blank" rel="noopener noreferrer">
          <SocialMediaIcon src={twitterLogo} alt="Twitter" />
        </TwitterLink>
      </SocialMediaContainer>
    </FooterContainer>
  );
};

export default Footer;
