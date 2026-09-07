function Banner() {
  return (
    <section className="banner">

      {/* Banner chính */}
      <div className="banner-main">

        <div className="banner-content">

          <span className="banner-label">
            ĐẶC QUYỀN MỖI NGÀY
          </span>

          <h1>
            iPhone 17 Pro
            <br />
            Vua Hiệu Năng
          </h1>

          <p>
            Sạc nhanh 120W, đẩy pin trong 19 phút
          </p>

          <button>
            Xem chi tiết →
          </button>

        </div>

        <div className="banner-phone">
          📱
        </div>

      </div>


      {/* Banner phụ */}
      <div className="banner-side">

        <div className="banner-small banner-mac">

          <div>
            <span>APPLE</span>

            <h3>
              MacBook Pro M5
            </h3>

            <p>
              Hiệu năng mạnh mẽ
            </p>

            <button>
              Mua ngay →
            </button>
          </div>

          <div className="small-icon">
            💻
          </div>

        </div>


        <div className="banner-small banner-accessory">

          <div>
            <span>PHỤ KIỆN</span>

            <h3>
              Phụ kiện Apple
            </h3>

            <p>
              Giảm đến 30%
            </p>

            <button>
              Mua ngay →
            </button>
          </div>

          <div className="small-icon">
            🎧
          </div>

        </div>

      </div>

    </section>
  )
}

export default Banner