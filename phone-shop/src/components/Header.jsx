function Header() {
  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO */}
        <div className="logo">
          <span className="logo-main">HD</span>
          <span className="logo-sub">Mobile</span>
        </div>

        {/* SEARCH */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm, thương hiệu..."
          />

          <button className="search-button">
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20L16.5 16.5" />
            </svg>
          </button>
        </div>

        {/* ACTIONS */}
        <div className="header-actions">

          {/* ƯU ĐÃI */}
          <button className="header-action">
            <div className="action-icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M20 12v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8" />
                <path d="M3 7h18v5H3z" />
                <path d="M12 7v14" />
                <path d="M12 7H8.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7Z" />
                <path d="M12 7h3.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7Z" />
              </svg>
            </div>

            <div className="action-text">
              <span>Khám phá</span>
              <strong>Ưu đãi</strong>
            </div>
          </button>

          {/* GIỎ HÀNG */}
          <button className="header-action">
            <div className="action-icon cart-icon">

              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="9" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
                <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 8H6" />
              </svg>

              <span className="cart-badge">0</span>
            </div>

            <div className="action-text">
              <span>Sản phẩm</span>
              <strong>Giỏ hàng</strong>
            </div>
          </button>

          {/* TÀI KHOẢN */}
          <button className="header-action">
            <div className="action-icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c.8-4 3.4-6 8-6s7.2 2 8 6" />
              </svg>
            </div>

            <div className="action-text">
              <span>Xin chào</span>
              <strong>Tài khoản</strong>
            </div>
          </button>

        </div>
      </div>
    </header>
  )
}

export default Header