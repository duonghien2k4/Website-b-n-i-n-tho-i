function Footer() {
  return (
    <footer
  className="footer"
  style={{
    background: "red",
    color: "white",
    minHeight: "300px",
    padding: "50px"
  }}
>

      <div className="footer-container">

        {/* Cột 1 - Thông tin */}
        <div className="footer-column footer-brand">

          <div className="footer-logo">
            HD <span>Mobile</span>
          </div>

          <p className="footer-description">
            Hệ thống bán điện thoại và phụ kiện chính hãng.
            Sản phẩm chất lượng, giá tốt và dịch vụ tận tâm.
          </p>

          <div className="footer-contact">
            <p>
              📍 123 Nguyễn Trãi, Thanh Xuân, Hà Nội
            </p>

            <p>
              ☎ 1900 6868
            </p>

            <p>
              ✉ support@hdmobile.vn
            </p>
          </div>

        </div>


        {/* Cột 2 */}
        <div className="footer-column">

          <h3>
            VỀ HD MOBILE
          </h3>

          <a href="#">
            Giới thiệu
          </a>

          <a href="#">
            Tuyển dụng
          </a>

          <a href="#">
            Tin tức
          </a>

          <a href="#">
            Hệ thống cửa hàng
          </a>

          <a href="#">
            Liên hệ
          </a>

        </div>


        {/* Cột 3 */}
        <div className="footer-column">

          <h3>
            HỖ TRỢ KHÁCH HÀNG
          </h3>

          <a href="#">
            Chính sách bảo hành
          </a>

          <a href="#">
            Chính sách đổi trả
          </a>

          <a href="#">
            Chính sách giao hàng
          </a>

          <a href="#">
            Hướng dẫn mua hàng
          </a>

          <a href="#">
            Câu hỏi thường gặp
          </a>

        </div>


        {/* Cột 4 */}
        <div className="footer-column">

          <h3>
            KẾT NỐI VỚI CHÚNG TÔI
          </h3>

          <p className="footer-follow">
            Theo dõi HD Mobile để cập nhật
            những ưu đãi mới nhất.
          </p>

          <div className="social-links">

            <a href="#">
              f
            </a>

            <a href="#">
              ◎
            </a>

            <a href="#">
              ▶
            </a>

            <a href="#">
              ♪
            </a>

          </div>


          <h3 className="payment-title">
            PHƯƠNG THỨC THANH TOÁN
          </h3>

          <div className="payment-methods">

            <span>VISA</span>
            <span>ATM</span>
            <span>COD</span>

          </div>

        </div>

      </div>


      {/* Bottom */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <span>
            © 2026 HD Mobile. All rights reserved.
          </span>

          <div>
            <a href="#">
              Điều khoản sử dụng
            </a>

            <a href="#">
              Chính sách bảo mật
            </a>
          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer