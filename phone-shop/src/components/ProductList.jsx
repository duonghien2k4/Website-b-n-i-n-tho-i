import ProductCard from "./ProductCard"


function ProductList({ onProductClick }) {

  const products = [
    {
      name: "OPPO Reno13 5G 8GB/128GB",
      price: "13.801.000đ",
      oldPrice: "15.000.000đ"
    },
    {
      name: "Samsung Galaxy A27 5G 8GB/128GB",
      price: "7.371.000đ",
      oldPrice: "8.000.000đ"
    },
    {
      name: "Motorola G37 5G 4GB/64GB",
      price: "4.311.000đ",
      oldPrice: "4.800.000đ"
    },
    {
      name: "iPhone 17 Pro Max 256GB",
      price: "35.990.000đ",
      oldPrice: "39.000.000đ"
    },
    {
      name: "iPhone 15 Pro 128GB",
      price: "18.990.000đ",
      oldPrice: "21.000.000đ"
    },
    {
      name: "Samsung Galaxy A57 5G",
      price: "11.290.000đ",
      oldPrice: "13.000.000đ"
    },
    {
      name: "Xiaomi 15T 5G",
      price: "16.390.000đ",
      oldPrice: "18.000.000đ"
    },
    {
      name: "OPPO Reno13 Pro 5G",
      price: "25.490.000đ",
      oldPrice: "28.000.000đ"
    }
  ]


  return (
    <section className="product-list">

      <div className="product-list-header">

        <div>

          <h2>
            ĐIỆN THOẠI NỔI BẬT
          </h2>

          <p>
            Khám phá những sản phẩm được yêu thích nhất
          </p>

        </div>

        <button className="view-all">
          Xem tất cả →
        </button>

      </div>


      <div className="products-grid">

        {products.map((product, index) => (

          <ProductCard
            key={index}
            product={product}
            onClick={() => onProductClick(product)}
          />

        ))}

      </div>

    </section>
  )
}


export default ProductList