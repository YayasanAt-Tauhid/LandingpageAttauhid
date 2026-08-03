import { createFileRoute } from '@tanstack/react-router'
import { yayasan } from '#/lib/site-data'

export const Route = createFileRoute('/kontak')({ component: Kontak })

function Kontak() {
  const { lat, lng } = yayasan.koordinat
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.01}%2C${lat - 0.01}%2C${lng + 0.01}%2C${lat + 0.01}&layer=mapnik&marker=${lat}%2C${lng}`

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold text-emerald-900 dark:text-emerald-50">Kontak</h1>
      <p className="mt-4 text-emerald-700 dark:text-emerald-300">
        Hubungi {yayasan.namaResmi} melalui informasi berikut.
      </p>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <ul className="space-y-4 text-sm">
          <li>
            <p className="font-semibold text-emerald-900 dark:text-emerald-50">Alamat</p>
            <p className="text-emerald-700 dark:text-emerald-300">
              {yayasan.alamat}, {yayasan.kodePos}
            </p>
          </li>
          <li>
            <p className="font-semibold text-emerald-900 dark:text-emerald-50">Email</p>
            <a href={`mailto:${yayasan.email}`} className="text-emerald-700 hover:underline dark:text-emerald-300">
              {yayasan.email}
            </a>
          </li>
          <li>
            <p className="font-semibold text-emerald-900 dark:text-emerald-50">Instagram</p>
            <a
              href={yayasan.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-700 hover:underline dark:text-emerald-300"
            >
              @yayasan_attauhid
            </a>
          </li>
          <li>
            <p className="font-semibold text-emerald-900 dark:text-emerald-50">Pimpinan Yayasan</p>
            <p className="text-emerald-700 dark:text-emerald-300">{yayasan.pimpinan}</p>
          </li>
        </ul>

        <iframe
          title="Lokasi Yayasan At-Tauhid"
          src={mapSrc}
          className="h-64 w-full rounded-xl border border-emerald-900/10 dark:border-white/10"
          loading="lazy"
        />
      </div>
    </div>
  )
}
