# Landing Page — Yayasan At-Tauhid Al Islamy Bangka Belitung

Website profil publik untuk Yayasan At-Tauhid Al Islamy Bangka Belitung, dibangun dengan
[TanStack Start](https://tanstack.com/start) dan dideploy ke Cloudflare (Workers, via
`@cloudflare/vite-plugin`).

Tujuan situs ini: profil organisasi yang bisa diakses publik tanpa login — cocok dipakai
sebagai `orgWebsite` saat mengajukan Google for Nonprofits, berbeda dari
[Portal Hijrah At-Tauhid](https://github.com/YayasanAt-Tauhid/Portal) yang merupakan portal
SSO internal (butuh login) untuk SPP/rapor/PPDB/dll.

## Halaman

- **Beranda** (`/`) — hero, ringkasan unit sekolah, tautan ke Portal, ringkasan legalitas.
- **Tentang Kami** (`/tentang`) — profil yayasan, visi-misi, data legalitas (SK Menkumham, dll).
- **Unit Sekolah** (`/unit`) — 4 satuan pendidikan naungan (TK, SD, SMP, SMA) dengan NPSN.
- **Kontak** (`/kontak`) — alamat, email, Instagram, peta lokasi.

Data profil (nama resmi, alamat, legalitas, daftar sekolah) diambil dari
[Verval Yayasan Kemendikdasmen](https://vervalyayasan.data.kemendikdasmen.go.id) — lihat
`src/lib/site-data.ts`. Field yang ditandai `// TODO` (visi & misi) belum punya sumber resmi
publik dan perlu diverifikasi/diganti dengan naskah asli yayasan sebelum go-live.

## Getting started

```bash
npm install
npm run dev
```

## Build & deploy (Cloudflare)

```bash
npm run build     # vite build (client + ssr)
npm run deploy    # build lalu wrangler deploy
```

Konfigurasi Cloudflare ada di `wrangler.jsonc` (nama Worker: `landingpage-attauhid`). Perlu
login `wrangler` (`npx wrangler login`) atau `CLOUDFLARE_API_TOKEN` di CI sebelum deploy.

## Struktur data

- `src/lib/site-data.ts` — satu sumber kebenaran untuk profil yayasan & daftar unit sekolah.
  Ubah di sini untuk memperbarui konten di semua halaman.
- `src/components/Header.tsx` / `Footer.tsx` — nav & footer bersama, dipakai lewat
  `src/routes/__root.tsx`.
