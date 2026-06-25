
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Diabolical Logo Preview</title>
  <style>
    html,body{height:100%;margin:0;background:#0b0b0b;display:flex;align-items:center;justify-content:center}
    .frame{width:640px;height:640px;display:flex;align-items:center;justify-content:center}
    svg{width:90%;height:auto;display:block;filter:drop-shadow(0 18px 30px rgba(0,0,0,0.8));}
  </style>
</head>
<body>
  <div class="frame">
    <!-- Inline SVG logo (from components/LogoSVG.js on organize-images) -->
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diabolical logo: snake coiled around an apple">
      <defs>
        <radialGradient id="appleGrad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#ff4b4b" />
          <stop offset="45%" stop-color="#b30f0f" />
          <stop offset="100%" stop-color="#5a0202" />
        </radialGradient>

        <linearGradient id="goldGrad" x1="0" x2="1">
          <stop offset="0%" stop-color="#F9E6B8" />
          <stop offset="50%" stop-color="#D4AF37" />
          <stop offset="100%" stop-color="#8A6A2E" />
        </linearGradient>

        <linearGradient id="snakeDark" x1="0" x2="1">
          <stop offset="0%" stop-color="#1b1b1b" />
          <stop offset="40%" stop-color="#232323" />
          <stop offset="100%" stop-color="#0b0b0b" />
        </linearGradient>

        <linearGradient id="snakeIridescent" x1="0" x2="1">
          <stop offset="0%" stop-color="#4b2f2f" stop-opacity="0.15" />
          <stop offset="50%" stop-color="#2e3a3f" stop-opacity="0.25" />
          <stop offset="100%" stop-color="#1b1b1b" stop-opacity="0.3" />
        </linearGradient>

        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <rect width="100%" height="100%" fill="none" />

      <!-- Apple -->
      <g transform="translate(90,40)">
        <g filter="url(#softShadow)">
          <ellipse cx="60" cy="80" rx="58" ry="62" fill="url(#appleGrad)" />
        </g>

        <!-- Apple highlight -->
        <path d="M40 40 C 52 30, 80 28, 96 40 C 92 26, 68 22, 42 36 Z" fill="rgba(255,255,255,0.35)" opacity="0.85" />

        <!-- Leaf -->
        <path d="M92 18 C100 10, 120 12, 110 26 C100 38, 80 36, 92 18 Z" fill="url(#goldGrad)" transform="translate(-10,-6) scale(0.9)" />

        <!-- Stem -->
        <rect x="86" y="24" width="6" height="18" rx="2" fill="url(#goldGrad)" transform="rotate(-12 89 33)" />
      </g>

      <!-- Snake coiled around apple - simplified, elegant silhouette + scale suggestion -->
      <g transform="translate(90,26)">
        <!-- Shadow under snake -->
        <path d="M28 170 C50 150, 120 150, 150 140 C170 134, 188 120, 184 104 C180 88, 140 98, 120 106 C90 118, 68 132, 28 170 Z" fill="#000" opacity="0.25" />

        <!-- Main snake body - thick ribbon -->
        <path d="M30 140 C40 110, 78 92, 110 92 C150 92, 170 110, 160 140 C150 170, 120 180, 95 170 C70 160, 44 150, 30 140 Z"
          fill="url(#snakeDark)" stroke="url(#snakeIridescent)" stroke-width="2" />

        <!-- Upper coil wrapping the apple -->
        <path d="M80 50 C95 40, 120 38, 140 52 C160 66, 150 90, 130 98 C110 106, 88 102, 78 90 C66 76, 70 62, 80 50 Z"
          fill="url(#snakeDark)" stroke="url(#snakeIridescent)" stroke-width="2" />

        <!-- Head - facing forward and slightly up -->
        <g transform="translate(146,36) rotate(20)">
          <path d="M0 0 C18 -4, 36 6, 28 18 C20 30, -6 24, 0 0 Z" fill="#111" stroke="url(#goldGrad)" stroke-width="1" />
          <!-- eye -->
          <circle cx="14" cy="6" r="2" fill="#D4AF37" />
          <!-- subtle scale highlight -->
          <path d="M4 6 C8 2, 18 4, 22 8" stroke="#2b2b2b" stroke-width="0.8" opacity="0.4" fill="none" />
        </g>

        <!-- Decorative gold accent under head -->
        <path d="M120 100 L160 100" stroke="url(#goldGrad)" stroke-width="2" stroke-linecap="round" opacity="0.9" />
      </g>

      <!-- Wordmark -->
      <text x="50%" y="275" text-anchor="middle" font-family="Playfair Display, serif" font-size="28" fill="url(#goldGrad)" letter-spacing="6">DIABOLICAL</text>
      <text x="50%" y="296" text-anchor="middle" font-family="Cormorant Garamond, serif" font-size="12" fill="#BFA772" letter-spacing="6">COLOGNE</text>
    </svg>
  </div>
</body>
</html>
