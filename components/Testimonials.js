import { motion } from 'framer-motion'

const reviews = [
  'An unforgettable scent.',
  'Luxury redefined.',
  'Dark elegance in a bottle.'
]

export default function Testimonials(){
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif text-diagold text-center">What Collectors Say</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r,i)=> (
            <motion.div key={i} className="p-6 rounded-lg bg-[rgba(255,255,255,0.03)] border border-diagold" whileHover={{ y: -4 }}>
              <div className="text-diagold">★★★★★</div>
              <p className="mt-4 text-gray-200">"{r}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
