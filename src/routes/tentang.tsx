import { createFileRoute } from '@tanstack/react-router'
import { yayasan } from '#/lib/site-data'

export const Route = createFileRoute('/tentang')({ component: Tentang })

function Tentang() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold text-emerald-900 dark:text-emerald-50">Tentang Kami</h1>
      <p className="mt-4 text-emerald-700 dark:text-emerald-300">
        {yayasan.namaResmi} adalah lembaga pendidikan Islam yang berlokasi di {yayasan.alamat},
        dipimpin oleh {yayasan.pimpinan}. Yayasan resmi berbadan hukum sejak {yayasan.tglPendirian}{' '}
        berdasarkan SK Pengesahan Menkumham {yayasan.noSkMenkumham}.
      </p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-emerald-900 dark:text-emerald-50">Visi</h2>
          <p className="mt-2 text-emerald-700 dark:text-emerald-300">{yayasan.visi}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-emerald-900 dark:text-emerald-50">Misi</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-emerald-700 dark:text-emerald-300">
            {yayasan.misi.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 rounded-xl border border-emerald-900/10 p-6 dark:border-white/10">
        <h2 className="text-xl font-semibold text-emerald-900 dark:text-emerald-50">
          Data Legalitas
        </h2>
        <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-2">
          <Item label="Nomor Pendirian Yayasan" value={yayasan.noPendirian} />
          <Item label="Tanggal Pendirian" value={yayasan.tglPendirian} />
          <Item label="No. SK Pengesahan Badan Hukum Menkumham" value={yayasan.noSkMenkumham} />
          <Item label="Tanggal SK Menkumham" value={yayasan.tglSkMenkumham} />
          <Item label="Pimpinan Yayasan" value={yayasan.pimpinan} />
          <Item label="Kode Yayasan (Dapodik)" value={yayasan.kodeYayasan} />
        </dl>
        <p className="mt-4 text-xs text-emerald-500 dark:text-emerald-400">
          Sumber: Verval Yayasan — Kemendikdasmen RI.
        </p>
      </div>
    </div>
  )
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-emerald-600 dark:text-emerald-400">{label}</dt>
      <dd className="font-medium text-emerald-900 dark:text-emerald-50">{value}</dd>
    </div>
  )
}
