"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {  Download, Github, Linkedin, Instagram, Facebook } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Spotlight } from "./ui/Spotlight"
import { BackgroundGradient } from "./ui/background-gradient"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-60 sm:pb-32 md:pb-64">
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left md:w-2/5">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              SHAIKH MUHAMMAD USMAN
            </motion.h1>
            <motion.h2
              className="text-xl md:text-2xl mb-6 text-gray-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Web Developer & Designer
            </motion.h2>
            <motion.p
              className="text-base text-gray-400 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Crafting responsive and engaging web experiences with modern technologies and creative solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r  from-blue-400 to-purple-600 text-white hover:from-gray-800 hover:to-black text-lg px-10"
                onClick={() => window.open("/cv/cv.docx", "_blank")}
              >
                Download CV <Download className="ml-2 h-5 w-5" />
              </Button>
              <Link href="#contact">
                <button className="relative inline-flex h-12 overflow-hidden  rounded-md p-[1.5px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]  bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Contact Me
                  </span>
                </button>
                
              </Link>
            </motion.div>
            <motion.div
              className="mt-10 flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { icon: Github, href: "https://github.com/S-M-Usman" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/shaikhmusman" },
                { icon: Instagram, href: "https://www.instagram.com/shaikhmuhammadusman_official/" },
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100067176125902" },
              ].map((social, index) => (
                <Link key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                  <Button size="icon" variant="ghost" className="rounded-full bg-gray-800 hover:bg-gray-700 text-white">
                    <social.icon className="h-5 w-5" />
                  </Button>
                </Link>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full md:w-2/5 mt-8 md:mt-0"
          >
             <BackgroundGradient className="rounded-[22px] max-w-[400px] max-h-[400px] p-4 sm:p-10 bg-black">
            <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-[22px] overflow-hidden bg-black/15 mx-auto">
              <div className="absolute inset-0 z-10" />
              <Image
                src="/main-img.png"
                alt="Shaikh Muhammad Usman"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 " />
            </div>
            </BackgroundGradient>
          </motion.div>
        </div>
      </div>
    </section>
  )
}