import React from "react";
import {
  GithubOutlined,
  FacebookFilled,
  InstagramFilled,
  MailFilled,
  CodepenCircleOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import * as SocialLink from "./../../constants/SocialLink";
const Footer = () => {
  return (
    <footer className="footer" id="about">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-link-social">
            <p>Follow Me</p>
            <a
              className="footer-link-social--item"
              href={SocialLink.LINK_GH}
              target="_blank"
              rel="noreferrer"
            >
              <GithubOutlined />
            </a>
            <a
              className="footer-link-social--item"
              href={SocialLink.LINK_FB}
              target="_blank"
              rel="noreferrer"
            >
              <FacebookFilled />
            </a>
            <a
              className="footer-link-social--item"
              href={SocialLink.LINK_IG}
              target="_blank"
              rel="noreferrer"
            >
              <InstagramFilled />
            </a>
            <a
              className="footer-link-social--item"
              href={`mailto:${SocialLink.LINK_GM}`}
              rel="noreferrer"
            >
              <MailFilled />
            </a>
            <a
              className="footer-link-social--item"
              href={SocialLink.LINK_CP}
              target="_blank"
              rel="noreferrer"
            >
              <CodepenCircleOutlined />
            </a>
          </div>

          <div className="footer-link-other">
            <a href={SocialLink.LINK_WEBSITE} target="_blank" rel="noreferrer">
              My Website
              <LeftOutlined />
            </a>
            <a
              href={SocialLink.LINK_GITHUB_REPO}
              target="_blank"
              rel="noreferrer"
            >
              Projects Github Repo
              <LeftOutlined />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
