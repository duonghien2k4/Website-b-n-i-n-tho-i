function HotTrend({ onProductClick }) {

  const products = [
    {
      name: "iPhone 17 Pro Max 256GB",
      price: "35.990.000đ",
      oldPrice: "39.000.000đ",
      discount: "-8%",
      brand: "Apple"
    },
    {
      name: "Samsung Galaxy S25 Ultra 256GB",
      price: "29.990.000đ",
      oldPrice: "33.990.000đ",
      discount: "-12%",
      brand: "Samsung"
    },
    {
      name: "Xiaomi 15T Pro 5G 256GB",
      price: "16.390.000đ",
      oldPrice: "18.990.000đ",
      discount: "-14%",
      brand: "Xiaomi"
    },
    {
      name: "OPPO Reno13 Pro 5G",
      price: "25.490.000đ",
      oldPrice: "28.990.000đ",
      discount: "-12%",
      brand: "OPPO"
    },
    {
      name: "iPhone 16 Pro 128GB",
      price: "21.990.000đ",
      oldPrice: "24.990.000đ",
      discount: "-12%",
      brand: "Apple"
    }
  ]

  return (
    <section className="hot-trend">

      <div className="hot-trend-header">
        <div>
          <span className="hot-icon">🔥</span>
          <h2>SẢN PHẨM HOT TREND</h2>
        </div>

        <button>
          Xem tất cả →
        </button>
      </div>

      <div className="hot-trend-tabs">
        <button className="active">Tất cả</button>
        <button>iPhone</button>
        <button>Samsung</button>
        <button>Xiaomi</button>
        <button>OPPO</button>
        <button>Gaming Phone</button>
      </div>

      <div className="hot-trend-products">

        {products.map((product, index) => (

          <div
            className="trend-card"
            key={index}
            onClick={() => onProductClick(product)}
          >

            <div className="trend-image">

              <span>ẢNH SẢN PHẨM</span>

              <div className="trend-discount">
                {product.discount}
              </div>

              <div className="trend-installment">
                Trả góp 0%
              </div>

            </div>

            <div className="trend-content">

              <span className="trend-brand">
                {product.brand}
              </span>

              <h3>
                {product.name}
              </h3>

              <div className="trend-rating">
                <span>★★★★★</span>
                <small>(38)</small>
              </div>

              <div className="trend-price">
                {product.price}
              </div>

              <div className="trend-old-price">
                {product.oldPrice}
              </div>

              <div className="trend-promotion">
                🎁 Ưu đãi đặc biệt khi mua hôm nay
              </div>

              <div className="trend-bottom">

                <span>
                  🚚 Miễn phí vận chuyển
                </span>

                <button
                  onClick={(e) => e.stopPropagation()}
                >
                  🛒
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default HotTrend