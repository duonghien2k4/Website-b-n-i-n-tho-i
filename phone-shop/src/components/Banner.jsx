import { useEffect, useState } from "react"
import "./Banner.css"

function Banner() {

  const banners = [
    {
      tag: "ĐẶC QUYỀN MỖI NGÀY",
      title: "iPhone 17 Pro",
      subtitle: "Vua Hiệu Năng",
      description: "Sạc nhanh 120W, đầy pin trong 19 phút",
      button: "Xem chi tiết →",
      icon: "📱"
    },
    {
      tag: "SIÊU PHẨM MỚI",
      title: "Samsung Galaxy S26",
      subtitle: "Công Nghệ Đỉnh Cao",
      description: "Màn hình tuyệt đẹp, hiệu năng mạnh mẽ",
      button: "Khám phá ngay →",
      icon: "📱"
    },
    {
      tag: "HOT TREND 2026",
      title: "Xiaomi 16 Ultra",
      subtitle: "Nhiếp Ảnh Chuyên Nghiệp",
      description: "Camera Leica, hiệu năng vượt trội",
      button: "Xem sản phẩm →",
      icon: "📱"
    },
    {
      tag: "ƯU ĐÃI ĐẶC BIỆT",
      title: "OPPO Reno14 Pro",
      subtitle: "Chụp Đẹp Mọi Khoảnh Khắc",
      description: "Thiết kế thời thượng, camera AI thế hệ mới",
      button: "Mua ngay →",
      icon: "📱"
    }
  ]

  const [current, setCurrent] = useState(0)

  // Tự động chuyển slide sau 4 giây
  useEffect(() => {

    const timer = setInterval(() => {

      setCurrent((prev) => {

        if (prev === banners.length - 1) {
          return 0
        }

        return prev + 1
      })

    }, 4000)

    return () => clearInterval(timer)

  }, [])


  // Slide trước
  const prevSlide = () => {

    setCurrent((prev) => {

      if (prev === 0) {
        return banners.length - 1
      }

      return prev - 1
    })

  }


  // Slide sau
  const nextSlide = () => {

    setCurrent((prev) => {

      if (prev === banners.length - 1) {
        return 0
      }

      return prev + 1
    })

  }


  return (

    <section className="banner-wrapper">

      {/* ================= BANNER CHÍNH ================= */}

      <div className="banner-main">

        <div
          className="banner-slider"
          style={{
            transform: `translateX(-${current * 100}%)`
          }}
        >

          {banners.map((banner, index) => (

            <div
              className={`banner-slide banner-slide-${index}`}
              key={index}
            >

              {/* Nội dung */}

              <div className="banner-content">

                <div className="banner-tag">
                  {banner.tag}
                </div>

                <h1>
                  {banner.title}
                  <br />
                  <span>
                    {banner.subtitle}
                  </span>
                </h1>

                <p>
                  {banner.description}
                </p>

                <button className="banner-button">
                  {banner.button}
                </button>

              </div>


              {/* Hình điện thoại */}

              <div className="banner-visual">

                <div className="banner-glow"></div>

                <div className="banner-phone">
                  {banner.icon}
                </div>

              </div>

            </div>

          ))}

        </div>


        {/* Nút trái */}

        <button
          className="banner-arrow banner-prev"
          onClick={prevSlide}
        >
          ‹
        </button>


        {/* Nút phải */}

        <button
          className="banner-arrow banner-next"
          onClick={nextSlide}
        >
          ›
        </button>


        {/* 4 chấm */}

        <div className="banner-dots">

          {banners.map((_, index) => (

            <button
              key={index}
              className={`banner-dot ${
                current === index ? "active" : ""
              }`}
              onClick={() => setCurrent(index)}
            />

          ))}

        </div>

      </div>


      {/* ================= 2 KHUNG BÊN PHẢI ================= */}

      <div className="banner-right">

        {/* Khung 1 */}

        <div className="side-banner side-banner-top">

          <div className="side-banner-content">

            <span>APPLE</span>

            <h3>
              MacBook Pro M5
            </h3>

            <p>
              Hiệu năng mạnh mẽ
            </p>

            <button>
              Xem ngay →
            </button>

          </div>

          <div className="side-banner-icon">
            💻
          </div>

        </div>


        {/* Khung 2 */}

        <div className="side-banner side-banner-bottom">

          <div className="side-banner-content">

            <span>
              PHỤ KIỆN
            </span>

            <h3>
              Phụ kiện Apple
            </h3>

            <p>
              Chính hãng - Giá tốt
            </p>

            <button>
              Mua ngay →
            </button>

          </div>

          <div className="side-banner-icon">
            🎧
          </div>

        </div>

      </div>

    </section>

  )
}

export default Banner