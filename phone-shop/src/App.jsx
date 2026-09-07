import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import FlashSale from "./components/FlashSale"
import ProductFilter from "./components/ProductFilter"
import ProductList from "./components/ProductList"
import "./App.css"

function App() {
  return (
    <div>
      <Header />

      <Navbar />

      <Banner />

      <FlashSale />

      <ProductFilter />

      <ProductList />
    </div>
  )
}

export default App