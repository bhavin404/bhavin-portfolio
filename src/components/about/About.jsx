import "./about.css";
import Award from "../../img/logo.jpg";
import bhavin from "../../img/bhavin.jpeg";


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
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Hello Mr/Ms Reader, My Name is Bhavin pun, I am a self learner web developer and a person
          who loves to create new ideas in to a form of website or app, If you have any kind of idea
          or website then I can be the person to help you with it.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">My Skills</h4>
            <p className="a-award-desc">
              Html, Css, Bootstrap, JavaScript, React.js, Next.js
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
