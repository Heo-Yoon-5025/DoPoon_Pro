import SideNav from './SideNav'
import './Layout.css'

export default function Layout() {
  return (
    <div className="layout">
      <SideNav />
      {/* 본문 영역 — 화면을 여기에 채운다. */}
      <main className="layout__content" />
    </div>
  )
}
