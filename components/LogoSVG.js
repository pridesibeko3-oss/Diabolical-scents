export default function LogoSVG(){
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldGrad" x1="0" x2="1">
          <stop offset="0%" stopColor="#F7E7B6" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>

      <rect width="100%" height="100%" fill="none" />

      {/* stylized serpent shaped like S */}
      <g transform="translate(50,20) scale(0.9)">
        <path d="M50,10 C30,10 20,40 50,60 C80,80 60,110 40,120" fill="none" stroke="url(#goldGrad)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        {/* head */}
        <path d="M40,118 C42,112 55,110 62,104" fill="url(#goldGrad)" />
      </g>

      {/* faceted diamond-apple */}
      <g transform="translate(120,10) scale(0.6)">
        <polygon points="50,0 76,18 64,50 36,50 24,18" fill="#D4AF37" opacity="0.95"/>
      </g>

      {/* brand wordmark */}
      <text x="50%" y="180" textAnchor="middle" fontFamily="Playfair Display, serif" fontSize="18" fill="#D4AF37" letterSpacing="4">DIABOLICAL</text>
    </svg>
  )
}
