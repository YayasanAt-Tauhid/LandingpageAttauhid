import { Link } from '@tanstack/react-router'

const links = [
  { to: '/', label: 'Beranda' },
  { to: '/tentang', label: 'Tentang Kami' },
  { to: '/unit', label: 'Unit Sekolah' },
  { to: '/kontak', label: 'Kontak' },
] as const

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-emerald-900/10 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-emerald-950/90">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold text-emerald-900 dark:text-emerald-50">
          <img
            src="/logo-yayasan.png"
            alt="Logo Yayasan At-Tauhid Al Islamy Bangka Belitung"
            className="h-9 w-9 rounded-full bg-white object-contain p-0.5 ring-2 ring-amber-400"
          />
          <span className="leading-tight">
            Yayasan At-Tauhid
            <br />
            <span className="text-xs font-normal text-emerald-700 dark:text-emerald-300">
              Al Islamy Bangka Belitung
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === '/' }}
              className="rounded-md px-3 py-2 text-emerald-800 hover:bg-emerald-50 dark:text-emerald-100 dark:hover:bg-emerald-900"
              activeProps={{ className: 'bg-emerald-100 font-semibold dark:bg-emerald-900' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
