"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ImageContainer } from "../ui/3d-image-container"
import { ChevronDown, ChevronUp } from "lucide-react"

const education = [
  {
    year: "2024 - Present",
    degree: "Bachelor of Science in Computer Science",
    school: "IQRA University , North Campus",
    description: "Focused on web development, algorithms, and data structures.",
  },
  {
    year: "2018 - 2022",
    degree: "Associate Degree in Information Technology",
    school: "Apex Educators",
    description: "Gained foundational knowledge in programming and IT systems.",
  },
  // Add more education items as needed
]

const certifications = [
  {
    name: "Advance Diploma in IT",
    issuer: "Trade Testing Board",
    date: "2024",
    credential: "ND0044",
  },
  {
    name: "React Developer",
    issuer: "freeCodeCamp",
    date: "2024",
    credential: "FCC1234",
  },
  {
    name: "Resonsive Web Design",
    issuer: "Free Code camp",
    date: "2024",
    credential: "FCC12345",
  },
  // Add more certifications as needed
]

export default function About() {
  const [expandedEdu, setExpandedEdu] = useState<number | null>(null)
  const [expandedCert, setExpandedCert] = useState<number | null>(null)

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 text-lg text-white">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Passionate Web Developer
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <motion.div
            className="relative w-64 h-64 md:w-96 md:h-96 mx-auto md:mx-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ImageContainer src="/main-img.png" alt="Shaikh Muhammad Usman" className="w-64 h-64 md:w-96 md:h-96" />
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-white/90 text-xl text-center md:text-left">
              With a strong foundation in modern web technologies, I create engaging and responsive web applications
              that deliver exceptional user experiences. My passion for coding and problem-solving drives me to
              continuously learn and improve my skills.
            </p>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <section className="mb-32 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-bold  text-white text-center mb-16"
          >
            Education Journey
          </motion.h2>
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              className="absolute left-[8px] md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 to-pink-500"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1 }}
            />
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`relative flex items-start md:items-center ${
                  index % 2 === 0 ? "justify-start md:justify-end" : "justify-start md:justify-start"
                } mb-8`}
              >
                <div className={`w-full pl-8 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8 md:pl-0" : "md:pl-8"}`}>
                  <motion.div
                    className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setExpandedEdu(expandedEdu === index ? null : index)}
                  >
                    <span className="inline-block px-4 py-2 bg-purple-500/20 rounded-lg text-purple-400 font-semibold mb-4">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-white">{item.degree}</h3>
                    <p className="text-white">{item.school}</p>
                    <AnimatePresence>
                      {expandedEdu === index && (
                        <motion.p
                          className="text-gray-300 mt-2"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          {item.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <motion.div className="mt-2 text-purple-400" animate={{ rotate: expandedEdu === index ? 180 : 0 }}>
                      {expandedEdu === index ? <ChevronUp /> : <ChevronDown />}
                    </motion.div>
                  </motion.div>
                </div>
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="w-full h-full bg-purple-500 rounded-full" />
                  <div className="absolute w-8 h-8 bg-purple-500/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-ping" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-32 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-bold text-center text-white mb-16"
          >
            Certifications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.credential}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-xl transition-all duration-500"
                  animate={{ scale: expandedCert === index ? 1.1 : 1 }}
                />
                <motion.div
                  className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 cursor-pointer"
                  onClick={() => setExpandedCert(expandedCert === index ? null : index)}
                >
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20"
                    animate={{ rotate: expandedCert === index ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 rounded-bl-xl" />
                  </motion.div>
                  <h3 className="text-xl text-white font-bold mb-4">{cert.name}</h3>
                  <p className="text-gray-400">{cert.issuer}</p>
                  <p className="text-purple-400 mt-2">{cert.date}</p>
                  <AnimatePresence>
                    {expandedCert === index && (
                      <motion.p
                        className="text-sm text-gray-500 mt-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        Credential: {cert.credential}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <motion.div className="mt-2 text-purple-400" animate={{ rotate: expandedCert === index ? 180 : 0 }}>
                    {expandedCert === index ? <ChevronUp /> : <ChevronDown />}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

