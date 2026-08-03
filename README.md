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

Konfigurasi Cloudflare ada di `wrangler.jsonc` (nama Worker: `landingpage-attauhid`).

### Deploy otomatis (GitHub Actions)

`.github/workflows/deploy.yml` menjalankan `npm run build` lalu `wrangler deploy` setiap push
ke `main` (atau manual lewat workflow_dispatch). Perlu dua repo secret (Settings → Secrets and
variables → Actions):

| Secret | Cara dapat |
|---|---|
| `CLOUDFLARE_API_TOKEN` | Cloudflare Dashboard → My Profile → API Tokens → Create Token, pakai template **Edit Cloudflare Workers**. |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Dashboard → sidebar kanan halaman Workers & Pages mana pun. |

### Deploy manual dari komputer sendiri

```bash
npx wrangler login   # butuh browser — jalankan di komputer lokal, bukan sandbox/CI
npm run deploy
```

## Struktur data

- `src/lib/site-data.ts` — satu sumber kebenaran untuk profil yayasan & daftar unit sekolah.
  Ubah di sini untuk memperbarui konten di semua halaman.
- `src/components/Header.tsx` / `Footer.tsx` — nav & footer bersama, dipakai lewat
  `src/routes/__root.tsx`.
