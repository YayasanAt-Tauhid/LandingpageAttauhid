import { createFileRoute } from '@tanstack/react-router'
import { unitSekolah } from '#/lib/site-data'

export const Route = createFileRoute('/unit')({ component: Unit })

function Unit() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold text-emerald-900 dark:text-emerald-50">Unit Sekolah</h1>
      <p className="mt-4 max-w-2xl text-emerald-700 dark:text-emerald-300">
        Empat satuan pendidikan berjenjang di bawah naungan Yayasan At-Tauhid Al Islamy Bangka
        Belitung, terdaftar resmi di Kemendikdasmen RI.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {unitSekolah.map((unit) => (
          <a
            key={unit.npsn}
            href={unit.profilUrl}
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-xl border border-emerald-900/10 hover:border-emerald-400 dark:border-white/10"
          >
            <img
              src={unit.fotoUrl}
              alt={unit.nama}
              className="h-40 w-full object-cover"
              loading="lazy"
            />
            <div className="p-5">
              <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                {unit.jenjang}
              </span>
              <p className="mt-3 font-semibold text-emerald-900 group-hover:underline dark:text-emerald-50">
                {unit.nama}
              </p>
              <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-400">
                NPSN {unit.npsn} &middot; {unit.kecamatan}, Kota Pangkal Pinang
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
