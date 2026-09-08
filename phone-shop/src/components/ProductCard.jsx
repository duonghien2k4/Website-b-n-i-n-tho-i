function ProductCard({ product, onClick }) {

  return (
    <div
      className="product-card"
      onClick={onClick}
    >

      {/* Ảnh sản phẩm */}

      <div className="product-card-image">

        <span>
          ẢNH SẢN PHẨM
        </span>

        <div className="product-discount">
          -8%
        </div>

      </div>


      {/* Thông tin sản phẩm */}

      <div className="product-card-content">

        <h3>
          {product.name}
        </h3>


        <div className="product-rating">

          ★★★★★

          <span>
            {" "} (12)
          </span>

        </div>


        <div className="product-card-price">
          {product.price}
        </div>


        <div className="product-card-old-price">
          {product.oldPrice}
        </div>


        <div className="product-installment">
          Trả góp 0% • Không phí
        </div>


        <div className="product-card-actions">

          <button
            className="buy-button"
            onClick={(e) => e.stopPropagation()}
          >
            Mua ngay
          </button>


          <button
            className="cart-button"
            onClick={(e) => e.stopPropagation()}
          >
            🛒
          </button>

        </div>

      </div>

    </div>
  )
}


export default ProductCard