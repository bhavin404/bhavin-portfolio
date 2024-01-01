import "./about.css";
import Award from "../../img/logo.jpg";
import bhavin from "../../img/bhavin.png";


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={bhavin}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        "In the realm of design and code, I sculpt masterpieces."
        </p>
        <p className="a-desc">
        Hey there! 👋 I'm Bhavin, a UI/UX designer and front-end developer with 3+ years of experience in Next.js, React.js, and more.

<br/> <br />Crafting standout digital experiences: from sleek UI/UX design to robust front-end development. Let's collaborate and transform your vision into reality. Reach out, let's craft something amazing together!</p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">My Skills</h4>
            <p className="a-award-desc">
              Ui/Ux Design, Html, Css, Bootstrap, Tailwind, JavaScript, React.js, Next.js
            </p>
            <h4 className="a-award-title">Tools</h4>
            <p className="a-award-desc">
              Figma, Vs Code, Github, Bitbucket, Trello.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
