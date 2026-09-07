function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <div className="logo">
          HD <span>Mobile</span>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Bạn muốn tìm điện thoại, phụ kiện..."
          />
          <button>⌕</button>
        </div>

        <div className="header-actions">

          <button className="header-action">
            <span className="action-icon">🎁</span>
            <span>Ưu đãi</span>
          </button>

          <button className="header-action">
            <span className="action-icon">🛒</span>
            <span>Giỏ hàng</span>
          </button>

          <button className="header-action">
            <span className="action-icon">👤</span>
            <span>Tài khoản</span>
          </button>

        </div>

      </div>
    </header>
  )
}

export default Header