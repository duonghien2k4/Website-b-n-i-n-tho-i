import { useState } from "react"

import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import FlashSale from "./components/FlashSale"
import ProductFilter from "./components/ProductFilter"
import ProductList from "./components/ProductList"
import ProductDetail from "./components/ProductDetail"
import Footer from "./components/Footer"

import "./App.css"


function App() {

  const [selectedProduct, setSelectedProduct] = useState(null)


  // =========================
  // TRANG CHI TIẾT SẢN PHẨM
  // =========================

  if (selectedProduct) {
    return (
      <div>

        <Header />

        <Navbar />

        <ProductDetail
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
        />

        <Footer />

      </div>
    )
  }


  // =========================
  // TRANG CHỦ
  // =========================

  return (
    <div>

      <Header />

      <Navbar />

      <Banner />

      <FlashSale />

      <ProductFilter />

      <ProductList
        onProductClick={setSelectedProduct}
      />

      <Footer />

    </div>
  )
}


export default App