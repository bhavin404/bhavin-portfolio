import "./product.css";
import { BrowserRouter as Router,Link } from "react-router-dom";
import capture from "../../img/Capture.PNG"

const Product = ({img,link}) => {
  console.log("linksss",img)
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      {/* <Router> */}
      {/* <Link to="https://bhavin404.github.io/skill-greek/"> */}
        <a href={link} target="_blank" rel="noreferrer">
        <h1 className="click-here">Click here</h1>
      </a>
      {/* </Link> */}
      {/* </Router> */}
      {/* <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a> */}
    </div>
  );
};

export default Product;
