import { motion } from 'framer-motion'
import Ornament from './Ornament'

const products = [
  { id: 'noir', name: 'Diabolical Noir', desc: 'An intoxicating blend of dark woods and amber.', img: '/images/bottle1.jpg' },
  { id: 'inferno', name: 'Diabolical Inferno', desc: 'A fiery heart of spice and smokey leather.', img: '/images/bottle2.jpg' },
  { id: 'eden', name: 'Diabolical Eden', desc: 'Forbidden florals wrapped in velvet musk.', img: '/images/bottle3.jpg' }
]

export default function SignatureCollection(){
  return (
    <section className="py-24 px-6 bg-diablack">
      <div className="max-w-6xl mx-auto relative">
        <Ornament position="top-left" width={200} />
        <Ornament position="bottom-right" width={200} />
        <h2 className="text-3xl md:text-4xl h-display text-gold text-center">Signature Collection</h2>
        <p className="text-center text-sm text-gray-300 mt-3 max-w-2xl mx-auto">A sensorial journey — handcrafted scents inspired by the Garden of Eden, each bottle a story of forbidden beauty.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map(p=> (
            <motion.div key={p.id} className="rounded-xl glass p-6 border border-transparent hover:border-diagold hover:shadow-2xl transition transform hover:-translate-y-3" whileHover={{ y: -6 }}>
              <div className="h-64 rounded-lg flex items-center justify-center overflow-hidden relative">
                <img src={encodeURI(p.img)} alt={p.name} className="object-cover w-full h-full rounded-md" onError={(e)=>{ e.currentTarget.src='/images/placeholder-bottle.jpg' }} />
                <img src="/images/leaf-silhouette.svg" alt="" className="absolute inset-0 m-auto w-48 h-48 opacity-10 pointer-events-none" />
                <div className="absolute bottom-4 right-4 bg-gradient-to-t from-black/40 to-transparent px-3 py-1 rounded text-xs">Limited</div>
              </div>
              <h3 className="mt-6 text-xl md:text-2xl font-display text-gold">{p.name}</h3>
              <p className="mt-2 text-sm text-gray-300">{p.desc}</p>
              <button className="mt-4 px-4 py-2 rounded-full border border-diagold text-gold gold-btn">Coming Soon</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
