import React from "react";
import { GithubOutlined } from "@ant-design/icons";
import bannerAbout from "./../../assets/images/banner/html-css-js.png";
import avt from "./../../assets/images/avt/avt.jpg";
import * as SocialLink from "./../../constants/SocialLink";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-a about-content">
            <h3>About The Course</h3>

            <p>
              This is a pure, practical and fun <span>project based</span>{" "}
              course. Every project is different and while we use do use some
              repeated practices, they are each meant to teach you something
              new. It is recommended that you do one project per day, however
              you can do them as you please. By the end, you will have a
              stronger foundation in JS as well as HTML/CSS and should be able
              to move on and build your own projects.
            </p>

            <a
              href={SocialLink.LINK_GITHUB_REPO}
              target="_blank"
              rel="noreferrer"
            >
              <GithubOutlined />
              Github Repo For All Projects
            </a>
          </div>

          <div className="about-b about-content">
            <h3>What You Should Know</h3>

            <p>
              A very basic understanding of HTML, CSS & JavaScript is all that
              you need to know before taking this course. Things like common
              HTML5 tags, basic styling, JS variables, conditionals, etc
            </p>

            <img src={bannerAbout} alt="HTML-CSS-JavaScript" />
          </div>

          <div className="about-author about-content">
            <img src={avt} alt="avatar" className="about-author-avt" />

            <div className="about-author-desc">
              <h3>
                Web Developer, <span>nvan.ha</span>
              </h3>
              <p>
                I am Ha, web developer from VietNam. I have profound interest in
                website design, building and customization, and everything in
                between, also am good at ReactJS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
