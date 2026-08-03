import { yayasan } from '#/lib/site-data'

export function Footer() {
  return (
    <footer className="border-t-4 border-amber-400 bg-emerald-50 dark:bg-emerald-950">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-emerald-900 sm:px-6 dark:text-emerald-100">
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <p className="font-semibold">{yayasan.namaResmi}</p>
            <p className="mt-1 text-emerald-700 dark:text-emerald-300">{yayasan.alamat}</p>
          </div>
          <div>
            <p className="font-semibold">Kontak</p>
            <p className="mt-1">
              <a href={`mailto:${yayasan.email}`} className="hover:underline">
                {yayasan.email}
              </a>
            </p>
            <p>
              <a href={yayasan.instagram} target="_blank" rel="noreferrer" className="hover:underline">
                Instagram @yayasan_attauhid
              </a>
            </p>
          </div>
          <div>
            <p className="font-semibold">Legalitas</p>
            <p className="mt-1 text-emerald-700 dark:text-emerald-300">
              SK Menkumham {yayasan.noSkMenkumham}
              <br />
              Berdiri sejak {yayasan.tglPendirian}
            </p>
          </div>
        </div>
        <p className="mt-6 text-xs text-emerald-600 dark:text-emerald-400">
          &copy; {new Date().getFullYear()} {yayasan.namaResmi}. Seluruh hak cipta dilindungi.
        </p>
      </div>
    </footer>
  )
}
