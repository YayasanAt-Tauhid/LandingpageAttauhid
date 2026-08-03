import { createFileRoute, Link } from '@tanstack/react-router'
import { unitSekolah, yayasan, portalUrl } from '#/lib/site-data'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div>
      <section className="border-b-4 border-amber-400 bg-gradient-to-br from-emerald-950 via-emerald-800 to-emerald-700 text-emerald-50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-sm font-medium tracking-wide text-amber-300 uppercase">
            Yayasan At-Tauhid Al Islamy Bangka Belitung
          </p>
          <h1 className="mt-3 max-w-2xl text-3xl font-extrabold text-amber-300 sm:text-5xl">
            Mendidik generasi penghafal Al-Qur'an, berakhlak mulia, dan unggul
          </h1>
          <p className="mt-4 max-w-xl text-emerald-100">
            Menaungi jenjang TK hingga SMA berbasis tahfizh Al-Qur'an di Pangkal Pinang, Kepulauan
            Bangka Belitung.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/unit"
              className="rounded-lg bg-amber-400 px-5 py-3 font-semibold text-emerald-950 hover:bg-amber-300"
            >
              Lihat Unit Sekolah
            </Link>
            <Link
              to="/kontak"
              className="rounded-lg border border-amber-300/60 px-5 py-3 font-semibold text-amber-100 hover:bg-emerald-700"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-50">
          Unit Pendidikan
        </h2>
        <p className="mt-2 text-emerald-700 dark:text-emerald-300">
          {unitSekolah.length} satuan pendidikan berjenjang di bawah naungan yayasan.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {unitSekolah.map((unit) => (
            <div
              key={unit.npsn}
              className="rounded-xl border border-emerald-900/10 p-5 dark:border-white/10"
            >
              <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                {unit.jenjang}
              </span>
              <p className="mt-3 font-semibold text-emerald-900 dark:text-emerald-50">
                {unit.nama}
              </p>
              <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-400">
                NPSN {unit.npsn}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-emerald-900/10 bg-emerald-50 dark:border-white/10 dark:bg-emerald-900/40">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-50">
            Portal Keluarga Besar At-Tauhid
          </h2>
          <p className="mt-2 max-w-2xl text-emerald-700 dark:text-emerald-300">
            Orang tua, calon peserta didik, guru & pegawai, alumni, dan donatur dapat mengakses
            SPP, rapor, PPDB, dan tahfizh tracker melalui satu portal terpadu.
          </p>
          <a
            href={portalUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-lg bg-amber-400 px-5 py-3 font-semibold text-emerald-950 hover:bg-amber-300"
          >
            Buka Portal Hijrah At-Tauhid
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-50">Legalitas</h2>
        <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-emerald-600 dark:text-emerald-400">Tanggal Pendirian</dt>
            <dd className="font-medium text-emerald-900 dark:text-emerald-50">
              {yayasan.tglPendirian}
            </dd>
          </div>
          <div>
            <dt className="text-emerald-600 dark:text-emerald-400">SK Pengesahan Menkumham</dt>
            <dd className="font-medium text-emerald-900 dark:text-emerald-50">
              {yayasan.noSkMenkumham} ({yayasan.tglSkMenkumham})
            </dd>
          </div>
        </dl>
      </section>
    </div>
  )
}
