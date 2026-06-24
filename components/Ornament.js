export default function Ornament({ className = '', position = 'top-left', width = 160 }){
  const positions = {
    'top-left': 'absolute top-6 left-6',
    'top-right': 'absolute top-6 right-6',
    'bottom-left': 'absolute bottom-6 left-6',
    'bottom-right': 'absolute bottom-6 right-6'
  };
  return (
    <svg className={`${positions[position]} ${className} ornamental`} width={width} height={width} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M10 170 C 40 120, 90 90, 160 80" stroke="#C9A76D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.95"/>
      <path d="M20 150 C 50 120, 100 100, 170 90" stroke="#C9A76D" strokeWidth="1.2" opacity="0.6"/>
      <circle cx="30" cy="30" r="2" fill="#C9A76D" opacity="0.7" />
    </svg>
  )
}
