// Data resmi diambil dari Verval Yayasan Kemendikdasmen
// https://vervalyayasan.data.kemendikdasmen.go.id (kode yayasan AL1141)
// Field bertanda "// TODO" belum ada sumber resmi publik — isi/verifikasi sebelum go-live.

export const yayasan = {
  namaResmi: 'Yayasan At-Tauhid Al Islamy Bangka Belitung',
  kodeYayasan: 'AL1141',
  alamat: 'Jl. Jebung Dalam, Kec. Gabek, Kota Pangkal Pinang, Kepulauan Bangka Belitung',
  kodePos: '33172',
  pimpinan: 'Ali Agustian Bahri, S.Pt.',
  email: 'yayasan.attauhid.alislamy@gmail.com',
  instagram: 'https://www.instagram.com/yayasan_attauhid/',
  noPendirian: '01',
  tglPendirian: '3 September 2012',
  noSkMenkumham: 'AHU-6409.AH.01.04.Tahun 2012',
  tglSkMenkumham: '10 Oktober 2012',
  koordinat: { lat: -2.095232172276, lng: 106.104866129001 },
  // TODO: ganti dengan naskah visi-misi resmi yayasan
  visi:
    'Menjadi lembaga pendidikan Islam yang melahirkan generasi penghafal Al-Qur’an, berakhlak mulia, dan unggul dalam ilmu pengetahuan.',
  // TODO: ganti dengan naskah misi resmi yayasan
  misi: [
    'Menyelenggarakan pendidikan berjenjang dari TK hingga SMA berbasis tahfizh Al-Qur’an.',
    'Membentuk karakter peserta didik yang berakhlak Qurani dan siap menghadapi tantangan zaman.',
    'Menyediakan lingkungan belajar yang aman, islami, dan mendukung tumbuh kembang santri.',
  ],
} as const

export type SekolahUnit = {
  npsn: string
  nama: string
  jenjang: 'TK' | 'SD' | 'SMP' | 'SMA'
  kecamatan: string
  profilUrl: string
  fotoUrl: string
}

export const unitSekolah: Array<SekolahUnit> = [
  {
    npsn: '69950602',
    nama: 'TK Tahfidz Al-Qur’an At-Tauhid Pangkal Pinang',
    jenjang: 'TK',
    kecamatan: 'Kec. Gabek',
    profilUrl:
      'https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/206F36BE-4307-455A-9319-992E0157D613',
    fotoUrl: 'https://foto2.data.kemdikbud.go.id/getImage/69950602/1.jpg',
  },
  {
    npsn: '69972538',
    nama: 'SD Islam Tahfizh Al-Qur’an At-Tauhid Pangkal Pinang',
    jenjang: 'SD',
    kecamatan: 'Kec. Gabek',
    profilUrl:
      'https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/3A04A662-185E-4DA5-B053-E69A1BD4E64B',
    fotoUrl: 'https://foto2.data.kemdikbud.go.id/getImage/69972538/1.jpg',
  },
  {
    npsn: '70012126',
    nama: 'SMP Islam Tahfidz Al-Qur’an At-Tauhid Pangkal Pinang',
    jenjang: 'SMP',
    kecamatan: 'Kec. Gerunggang',
    profilUrl:
      'https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/0E7C75E4-9D21-4672-8013-7B41A3A4213F',
    fotoUrl: 'https://foto2.data.kemdikbud.go.id/getImage/70012126/1.jpg',
  },
  {
    npsn: '70044522',
    nama: 'SMAS Islam Tahfidz Al-Qur’an At-Tauhid',
    jenjang: 'SMA',
    kecamatan: 'Kec. Gerunggang',
    profilUrl:
      'https://sekolah.data.kemdikbud.go.id/index.php/Chome/profil/5FF80BBB-356D-4FC8-8DEF-7A090BE81A53',
    fotoUrl: 'https://foto2.data.kemdikbud.go.id/getImage/70044522/1.jpg',
  },
]

export const portalUrl = 'https://portal-at-tauhid.yayasan-attauhid-1.workers.dev'
