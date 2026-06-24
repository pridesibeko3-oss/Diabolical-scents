module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        diagreen: '#0B3D2E',
        diagold: '#C9A76D',
        diamoss: '#5B8A5A',
        diaivory: '#F7F5F0',
        diablack: '#050505'
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Cormorant Garamond', 'serif'],
        script: ['Great Vibes', 'cursive']
      },
      backgroundImage: {
        'paper-texture': "url('/images/paper-texture.jpg')"
      }
    }
  },
  plugins: []
}
