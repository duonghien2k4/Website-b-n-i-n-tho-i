function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a href="#" className="nav-item active">
          Trang chủ
        </a>

        <a href="#" className="nav-item">
          Điện thoại
          <span className="nav-arrow">⌄</span>
        </a>

        <a href="#" className="nav-item">
          iPhone
        </a>

        <a href="#" className="nav-item">
          Samsung
        </a>

        <a href="#" className="nav-item">
          Xiaomi
        </a>

        <a href="#" className="nav-item">
          OPPO
        </a>

        <a href="#" className="nav-item">
          Laptop
        </a>

        <a href="#" className="nav-item">
          Phụ kiện
          <span className="nav-arrow">⌄</span>
        </a>

        <a href="#" className="nav-item">
          Khuyến mãi
        </a>

        <div className="navbar-divider"></div>

        <a href="#" className="nav-item nav-support">
          <span className="support-icon">♧</span>
          Hỗ trợ
        </a>

      </div>
    </nav>
  )
}

export default Navbar