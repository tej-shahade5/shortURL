import { useState } from "react";
import Background from "./components/Background";
import Footer from "./components/Footer";
import InputShortner from "./components/InputShortner";

function App() {

  const [inputValue,setInputValue] = useState('');

  return (
    <div>
      <InputShortner setInputValue={setInputValue} inputValue={inputValue}/> 
      <Background/>  
      <Footer/>      
    </div>
  );
}

export default App;
