import { motion } from 'framer-motion'

const products = [
  { id: 'noir', name: 'Diabolical Noir', desc: 'An intoxicating blend of dark woods and amber.', img: '/image 1.jpg' },
  { id: 'inferno', name: 'Diabolical Inferno', desc: 'A fiery heart of spice and smokey leather.', img: '/image 2.jpg' },
  { id: 'eden', name: 'Diabolical Eden', desc: 'Forbidden florals wrapped in velvet musk.', img: '/image 3.jpg' }
]

export default function SignatureCollection(){
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-diagold text-center">Signature Collection</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map(p=> (
            <motion.div key={p.id} className="rounded-xl bg-[rgba(255,255,255,0.02)] p-6 border border-transparent hover:border-diagold hover:shadow-xl transition" whileHover={{ y: -6 }}>
              <div className="h-64 rounded-lg flex items-center justify-center overflow-hidden">
                {/* Use images uploaded to repo root (names with spaces). */}
                <img src={encodeURI(p.img)} alt={p.name} className="object-cover w-full h-full rounded-md" onError={(e)=>{ e.currentTarget.src='/images/placeholder-bottle.jpg' }} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{p.name}</h3>
              <p className="mt-2 text-sm text-gray-300">{p.desc}</p>
              <button className="mt-4 px-4 py-2 rounded-full border border-diagold text-diagold">Coming Soon</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
