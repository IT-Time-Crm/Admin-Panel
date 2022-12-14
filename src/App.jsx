import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Category from "./components/Category/Category";
import New from "./components/News/News";
import Product from "./components/Product/Product";
import ProductAbout from "./components/ProductAbout/ProductAbout";
import UserTable from "./components/UserTable/UserTable";
import Wrapper from "./components/Wrapper/Wrapper";
import Aside from "./layout/Aside/Aside";
import Navbar from "./layout/Navbar/Navbar";
import Analitica from "./Page/Analitica/Analitica";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-page">
        <Aside />
        <div className="App-box">
          <Wrapper />
          <Routes>
            <Route path="/" element={<UserTable />} />
            <Route path="/analitica" element={<Analitica />} />
            <Route path="/product" element={<Product />} />
            <Route path="/category" element={<Category />} />
            <Route path="/product-about" element={<ProductAbout />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/new" element={<New />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
