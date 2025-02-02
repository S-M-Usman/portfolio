"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skills = [
  { name: "Next.js", level: 90 },
  { name: "React", level: 95 },
  { name: "TypeScript", level: 85 },
  { name: "JavaScript", level: 90 },
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "Bootstrap", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Netlify", level: 80 },
  { name: "Vercel", level: 85 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 text-lg text-white">
            Skills
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Technical Proficiency
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-xl">
            A showcase of my expertise in various web technologies and tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="mb-2 flex justify-between items-center">
                <span className="font-medium text-white text-lg">{skill.name}</span>
                <span className="text-white/70 text-lg">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-700/50 backdrop-blur rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-blue-400 to-purple-600"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

