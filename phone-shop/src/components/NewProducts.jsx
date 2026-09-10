function NewProducts({ onProductClick }) {

  const products = [
    {
      name: "iPhone 17 Pro Max 256GB",
      price: "35.990.000đ",
      oldPrice: "39.000.000đ",
      brand: "Apple",
      label: "MỚI"
    },
    {
      name: "Samsung Galaxy S26 Ultra 256GB",
      price: "31.990.000đ",
      oldPrice: "35.990.000đ",
      brand: "Samsung",
      label: "MỚI"
    },
    {
      name: "Xiaomi 16 5G 256GB",
      price: "18.490.000đ",
      oldPrice: "20.990.000đ",
      brand: "Xiaomi",
      label: "MỚI"
    },
    {
      name: "OPPO Reno14 Pro 5G",
      price: "24.990.000đ",
      oldPrice: "27.990.000đ",
      brand: "OPPO",
      label: "MỚI"
    },
    {
      name: "HONOR Magic7 Pro 5G",
      price: "22.990.000đ",
      oldPrice: "25.990.000đ",
      brand: "HONOR",
      label: "MỚI"
    }
  ]

  return (
    <section className="new-products">

      {/* HEADER */}
      <div className="new-products-header">

        <div className="new-products-title">
          <span className="new-products-icon">✨</span>

          <div>
            <h2>HÀNG MỚI VỀ</h2>
            <p>
              Những sản phẩm mới nhất tại HD Mobile
            </p>
          </div>
        </div>

        <button className="new-view-all">
          Xem tất cả →
        </button>

      </div>

      {/* TABS */}
      <div className="new-products-tabs">

        <button className="active">
          Mới nhất
        </button>

        <button>
          iPhone
        </button>

        <button>
          Samsung
        </button>

        <button>
          Xiaomi
        </button>

        <button>
          OPPO
        </button>

        <button>
          Android
        </button>

      </div>

      {/* PRODUCT LIST */}
      <div className="new-products-grid">

        {products.map((product, index) => (

          <div
            className="new-product-card"
            key={index}
            onClick={() => onProductClick(product)}
          >

            {/* IMAGE */}
            <div className="new-product-image">

              <div className="new-label">
                {product.label}
              </div>

              <span className="new-image-placeholder">
                ẢNH SẢN PHẨM
              </span>

              <div className="new-installment">
                Trả góp 0%
              </div>

            </div>

            {/* CONTENT */}
            <div className="new-product-content">

              <div className="new-brand">
                {product.brand}
              </div>

              <h3>
                {product.name}
              </h3>

              <div className="new-rating">
                <span>★★★★★</span>
                <small>(24)</small>
              </div>

              <div className="new-price">
                {product.price}
              </div>

              <div className="new-old-price">
                {product.oldPrice}
              </div>

              <div className="new-promotion">
                🎁 Quà tặng hấp dẫn khi mua sản phẩm
              </div>

              <div className="new-product-bottom">

                <span>
                  ✓ Chính hãng
                </span>

                <button
                  onClick={(e) => e.stopPropagation()}
                  aria-label="Thêm vào giỏ hàng"
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

export default NewProducts