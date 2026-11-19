'use client'

import React, { useState, useEffect } from 'react'

interface ProjectData {
  id: string
  index: string
  mockUrl: string
  title: string
  tagline: string
  category: string
  year: string
  image: string
  alt: string
  summary: string
  uiUx: string
  dev: string
  techStack: string[]
}

const projects: ProjectData[] = [
  {
    id: 'proyek-dompi',
    index: '01',
    mockUrl: 'dompi.app/dashboard',
    title: 'Dompi — Dompet Pintar',
    tagline: 'Personal Finance, Budgeting & Smart Expense Tracker',
    category: 'FINTECH · WEB APPLICATION',
    year: '2026',
    image: '/assets/project-dompi.jpg',
    alt: 'Antarmuka Dashboard Dompi Dompet Pintar',
    summary:
      'Aplikasi manajemen finansial mandiri dengan sentuhan antarmuka neo-brutalisme pastel yang ramah mata. Dompi dirancang untuk mempermudah pencatatan transaksi harian, melacak arus kas bulanan secara dinamis, serta memberikan visualisasi persentase pengeluaran kategori belanja secara transparan.',
    uiUx: 'Hirarki informasi visual saldo dan transaksi yang langsung terbaca, visualisasi donat kategori interaktif, dan palet warna pastel yang menghapus stres saat mengelola uang.',
    dev: 'Arsitektur komponen modular Next.js/React dengan validasi transaksi terstruktur, reaktivitas perhitungan saldo instan, dan penyimpanan tersinkronisasi.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Data Charts', 'Responsive Design'],
  },
  {
    id: 'proyek-ereport',
    index: '02',
    mockUrl: 'ereport.layanan.id/portal',
    title: 'E-Report — Layanan Pengaduan Publik',
    tagline: 'Platform Pengaduan Kendala Lingkungan & Fasilitas Terpadu 24/7',
    category: 'CIVIC TECH · PUBLIC SERVICE',
    year: '2026',
    image: '/assets/project-ereport.jpg',
    alt: 'Antarmuka Portal Resmi Layanan E-Report',
    summary:
      'Platform pengaduan dan aspirasi publik digital yang menghubungkan warga dengan aparatur lapangan secara transparan. Mendukung penanganan aduan infrastruktur dan lingkungan sekitar dengan pelacakan status tindak lanjut petugas yang dapat dipantau langsung oleh masyarakat pelapor.',
    uiUx: 'Desain landing page institusional yang terpercaya, call-to-action kontras tinggi untuk modul akses ganda Warga vs Petugas/Admin, serta navigasi aduan tanpa hambatan.',
    dev: 'Implementasi Role-Based Access Control (RBAC) ketat, integrasi REST API pelaporan, proteksi data pelapor, dan optimasi performa akses publik.',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'REST API', 'Role-Based Auth'],
  },
  {
    id: 'proyek-memora',
    index: '03',
    mockUrl: 'memora.gallery/studio',
    title: 'Memora — Digital Memory Vault',
    tagline: 'Editorial Photo Journal, Curated Albums & Memory Flashbacks',
    category: 'LIFESTYLE · DIGITAL PHOTO VAULT',
    year: '2025',
    image: '/assets/project-memora.jpg',
    alt: 'Antarmuka Aplikasi Galeri Foto Memora',
    summary:
      'Platform jurnal kenangan dan album foto digital bertema majalah editorial. Memora menghadirkan pengalaman bernostalgia yang personal lewat fitur kilas balik harian "Hari Ini, Setahun Lalu", kurasi album perjalanan berbasis momen dan lokasi, serta integrasi studio kreatif.',
    uiUx: 'Tipografi editorial klasik berpadu tata letak kartu polaroid dinamis. Palet warm cream yang menciptakan kesan hangat, intim, dan memanjakan mata pembaca kenangan.',
    dev: 'Optimasi rendering media gambar beresolusi tinggi dengan lazy loading, pengindeksan metadata tanggal dan momen untuk pencarian instan (Ctrl+K), dan layout adaptif.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Media Optimization', 'Editorial UI'],
  },
  {
    id: 'proyek-cale',
    index: '04',
    mockUrl: 'cale.app/calendar',
    title: 'Cale — Calendar & Tasks Planner',
    tagline: 'Minimalist Dark-Mode Productivity, Daily Planner & Habit Tracker',
    category: 'PRODUCTIVITY · TIME MANAGEMENT',
    year: '2026',
    image: '/assets/project-cale.jpg',
    alt: 'Antarmuka Dark Mode Aplikasi Cale Calendar & Tasks',
    summary:
      'Aplikasi produktivitas all-in-one bernuansa dark mode violet futuristik. Mengusung prinsip "Plan more. Stress less. Stay on track", Cale menggabungkan to-do list terprioritas, kalender mingguan interaktif, pelacak konsistensi kebiasaan (habit tracker), dan audio fokus.',
    uiUx: 'Palet warna dark violet dengan aksen glow neon lembut yang nyaman digunakan pada malam hari. Navigasi timeline horizontal harian yang ergonomis dan minim friksi visual.',
    dev: 'State management reaktif untuk penjadwalan real-time, sinkronisasi kalender lokal dengan manajemen timezone presisi, dan penyimpanan data habit persisten.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Dark Mode Glow', 'Calendar Engine'],
  },
]

const educationJourney = [
  {
    year: '2026 – 2030',
    institution: 'Politeknik IDN — Jurusan TRPL',
    sub: 'Teknologi Rekayasa Perangkat Lunak',
    desc: 'Menempuh pendidikan tinggi vokasi dengan fokus mendalam pada rekayasa perangkat lunak terapan, arsitektur sistem berbasis cloud, pengembangan aplikasi web skala industri, serta penguasaan standar pengembangan software modern (SDLC & Agile).',
  },
  {
    year: '2024 – 2026',
    institution: 'SMA Integral Ar-Rahmah — Jurusan IPS',
    sub: 'Ilmu Pengetahuan Sosial',
    desc: 'Mempelajari dinamika sosial, ekonomi, dan perilaku interaksi manusia. Wawasan ini memperkuat empati dan perspektif user-centered yang esensial dalam merancang pengalaman pengguna (UX) yang intuitif serta memecahkan masalah nyata lewat teknologi.',
  },
  {
    year: '2020 – 2023',
    institution: 'SMP Integral Ar-Rahmah',
    sub: 'Sekolah Menengah Pertama',
    desc: 'Fase awal penanaman kedisiplinan dan pembentukan minat di bidang teknologi informasi. Mulai mengeksplorasi dasar-dasar logika komputasi, algoritma pemrograman, dan ketertarikan pada dunia desain antarmuka digital.',
  },
]

// 6 Cards configuration matching the reference master composition
const deckCards = [
  {
    id: 'dompi',
    type: 'project',
    projectId: 'proyek-dompi',
    title: 'Dompi',
    tag: 'FINTECH APP',
    src: '/assets/project-dompi.jpg',
    alt: 'Dompi Dompet Pintar',
    posClass: 'card-pos-0',
  },
  {
    id: 'cale',
    type: 'project',
    projectId: 'proyek-cale',
    title: 'Cale',
    tag: 'PRODUCTIVITY',
    src: '/assets/project-cale.jpg',
    alt: 'Cale Calendar & Tasks',
    posClass: 'card-pos-1',
  },
  {
    id: 'hero-estetik',
    type: 'philosophy',
    title: 'Design Studio',
    tag: 'DESIGN · CODE',
    isEstetikCard: true,
    posClass: 'card-pos-2 is-estetik-card',
  },
  {
    id: 'portrait',
    type: 'bio',
    title: 'Azam M. Kafilaya',
    tag: 'AZAM M. KAFILAYA',
    src: '/assets/card-3-portrait.png',
    alt: 'Azam Muda Kafilaya',
    isPortrait: true,
    posClass: 'card-pos-3 is-portrait-card',
  },
  {
    id: 'memora',
    type: 'project',
    projectId: 'proyek-memora',
    title: 'Memora',
    tag: 'PHOTO JOURNAL',
    src: '/assets/project-memora.jpg',
    alt: 'Memora Photo Vault',
    posClass: 'card-pos-4',
  },
  {
    id: 'ereport',
    type: 'project',
    projectId: 'proyek-ereport',
    title: 'E-Report',
    tag: 'CIVIC TECH',
    src: '/assets/project-ereport.jpg',
    alt: 'E-Report Layanan Publik',
    posClass: 'card-pos-5',
  },
]

function CornerMark() {
  return (
    <svg viewBox="0 0 36 36" aria-hidden="true" className="eye-mark" fill="none">
      {/* Diamond / Rhombus frame */}
      <polygon
        points="18,2 34,18 18,34 2,18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Inner concentric diamond */}
      <polygon
        points="18,8 28,18 18,28 8,18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        opacity="0.55"
      />
      {/* Center dot */}
      <circle cx="18" cy="18" r="2.8" fill="currentColor" />
      {/* Four cardinal tick marks */}
      <line x1="18" y1="2" x2="18" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="30" x2="18" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="2" y1="18" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="18" x2="34" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function CloverEyeMark() {
  return (
    <svg viewBox="0 0 100 100" className="red-card-clover-eye" aria-hidden="true">
      <path
        d="M 50,15 C 60,15 68,22 68,32 C 78,32 85,40 85,50 C 85,60 78,68 68,68 C 68,78 60,85 50,85 C 40,85 32,78 32,68 C 22,68 15,60 15,50 C 15,40 22,32 32,32 C 32,22 40,15 50,15 Z"
        fill="none"
        stroke="#111"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path d="M 30,50 Q 50,33 70,50 Q 50,67 30,50 Z" fill="#111" />
      <circle cx="50" cy="50" r="4.5" fill="#EF4444" />
      <polygon points="50,26 53,30 47,30" fill="#111" />
      <polygon points="50,74 53,70 47,70" fill="#111" />
    </svg>
  )
}

function HeroCurvedTitle() {
  return (
    <div className="hero-curved-svg-wrap" aria-label="PORTFOLIO">
      <svg
        viewBox="0 0 940 220"
        className="hero-curved-svg"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          {/*
            Top row: gentle downward bow (PORT = solid, FOLIO = outline)
            Matching reference: left side solid/filled, right side outline stroked
          */}
          <path
            id="arc-top"
            d="M 30,88 C 150,55 390,52 480,88 C 570,124 790,116 910,76"
          />
          {/*
            Bottom row: gentle upward bow (PORT = outline, FOLIO = solid)
            Sits beneath and slightly offset for the intersecting/irisan effect
          */}
          <path
            id="arc-bottom"
            d="M 30,160 C 150,127 390,124 480,160 C 570,196 790,186 910,148"
          />
        </defs>

        {/* Top word: PORT (black solid) + FOLIO (clean outline) */}
        <g className="hero-arc-row hero-arc-top">
          <text
            fontFamily="Impact, 'Arial Black', 'Arial Narrow', sans-serif"
            fontWeight="900"
            fontSize="78"
            letterSpacing="0.015em"
          >
            <textPath href="#arc-top" startOffset="50%" textAnchor="middle">
              <tspan fill="#0a0a0a">PORT</tspan>
              <tspan fill="none" stroke="#0a0a0a" strokeWidth="2.4px">FOLIO</tspan>
            </textPath>
          </text>
        </g>

        {/* Bottom word: PORT (outline) + FOLIO (black solid) */}
        <g className="hero-arc-row hero-arc-bottom">
          <text
            fontFamily="Impact, 'Arial Black', 'Arial Narrow', sans-serif"
            fontWeight="900"
            fontSize="78"
            letterSpacing="0.015em"
          >
            <textPath href="#arc-bottom" startOffset="50%" textAnchor="middle">
              <tspan fill="none" stroke="#0a0a0a" strokeWidth="2.4px">PORT</tspan>
              <tspan fill="#0a0a0a">FOLIO</tspan>
            </textPath>
          </text>
        </g>
      </svg>
      <h1 className="sr-only">PORTFOLIO — Azam Muda Kafilaya</h1>
    </div>
  )
}

export default function Page() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [activeModal, setActiveModal] = useState<ProjectData | 'bio' | 'philosophy' | null>(null)

  // Esc key listener for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModal(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12 // -6 to 6 deg
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8 // -4 to 4 deg
    setTilt({ x, y })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setHoveredIdx(null)
  }

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleCardClick = (card: typeof deckCards[0]) => {
    if (card.type === 'project' && card.projectId) {
      const proj = projects.find((p) => p.id === card.projectId)
      if (proj) setActiveModal(proj)
    } else if (card.type === 'bio') {
      setActiveModal('bio')
    } else if (card.type === 'philosophy') {
      setActiveModal('philosophy')
    }
  }

  return (
    <main className="portfolio-site" id="top">
      {/* Landing Stage */}
      <div className="landing-stage">
        {/* Background Coordinate Marks matching reference */}
        <div className="grid-coordinates" aria-hidden="true">
          <span className="coord-cross cross-top-left">+</span>
          <span className="coord-cross cross-top-right">+</span>
          <span className="coord-cross cross-mid-left">+</span>
          <span className="coord-cross cross-mid-center-left">+</span>
          <span className="coord-cross cross-mid-center-right">+</span>
          <span className="coord-cross cross-mid-right">+</span>
        </div>
        <span className="edge-arrow edge-arrow-left" aria-hidden="true">&#9658;</span>
        <span className="edge-arrow edge-arrow-right" aria-hidden="true">&#9668;</span>

        {/* Topline Header */}
        <header className="topline">
          <p className="welcome">
            WELCOME<br />TO MY
          </p>
          <span className="edition">
            SOFTWARE DEVELOPER &amp; UI/UX DESIGNER<br />PORTFOLIO — 2026
          </span>
          <div className="mark-wrap" aria-label="Abstract corner mark symbol">
            <CornerMark />
          </div>
        </header>

        {/* Hero Section with Red Block & Curved Typography */}
        <section
          className="hero"
          aria-labelledby="hero-title"
          style={{
            transform: `translate(${tilt.x * -0.5}px, ${tilt.y * -0.4}px)`,
          }}
        >
          <div className="red-block" />
          <HeroCurvedTitle />
          <div className="hero-meta">
            <span>AZAM MUDA KAFILAYA</span>
            <span className="hero-meta-center">+</span>
            <span>SOFTWARE DEVELOPER &amp; UI/UX</span>
          </div>
        </section>

        {/* Interactive 6-Card Fanned Deck Showcase */}
        <section
          className="showcase"
          aria-label="Karya pilihan dan profil pengembang"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card-fan-wrap">
            <div
              className="card-fan"
              style={{
                transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              }}
            >
              {deckCards.map((card, idx) => {
                // Parting physics: sibling cards gently shift outward when a card is hovered
                let partOffset = 0
                if (hoveredIdx !== null && hoveredIdx !== idx) {
                  partOffset = idx < hoveredIdx ? -14 : 14
                }

                return (
                  <div
                    key={card.id}
                    onClick={() => handleCardClick(card)}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className={`deck-card ${card.posClass}`}
                    style={{
                      transform: partOffset ? `translateX(${partOffset}px)` : undefined,
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Buka detail ${card.title}`}
                  >
                    {card.isEstetikCard ? (
                      <div className="estetik-card-inner">
                        {/* Dark editorial SVG art */}
                        <svg className="estetik-card-svg" viewBox="0 0 160 220" aria-hidden="true">
                          {/* Grid lines */}
                          <line x1="0" y1="40" x2="160" y2="40" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
                          <line x1="0" y1="80" x2="160" y2="80" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
                          <line x1="0" y1="120" x2="160" y2="120" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
                          <line x1="0" y1="160" x2="160" y2="160" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
                          <line x1="40" y1="0" x2="40" y2="220" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
                          <line x1="80" y1="0" x2="80" y2="220" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
                          <line x1="120" y1="0" x2="120" y2="220" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
                          {/* Circle accent */}
                          <circle cx="80" cy="100" r="52" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2"/>
                          <circle cx="80" cy="100" r="34" fill="none" stroke="rgba(239,68,68,0.35)" strokeWidth="1.5"/>
                          <circle cx="80" cy="100" r="10" fill="rgba(239,68,68,0.6)"/>
                          {/* Corner marks */}
                          <line x1="8" y1="8" x2="22" y2="8" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
                          <line x1="8" y1="8" x2="8" y2="22" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
                          <line x1="152" y1="8" x2="138" y2="8" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
                          <line x1="152" y1="8" x2="152" y2="22" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
                          <line x1="8" y1="212" x2="22" y2="212" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
                          <line x1="8" y1="212" x2="8" y2="198" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
                          <line x1="152" y1="212" x2="138" y2="212" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
                          <line x1="152" y1="212" x2="152" y2="198" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
                          {/* Diagonal accent lines */}
                          <line x1="52" y1="76" x2="68" y2="60" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeLinecap="round"/>
                          <line x1="92" y1="140" x2="108" y2="124" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeLinecap="round"/>
                          {/* Code-like horizontal bars */}
                          <rect x="20" y="186" width="52" height="3" rx="1.5" fill="rgba(255,255,255,0.15)"/>
                          <rect x="20" y="193" width="34" height="3" rx="1.5" fill="rgba(239,68,68,0.4)"/>
                        </svg>
                        <span className="estetik-card-label">DESIGN · CODE · BUILD</span>
                        <span className="card-tag-pill">{card.tag}</span>
                      </div>
                    ) : card.isRedCard ? (
                      <div className="red-card-inner">
                        <span className="red-card-dot" />
                        <div className="red-card-mark-wrap">
                          <CloverEyeMark />
                        </div>
                        <span className="red-card-dot" />
                      </div>
                    ) : (
                      <>
                        {card.src && <img src={card.src} alt={card.alt || card.title} />}
                        <span className="card-tag-pill">{card.tag}</span>
                        {card.isPortrait && (
                          <>
                            <span className="portrait-card-tag">DEV · UI/UX</span>
                            <span className="card-portrait-badge">AZAM M. KAFILAYA</span>
                          </>
                        )}
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Bottom Center "ME" Dial Element - Matching Reference */}
          <div
            className="bottom-me-dial-wrap"
            onClick={() => {
              const el = document.getElementById('tentang')
              el?.scrollIntoView({ behavior: 'smooth' })
            }}
            role="button"
            tabIndex={0}
            aria-label="Gulir ke bagian Tentang Saya"
          >
            <div className="me-dial-indicator">
              <span className="me-dial-arrow">&#9650;</span>
              <span className="me-dial-text">ME</span>
            </div>
            <svg className="me-dial-svg-circle" viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <path
                  id="me-dial-path"
                  d="M 100,100 m -74,0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0"
                />
              </defs>
              <text>
                <textPath href="#me-dial-path">
                  PORTFOLIO • ME • 2026 • PORTFOLIO • AZAM MUDA KAFILAYA • 
                </textPath>
              </text>
            </svg>
          </div>
        </section>

        {/* Landing Footer Note */}
        <footer className="bottom-note">
          <a href="#tentang">GULIR UNTUK MENGENAL SAYA ↓</a>
          <span>BERBASIS DI BOGOR, INDONESIA · TERBUKA UNTUK KOLABORASI</span>
          <span>© 2026</span>
        </footer>
      </div>

      {/* 01 / Tentang Saya */}
      <section className="content-section about-section" id="tentang" aria-labelledby="about-title">
        <div className="section-kicker">
          <span>01 / TENTANG SAYA</span>
          <span>KREATIF · FUNGSIONAL · BERORIENTASI SOLUSI</span>
        </div>
        <div className="about-grid">
          <div>
            <h2 id="about-title">
              IDE BESAR.<br />
              <span>KODE</span> PRESISI.
            </h2>
            <div className="about-copy">
              <p className="about-lede">
                Halo, saya Azam Muda Kafilaya — Software Developer &amp; UI/UX Designer yang memadukan keindahan visual dengan rekayasa kode yang tangguh.
              </p>
              <p>
                Saya percaya bahwa produk digital terbaik lahir dari pertemuan antara estetika antarmuka yang intuitif dan arsitektur kode yang bersih serta performan. Dari tahap riset pengalaman pengguna (UX), pembuatan prototipe interaktif (UI), hingga implementasi full-stack web application modern, setiap detail dibangun dengan dedikasi tinggi.
              </p>
              <a className="text-link" href="#karya">
                JELAJAHI PROYEK SAYA <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>

          {/* Snapshot Profile Card */}
          <div className="about-profile-card">
            <div className="about-profile-header">
              <div className="about-avatar-frame">
                <img src="/assets/card-3-portrait.png" alt="Azam Muda Kafilaya" />
              </div>
              <div className="about-profile-name">
                <h3>Azam Muda Kafilaya</h3>
                <p>Software Developer &amp; UI/UX Designer</p>
                <div className="online-pill">
                  <span className="online-dot" />
                  <span>Tersedia untuk Proyek Baru</span>
                </div>
              </div>
            </div>
            <div className="about-profile-body">
              Mengkhususkan diri pada pengembangan web modern dengan Next.js &amp; React, perancangan design system, visualisasi data, dan pembuatan solusi digital yang memudahkan kehidupan pengguna. Berbasis di Bogor, Indonesia.
            </div>
            <div className="about-profile-badges">
              <span className="badge-pill">Frontend (Next.js)</span>
              <span className="badge-pill">UI/UX Prototyping</span>
              <span className="badge-pill">TypeScript</span>
              <span className="badge-pill">RESTful API</span>
              <span className="badge-pill">Tailwind CSS</span>
            </div>
          </div>
        </div>
        <div className="discipline-row">
          <span>FULL-STACK WEB DEVELOPMENT</span>
          <span>UI / UX DESIGN SYSTEM</span>
          <span>DATA VISUALIZATION</span>
          <span>RESPONSIVE ARCHITECTURE</span>
        </div>
      </section>

      {/* 02 / Karya Pilihan */}
      <section className="content-section work-section" id="karya" aria-labelledby="work-title">
        <div className="section-kicker">
          <span>02 / KARYA PILIHAN</span>
          <span>4 APLIKASI WEB PRODUKSI &amp; STUDI KASUS</span>
        </div>
        <div className="section-heading-row">
          <h2 id="work-title">
            PILIHAN<br />
            KARYA<span className="red-period">.</span>
          </h2>
          <p>
            Koleksi 4 aplikasi web nyata yang merefleksikan perpaduan antara desain antarmuka ergonomis dan rekayasa perangkat lunak modern.
          </p>
        </div>

        {/* 4 Projects Showcase Grid */}
        <div className="work-showcase-grid">
          {projects.map((proj) => (
            <article key={proj.id} id={proj.id} className="project-card-full">
              {/* Browser Mockup Frame */}
              <div className="project-mockup-frame">
                <div className="mockup-browser-bar">
                  <span className="mockup-dot dot-red" />
                  <span className="mockup-dot dot-yellow" />
                  <span className="mockup-dot dot-green" />
                  <span className="mockup-address">{proj.mockUrl}</span>
                </div>
                <div className="project-screenshot-wrap">
                  <img src={proj.image} alt={proj.alt} />
                  <span className="project-index-badge">{proj.index}</span>
                  <span className="project-category-tag">{proj.category}</span>
                </div>
              </div>

              {/* Project Details */}
              <div className="project-details-wrap">
                <div className="project-header-row">
                  <h3>{proj.title}</h3>
                  <span className="project-year-pill">{proj.year}</span>
                </div>
                <div className="project-tagline">{proj.tagline}</div>
                <p className="project-summary-text">{proj.summary}</p>

                {/* UI/UX & Dev Highlights */}
                <div className="project-highlights-grid">
                  <div className="highlight-line">
                    <span className="highlight-tag uiux">UI/UX</span>
                    <span>{proj.uiUx}</span>
                  </div>
                  <div className="highlight-line">
                    <span className="highlight-tag dev">DEV</span>
                    <span>{proj.dev}</span>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="project-tech-chips">
                  {proj.techStack.map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 03 / Perjalanan */}
      <section className="content-section journey-section" id="perjalanan" aria-labelledby="journey-title">
        <div className="section-kicker">
          <span>03 / PERJALANAN &amp; PENDIDIKAN</span>
          <span>LANGKAH DEMI LANGKAH MENUJU KUALITAS</span>
        </div>
        <div className="journey-layout">
          <div>
            <h2 id="journey-title">
              TERUS<br />
              <span>BERKEMBANG.</span>
            </h2>
            <p className="journey-intro">
              Perjalanan akademis dan eksplorasi teknologi yang membentuk cara pandang saya dalam memecahkan masalah, memahami pengguna, dan merancang perangkat lunak terpercaya.
            </p>
          </div>
          <ol className="timeline">
            {educationJourney.map((item) => (
              <li key={item.year}>
                <span className="timeline-year">{item.year}</span>
                <div>
                  <h3>{item.institution}</h3>
                  <p>{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 04 / Kontak & Kolaborasi (CTA) */}
      <section className="contact-section" id="kontak" aria-labelledby="contact-title">
        <div className="section-kicker">
          <span>04 / PUNYA IDE?</span>
          <span>TERBUKA UNTUK PROYEK &amp; KERJASAMA BARU</span>
        </div>
        <h2 id="contact-title">
          MARI BUAT<br />
          SESUATU <span>BERMAKNA.</span>
        </h2>
        <p className="contact-lead">
          Tertarik mengembangkan aplikasi web inovatif, mendesain antarmuka UI/UX yang memikat, atau membutuhkan partner rekayasa perangkat lunak untuk ide Anda?
        </p>
        <div className="contact-actions">
          <a
            className="contact-link"
            href="mailto:azamuda04@gmail.com?subject=Kolaborasi%20Proyek%20Web%20%26%20UI%2FUX&body=Halo%20Azam%2C%0A%0ASaya%20tertarik%20untuk%20berdiskusi%20mengenai%20proyek%20aplikasi%20web%20%2F%20UI%2FUX.%20Mari%20jadwalkan%20waktu%20untuk%20berbicara."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kirim email ke Azam Muda Kafilaya"
          >
            HUBUNGI SAYA VIA EMAIL <span aria-hidden="true">↗</span>
          </a>
          <button
            type="button"
            className="contact-secondary-btn"
            onClick={scrollToTop}
            aria-label="Kembali ke bagian paling atas halaman"
          >
            KEMBALI KE ATAS ↑
          </button>
        </div>
        <div className="contact-foot">
          <span>AZAM MUDA KAFILAYA — SOFTWARE DEVELOPER &amp; UI/UX DESIGNER</span>
          <span>BOGOR, INDONESIA</span>
        </div>
      </section>

      {/* Interactive Detail Modal / Drawer */}
      {activeModal && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            {activeModal === 'bio' ? (
              <>
                <div className="modal-header">
                  <div>
                    <h3>Azam Muda Kafilaya</h3>
                    <span className="modal-header-tag">SOFTWARE DEVELOPER &amp; UI/UX</span>
                  </div>
                  <button
                    type="button"
                    className="modal-close-btn"
                    onClick={() => setActiveModal(null)}
                    aria-label="Tutup modal"
                  >
                    ✕
                  </button>
                </div>
                <div className="modal-body">
                  <div className="modal-meta-grid">
                    <div className="modal-image-wrap">
                      <img src="/assets/card-3-portrait.png" alt="Azam Muda Kafilaya" />
                    </div>
                    <div className="modal-desc-text">
                      <p><strong>Pendidikan Terkini:</strong> Politeknik IDN — Jurusan TRPL (Teknologi Rekayasa Perangkat Lunak).</p>
                      <p><strong>Domisili:</strong> Bogor, Indonesia.</p>
                      <p><strong>Spesialisasi:</strong> Full-Stack Web Development, UI/UX Design System, Data Visualization, RESTful Architecture.</p>
                      <p>Berfokus menciptakan solusi digital yang fungsional, terukur, dan memberikan kenyamanan optimal bagi pengguna.</p>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="modal-action-btn modal-btn-secondary"
                    onClick={() => setActiveModal(null)}
                  >
                    Tutup
                  </button>
                  <a
                    href="#tentang"
                    className="modal-action-btn modal-btn-primary"
                    onClick={() => setActiveModal(null)}
                  >
                    Lihat Profil Lengkap ↓
                  </a>
                </div>
              </>
            ) : activeModal === 'philosophy' ? (
              <>
                <div className="modal-header">
                  <div>
                    <h3>Filosofi Desain &amp; Kode</h3>
                    <span className="modal-header-tag">CREATIVE CORE</span>
                  </div>
                  <button
                    type="button"
                    className="modal-close-btn"
                    onClick={() => setActiveModal(null)}
                    aria-label="Tutup modal"
                  >
                    ✕
                  </button>
                </div>
                <div className="modal-body">
                  <div style={{ textAlign: 'center', padding: '20px 0' }}>
                    <div style={{ width: '120px', margin: '0 auto 16px' }}>
                      <CloverEyeMark />
                    </div>
                    <h4 style={{ margin: '0 0 10px', fontSize: '20px', fontWeight: 800 }}>
                      Desain dengan Rasa Ingin Tahu, Bangun dengan Presisi.
                    </h4>
                    <p className="modal-desc-text" style={{ maxWidth: '520px', margin: '0 auto' }}>
                      Simbol mata dalam kelopak melambangkan kewaspadaan terhadap detail antarmuka, empati mendalam pada pengguna, serta konsistensi dalam mengejar keunggulan rekayasa perangkat lunak.
                    </p>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="modal-action-btn modal-btn-primary"
                    onClick={() => setActiveModal(null)}
                  >
                    Tutup
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="modal-header">
                  <div>
                    <h3>{activeModal.title}</h3>
                    <span className="modal-header-tag">{activeModal.category}</span>
                  </div>
                  <button
                    type="button"
                    className="modal-close-btn"
                    onClick={() => setActiveModal(null)}
                    aria-label="Tutup modal"
                  >
                    ✕
                  </button>
                </div>
                <div className="modal-body">
                  <div className="modal-image-wrap">
                    <img src={activeModal.image} alt={activeModal.alt} />
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 6px', color: 'var(--signal)', fontSize: '13px', fontWeight: 800 }}>
                      {activeModal.tagline}
                    </h4>
                    <p className="modal-desc-text">{activeModal.summary}</p>
                  </div>
                  <div className="project-highlights-grid">
                    <div className="highlight-line">
                      <span className="highlight-tag uiux">UI/UX</span>
                      <span>{activeModal.uiUx}</span>
                    </div>
                    <div className="highlight-line">
                      <span className="highlight-tag dev">DEV</span>
                      <span>{activeModal.dev}</span>
                    </div>
                  </div>
                  <div className="project-tech-chips">
                    {activeModal.techStack.map((tech) => (
                      <span key={tech} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="modal-action-btn modal-btn-secondary"
                    onClick={() => setActiveModal(null)}
                  >
                    Tutup
                  </button>
                  <a
                    href={`#${activeModal.id}`}
                    className="modal-action-btn modal-btn-primary"
                    onClick={() => setActiveModal(null)}
                  >
                    Lihat di Karya Pilihan ↓
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  )
}
