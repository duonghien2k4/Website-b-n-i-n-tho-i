function ProductFilter() {
  return (
    <section className="product-filter">

      {/* Danh mục */}
      <div className="filter-row">
        <div className="filter-title">
          Danh mục
        </div>

        <div className="filter-options">
          <button className="active">
            Điện thoại
          </button>

          <button>
            Khác
          </button>
        </div>
      </div>


      {/* Hãng sản xuất */}
      <div className="filter-row">
        <div className="filter-title">
          Hãng sản xuất
        </div>

        <div className="filter-options">
          <button className="active">
            Tất cả
          </button>

          <button>OPPO</button>
          <button>Samsung</button>
          <button>Motorola</button>
          <button>iPhone (Apple)</button>
          <button>Xiaomi</button>
          <button>vivo</button>
          <button>realme</button>
        </div>
      </div>


      {/* Nhu cầu */}
      <div className="filter-row">
        <div className="filter-title">
          Chọn theo nhu cầu
        </div>

        <div className="filter-options">
          <button className="active">
            Tất cả nhu cầu
          </button>

          <button>
            Flagship Cao cấp
          </button>

          <button>
            Chơi Game/Giải trí
          </button>

          <button>
            Chụp Ảnh Đẹp
          </button>

          <button>
            Pin Trâu
          </button>
        </div>
      </div>

    </section>
  )
}

export default ProductFilter