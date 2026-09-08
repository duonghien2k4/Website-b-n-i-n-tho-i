function ProductDetail({ product, onBack }) {

  return (
    <main className="product-detail">

      {/* Quay lại */}

      <button
        className="back-button"
        onClick={onBack}
      >
        ← Quay lại danh sách sản phẩm
      </button>


      <div className="product-detail-container">


        {/* =========================
            BÊN TRÁI - ẢNH
        ========================= */}

        <div className="product-detail-left">

          <div className="product-detail-image">

            <span>
              ẢNH SẢN PHẨM
            </span>

          </div>


          <div className="product-thumbnails">

            <div className="thumbnail active">
              ẢNH 1
            </div>

            <div className="thumbnail">
              ẢNH 2
            </div>

            <div className="thumbnail">
              ẢNH 3
            </div>

            <div className="thumbnail">
              ẢNH 4
            </div>

          </div>

        </div>


        {/* =========================
            BÊN PHẢI - THÔNG TIN
        ========================= */}

        <div className="product-detail-right">


          <div className="product-detail-category">
            Điện thoại
          </div>


          <h1>
            {product.name}
          </h1>


          <div className="detail-rating">

            <span className="stars">
              ★★★★★
            </span>

            <span>
              5.0
            </span>

            <span>
              (38 đánh giá)
            </span>

          </div>


          <div className="detail-price">

            <span className="detail-current-price">
              {product.price}
            </span>

            <span className="detail-old-price">
              {product.oldPrice}
            </span>

          </div>


          <div className="detail-discount">
            Tiết kiệm khi mua hôm nay
          </div>


          {/* Phiên bản */}

          <div className="detail-section">

            <h3>
              Phiên bản
            </h3>

            <div className="option-list">

              <button className="option active">
                128GB
              </button>

              <button className="option">
                256GB
              </button>

              <button className="option">
                512GB
              </button>

            </div>

          </div>


          {/* Màu sắc */}

          <div className="detail-section">

            <h3>
              Màu sắc
            </h3>

            <div className="option-list">

              <button className="option active">
                Đen
              </button>

              <button className="option">
                Xanh
              </button>

              <button className="option">
                Bạc
              </button>

            </div>

          </div>


          {/* Khuyến mãi */}

          <div className="promotion-box">

            <h3>
              🎁 Khuyến mãi
            </h3>

            <p>
              Giảm thêm khi mua sản phẩm trong hôm nay.
            </p>

            <p>
              Tặng phụ kiện chính hãng.
            </p>

          </div>


          {/* Nút */}

          <div className="detail-actions">

            <button className="add-cart-button">
              🛒 Thêm vào giỏ hàng
            </button>

            <button className="buy-now-detail">
              Mua ngay
            </button>

          </div>


        </div>

      </div>

    </main>
  )
}


export default ProductDetail