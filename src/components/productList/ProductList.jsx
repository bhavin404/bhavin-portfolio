import { useState } from "react";
import "./productList.css";
import Product from "../product/Product";
import { designs, products } from "../../data";

const ProductList = (imgUrl) => {
  const [fullImageComp, setFullImageComp] = useState(false)
  const [imgUrlComp, setImgUrlComp] = useState("")
  
  const fullImage =(imgUrl)=> {
    setFullImageComp(!fullImageComp)
    setImgUrlComp(imgUrl)
  }
 
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Bhavin</h1>
        <p className="pl-desc">
        "Step into a world where pixels tell stories, code fuels innovation, and every project is a testament to creativity meeting functionality."
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
      <div className="pl-texts">
        <h1 className="pl-title">UI/UX Designs</h1>
        <p className="pl-desc">
"Design creates culture. Culture shapes values. Values determine the future."
        </p>
      </div>
      <div className="pl-list">
        {designs.map((item) => (
          <Product key={item.id} img={item.img} 
          fullImg={fullImage} />
        ))}
      </div>
      {fullImageComp && <FullWidthImage imgUrl={imgUrlComp} fullImg={fullImage}/>}
    </div>
  );
};

const FullWidthImage = ({ imgUrl, onClose,fullImg }) => {
  return (
    <div className="full-width-image">
      <div className="image-container">
        <img src={imgUrl} alt="Full Width" />
        <button className="close-button text-black" onClick={()=>fullImg()}>
          X
        </button>
      </div>
    </div>
  );
};




export default ProductList;
