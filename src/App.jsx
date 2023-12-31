import { useContext, useEffect } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) =>{
      entries.forEach((entry)=> {
       console.log(entry)
       if(entry.isIntersecting){
         entry.target.classList.add('show')
       }else{
         entry.target.classList.remove('show')
       }
      })
   })
   
   const hiddenElement = document.querySelectorAll('.hidden')
   hiddenElement.forEach((el)=>observer.observe(el))
  }, [])
  

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro  />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
