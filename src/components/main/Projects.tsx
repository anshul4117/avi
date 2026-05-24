'use client'

import { motion } from 'framer-motion'
import { Wrench } from 'lucide-react'

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Animated Background Elements in Sunshine theme */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-16 w-28 h-28 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-24 h-24 bg-orange-400/10 rounded-lg rotate-12 float-animation"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/2 translate-x-1/2 w-96 h-96 bg-gradient-to-r from-primary/20 via-orange-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center justify-center min-h-[300px]">
          {/* Animated Glowing Icon Wrapper */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
            className="mb-8 p-6 rounded-3xl bg-amber-500/10 border border-amber-500/25 shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-md"></div>
            <Wrench className="h-12 w-12 text-primary animate-pulse relative z-10" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            title="Projects Under Construction"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-foreground via-primary to-amber-500 bg-clip-text text-transparent mb-4 tracking-tight"
          >
            Projects Under Construction
          </motion.h2>

          {/* Text */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
          >
            Network engineering topologies, cloud routing labs, and data science dashboards are currently on the way. Check back soon!
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default Projects
