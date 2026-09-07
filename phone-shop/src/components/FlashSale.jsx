function FlashSale() {

  const products = [
    {
      name: "OPPO Reno13 5G",
      price: "13.801.000đ",
      oldPrice: "15.000.000đ",
      discount: "-8%"
    },

    {
      name: "Samsung Galaxy A27 5G",
      price: "7.371.000đ",
      oldPrice: "8.000.000đ",
      discount: "-8%"
    },

    {
      name: "Motorola G37 5G",
      price: "4.311.000đ",
      oldPrice: "4.800.000đ",
      discount: "-10%"
    }
  ]

  return (
    <section className="flash-sale">

      <div className="flash-header">

        <div>
          <h2>🔥 DEAL SỐC MỖI NGÀY</h2>

          <p>
            Giá tốt nhất trong ngày
          </p>
        </div>

        <div className="countdown">

          <span className="countdown-label">
            KẾT THÚC TRONG
          </span>

          <span>04</span>
          :
          <span>15</span>
          :
          <span>15</span>

        </div>

      </div>


      <div className="flash-products">

        {products.map((product, index) => (

          <div className="flash-card" key={index}>

            <div className="flash-image">

              <span>
                ẢNH SẢN PHẨM
              </span>

              <div>
                {product.discount}
              </div>

            </div>

            <div className="flash-info">

              <h3>
                {product.name}
              </h3>

              <div className="flash-price">
                {product.price}
              </div>

              <div className="flash-old-price">
                {product.oldPrice}
              </div>

              <div className="flash-progress">

                <div className="progress-bar">
                  <div></div>
                </div>

                <span>
                  Đã bán 72%
                </span>

              </div>

              <button>
                Mua ngay
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default FlashSale