"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "../ui/3d-card"

const projects = [
  {
    id: "1",
    title: " Marketplace Builder Hackathon 2025",
    description: "Marketplace Builder is a platform that allows users to create and customize their own marketplace websites. This project was built using React, Next.js, and Tailwind CSS.",
    image: "/p1.png",
    tags: ["React", "Next.js", "Tailwind CSS"],
    liveLink: "https://giaic-marketplace-builder-hackathon-2025.vercel.app/",
  },
  {
    id: "2",
    title: "FC Barcelona Website",
    description: "A website of FC Barcelona built using React, Next.js, and Tailwind CSS.",
    image: "/p2.png",
    tags: ["React", "Next.js", "Tailwind CSS"],
    liveLink: "https://giaic-q2-next-js-step01-assignment-tailwind-css.vercel.app/",
  },
]

export default function Projects() {
  const [error, setError] = useState<string | null>(null)

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {error && <div className="text-red-500 text-center mb-8">{error}</div>}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 text-lg text-white">
            Projects
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Featured Work
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-xl">
            A selection of my recent projects showcasing my skills and expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-900/50 backdrop-blur relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black/50 dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ="50" className="text-xl font-bold text-white">
                    {project.title}
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-white text-sm mt-2">
                    {project.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={project.title}
                    />
                  </CardItem>
                  <CardItem translateZ="80" className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-blue-500/20 text-blue-300">
                        {tag}
                      </Badge>
                    ))}
                  </CardItem>
                  <div className="flex justify-between items-center mt-8">
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal text-white hover:text-blue-400 transition-colors"
                    >
                      <CardItem translateZ={20}>
                        View Project →
                      </CardItem>
                    </Link>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-blue-500 text-white text-xs font-bold hover:bg-blue-600 transition-colors"
                    >
                      Learn More
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

