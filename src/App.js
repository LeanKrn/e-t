import { useState } from "react";
import './App.css';
import Nav from './Components/nav';
import Footer from './Components/footer';
import Main from './Components/main';

function App() {

  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);


  return (
    <div className="App">
      {<Nav
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      ></Nav>}
      {<Main
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        ></Main>}
      {<Footer></Footer>}
    </div>
  );
}

export default App;
