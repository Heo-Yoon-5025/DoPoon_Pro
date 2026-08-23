import './SideNav.css'

const NAV_ITEMS = [
  { key: 'home', label: '홈', icon: '🏠' },
  { key: 'statistics', label: '통계', icon: '📊' },
  { key: 'budget', label: '예산', icon: '🎯' },
  { key: 'settings', label: '설정', icon: '⚙️' },
]

export default function SideNav() {
  return (
    <nav className="nav" aria-label="주요 메뉴">
      <div className="nav__brand">
        <span className="nav__logo" aria-hidden="true">
          ₩
        </span>
        <span className="nav__brand-name">dopoon</span>
      </div>

      <button type="button" className="nav__cta">
        <span aria-hidden="true">＋</span>
        가계부 등록
      </button>

      <ul className="nav__list">
        {NAV_ITEMS.map((item) => (
          <li key={item.key}>
            {/* 선택 상태는 nav__item--active 클래스로 표현한다. */}
            <button type="button" className="nav__item">
              <span className="nav__icon" aria-hidden="true">
                {item.icon}
              </span>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
