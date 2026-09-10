import { useState } from "react"
import "./ProductShowcase.css"

function ProductShowcase({ onProductClick }) {

  const [activeTab, setActiveTab] = useState("deal")

  const products = {
    deal: [
      {
        brand: "Apple",
        name: "iPhone 15 128GB",
        price: "15.990.000đ",
        oldPrice: "18.990.000đ",
        discount: "Giảm 16%",
      },
      {
        brand: "Samsung",
        name: "Samsung Galaxy A56 5G",
        price: "8.990.000đ",
        oldPrice: "10.990.000đ",
        discount: "Giảm 18%",
      },
      {
        brand: "Xiaomi",
        name: "Xiaomi Redmi Note 14 Pro",
        price: "7.490.000đ",
        oldPrice: "8.990.000đ",
        discount: "Giảm 17%",
      },
      {
        brand: "OPPO",
        name: "OPPO Reno14 Pro 5G",
        price: "24.990.000đ",
        oldPrice: "27.990.000đ",
        discount: "Giảm 19%",
      },
      {
        brand: "HONOR",
        name: "HONOR Magic7 Pro 5G",
        price: "22.990.000đ",
        oldPrice: "25.990.000đ",
        discount: "Giảm 12%",
      },
    ],

    hot: [
      {
        brand: "Apple",
        name: "iPhone 17 Pro Max 256GB",
        price: "35.990.000đ",
        oldPrice: "39.000.000đ",
        discount: "HOT",
      },
      {
        brand: "Samsung",
        name: "Samsung Galaxy S26 Ultra",
        price: "31.990.000đ",
        oldPrice: "35.990.000đ",
        discount: "HOT",
      },
      {
        brand: "Xiaomi",
        name: "Xiaomi 16 5G 256GB",
        price: "18.490.000đ",
        oldPrice: "20.990.000đ",
        discount: "HOT",
      },
      {
        brand: "OPPO",
        name: "OPPO Reno14 Pro 5G",
        price: "24.990.000đ",
        oldPrice: "27.990.000đ",
        discount: "HOT",
      },
      {
        brand: "Samsung",
        name: "Samsung Galaxy Z Fold7",
        price: "39.990.000đ",
        oldPrice: "44.990.000đ",
        discount: "HOT",
      },
    ],

    new: [
      {
        brand: "Apple",
        name: "iPhone 17 Pro Max 256GB",
        price: "35.990.000đ",
        oldPrice: "39.000.000đ",
        discount: "MỚI",
      },
      {
        brand: "Samsung",
        name: "Samsung Galaxy S26 Ultra",
        price: "31.990.000đ",
        oldPrice: "35.990.000đ",
        discount: "MỚI",
      },
      {
        brand: "Xiaomi",
        name: "Xiaomi 16 5G 256GB",
        price: "18.490.000đ",
        oldPrice: "20.990.000đ",
        discount: "MỚI",
      },
      {
        brand: "OPPO",
        name: "OPPO Reno14 Pro 5G",
        price: "24.990.000đ",
        oldPrice: "27.990.000đ",
        discount: "MỚI",
      },
      {
        brand: "HONOR",
        name: "HONOR Magic7 Pro 5G",
        price: "22.990.000đ",
        oldPrice: "25.990.000đ",
        discount: "MỚI",
      },
    ],
  }

  const categories = [
    "Mới nhất",
    "iPhone",
    "Samsung",
    "Xiaomi",
    "OPPO",
    "Android",
  ]

  const tabInfo = {
    deal: {
      icon: "⚡",
      title: "DEAL SỐC MỖI NGÀY",
    },
    hot: {
      icon: "🔥",
      title: "SẢN PHẨM HOT TREND",
    },
    new: {
      icon: "✨",
      title: "HÀNG MỚI VỀ",
    },
  }

  const handleProductClick = (product) => {
    if (onProductClick) {
      onProductClick(product)
    }
  }

  return (
    <section className="product-showcase">

      {/* ================= TAB ================= */}

      <div className="showcase-tabs">

        {Object.keys(tabInfo).map((tab) => (
          <button
            key={tab}
            className={`showcase-tab ${
              activeTab === tab ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            <span>{tabInfo[tab].icon}</span>
            {tabInfo[tab].title}
          </button>
        ))}

      </div>


      {/* ================= NỘI DUNG ================= */}

      <div className="showcase-content">

        {/* CATEGORY */}

        <div className="showcase-categories">

          {categories.map((category, index) => (
            <button
              key={category}
              className={`category ${
                index === 0 ? "active" : ""
              }`}
            >
              {category}
            </button>
          ))}

        </div>


        {/* PRODUCT */}

        <div className="showcase-products">

          {products[activeTab].map((product, index) => (

            <div
              className="showcase-card"
              key={index}
              onClick={() => handleProductClick(product)}
            >

              {/* IMAGE */}

              <div className="showcase-image">

                <div className="showcase-label">
                  {product.discount}
                </div>

                <div className="showcase-installment">
                  Trả góp 0%
                </div>

                <div className="showcase-placeholder">
                  ẢNH SẢN PHẨM
                </div>

              </div>


              {/* CARD CONTENT */}

              <div className="showcase-card-content">

                <div className="showcase-brand">
                  {product.brand}
                </div>

                <h3>
                  {product.name}
                </h3>


                {/* RATING */}

                <div className="showcase-rating">

                  <span>★★★★★</span>

                  <small>
                    (24)
                  </small>

                </div>


                {/* PRICE */}

                <div className="showcase-price">
                  {product.price}
                </div>

                <div className="showcase-old-price">
                  {product.oldPrice}
                </div>


                {/* PROMOTION */}

                <div className="showcase-promotion">
                  🎁 Quà tặng hấp dẫn khi mua sản phẩm
                </div>


                {/* BOTTOM */}

                <div className="showcase-bottom">

                  <span>
                    🚚 Miễn phí vận chuyển
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                    }}
                  >
                    🛒
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default ProductShowcase