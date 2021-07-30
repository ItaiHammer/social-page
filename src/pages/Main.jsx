import React, { useEffect } from 'react';

//files
import './Main.scss';

//img
import instagramIcon from '../img/icons/instagram.svg';
import facebookIcon from '../img/icons/facebook.svg';
import twitterIcon from '../img/icons/twitter.svg';
import twitchIcon from '../img/icons/twitch.svg';
import youtubeIcon from '../img/icons/youtube.svg';
import githubIcon from '../img/icons/github.svg';
import gmailIcon from '../img/icons/mail.svg';
import tiktokIcon from '../img/icons/tiktok.svg';
import linkIcon from '../img/icons/link.svg';
import codeIcon from '../img/icons/code.svg';
import heartIcon from '../img/icons/heart.svg';

const links = [
    { type: 'instagram', tag: 'itai.hammer1' },
    { type: 'github', tag: 'itaihammer' },
    { type: 'gmail', tag: 'itaihammer1@gmail.com' },
    { type: 'twitter', tag: 'itaihammer' },
    { type: 'tiktok', tag: 'itaihammer' },
    { type: 'twitch', tag: 'itaihammer' },
    { type: 'facebook', tag: 'itai.hammer.963' },
    { tag: 'Free Money', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
];

const socialLinks = {
    instagram: 'https://www.instagram.com/',
    twitter: 'https://www.twitter.com/',
    tiktok: 'https://www.tiktok.com/@',
    twitch: 'https://www.twitch.tv/',
    facebook: 'https://www.facebook.com/',
    github: 'https://github.com/',
    gmail: 'mailto:',
};

let socialsTags = [];

export default function Main() {
    function turnLinksIntoTags() {
        socialsTags = [];
        links.forEach((link) => {
            const type = link.type;
            const tag = link.tag;
            let href;
            let img;
            let embed;

            if (type === 'instagram') {
                href = `${socialLinks.instagram}${tag}`;
                img = instagramIcon;
            } else if (type === 'github') {
                href = `${socialLinks.github}${tag}`;
                img = githubIcon;
            } else if (type === 'facebook') {
                href = `${socialLinks.facebook}${tag}`;
                img = facebookIcon;
            } else if (type === 'twitter') {
                href = `${socialLinks.twitter}${tag}`;
                img = twitterIcon;
            } else if (type === 'twitch') {
                href = `${socialLinks.twitch}${tag}`;
                img = twitchIcon;
            } else if (type === 'youtube') {
                href = `${tag}`;
                img = youtubeIcon;
            } else if (type === 'tiktok') {
                href = `${socialLinks.tiktok}${tag}`;
                img = tiktokIcon;
            } else if (type === 'gmail') {
                href = `${socialLinks.gmail}${tag}`;
                img = gmailIcon;
            } else {
                href = `${link.url}`;
                img = linkIcon;
            }

            socialsTags.push(
                <div className="link-container">
                    <a href={href} style={{ outline: 'none' }} target="_blank">
                        <div className="link">
                            <img src={img} className="link-img" />
                            <div className="link-text-container">
                                <p>{tag}</p>
                            </div>
                        </div>
                    </a>
                </div>
            );
        });
    }

    turnLinksIntoTags();

    return (
        <div className="App">
            <div className="background"></div>
            <div className="pfp-container">
                <div className="pfp"></div>
            </div>
            <div className="body">
                <div className="info-container">
                    <h1 className="name">Itai Hammer</h1>
                    <h1 className="description">Yo</h1>
                </div>
                <div className="links-container">{socialsTags}</div>
                <footer className="footer">
                    <a
                        href="https://github.com/ItaiHammer/social-page"
                        target="_blank"
                        className="footer-text-container"
                    >
                        <img src={codeIcon} className="footer-icon" />
                        <p>with</p>
                        <img src={heartIcon} className="footer-icon" />
                        <p>by Itai Hammer</p>
                    </a>
                </footer>
            </div>
        </div>
    );
}
